/** @format */

import axios from "axios";
import type { WeatherData, ForecastItem, CurrentWeather, MonthlyTempData } from "@/types";

const API_KEY = (process.env.OPENWEATHER_API_KEY as string) || "aafe3d7d42a8e60e89e065fce487f881";

// --- Helper: Get current local time ---
function getCurrentTime() {
	const now = new Date();
	return {
		day: now.toLocaleDateString("en-US", { weekday: "long" }),
		date: now.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
		time: now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
	};
}

// --- Fetch current weather ---
export async function fetchCurrentWeather(location: string): Promise<CurrentWeather | null> {
	try {
		const time = getCurrentTime();
		const { data } = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${API_KEY}&units=metric`
		);

		return {
			location: data.name,
			day: time.day,
			date: time.date,
			time: time.time,
			temperature: data.main.temp,
			high: data.main.temp_max,
			low: data.main.temp_min,
			condition: data.weather[0].main,
			feelsLike: data.main.feels_like,
			icon: data.weather[0].icon,
			coord: data.coord,
		};
	} catch (error) {
		console.error("fetchCurrentWeather failed:", error);
		return null;
	}
}

// --- Fetch forecast (grouped by day) ---
export async function fetchForecast(location: string): Promise<ForecastItem[]> {
	try {
		// FIXME change url
		// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=14&daily=temperature_2m_min,temperature_2m_max
		const { data } = await axios.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&appid=${API_KEY}&units=metric`
		);

		const grouped: Record<string, ForecastItem> = {};

		data.list.forEach((item: any) => {
			const dayName = new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "short" });
			if (!grouped[dayName]) {
				grouped[dayName] = {
					day: dayName,
					temperature: Math.round(item.main.temp),
					condition: item.weather[0].main,
					icon: item.weather[0].icon,
				};
			}
		});

		const forecast = Object.values(grouped);
		if (forecast.length > 0) forecast[0].day = "Today";

		return forecast;
	} catch (error) {
		console.error("fetchForecast failed:", error);
		return [];
	}
}

// --- Fetch monthly average temperature from Open-Meteo ---
export async function getMonthlyAverageTemp(location: string): Promise<MonthlyTempData[]> {
	try {
		const year = new Date().getFullYear();
		const month = new Date().getMonth();
		const start = `${year}-01-01`;
		const end = `${year}-0${month}-31`;

		// 1️⃣ Get coordinates for city
		const { data: cityData } = await axios.get(
			`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=${API_KEY}`
		);

		if (!cityData[0]) return [];

		const { lat, lon } = cityData[0];

		// 2️⃣ Fetch daily temps from Open-Meteo
		const { data } = await axios.get(
			`https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&daily=temperature_2m_mean&timezone=auto`
		);

		const { time, temperature_2m_mean } = data.daily;

		// 3️⃣ Aggregate by month
		const months = Array.from({ length: 12 }, (_, i) => ({ name: new Date(0, i).toLocaleString("en", { month: "short" }), temps: [] as number[] }));

		time.forEach((date: string, i: number) => {
			const monthIndex = new Date(date).getMonth();
			const temp = temperature_2m_mean[i];
			if (temp !== null) months[monthIndex].temps.push(temp);
		});

		return months.map((m) => ({
			name: m.name,
			temp: m.temps.length ? parseFloat((m.temps.reduce((a, b) => a + b, 0) / m.temps.length).toFixed(1)) : null,
		}));
	} catch (error) {
		console.error("getMonthlyAverageTemp failed:", error);
		return [];
	}
}

// --- Fetch all data concurrently ---
export async function getAllWeatherData(location: string): Promise<WeatherData> {
	const results = await Promise.allSettled([fetchCurrentWeather(location), fetchForecast(location), getMonthlyAverageTemp(location)]);

	return {
		current: results[0].status === "fulfilled" ? results[0].value : null,
		forecast: results[1].status === "fulfilled" ? results[1].value : [],
		monthlyAverageTemp: results[2].status === "fulfilled" ? results[2].value : [],
	};
}

// --- Exported function for external use ---
export const fetchWeatherData = async (location: string): Promise<WeatherData> => await getAllWeatherData(location);
