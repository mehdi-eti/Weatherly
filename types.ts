/** @format */

export interface CurrentWeather {
	location: string;
	day: string;
	date: string;
	time: string;
	temperature: number;
	high: number;
	low: number;
	condition: string;
	feelsLike: number;
	icon: string;
	coord: { lat: string; lon: string };
}

export interface ForecastItem {
	day: string;
	condition: string;
	temperature: number;
	icon: string;
}

export interface MonthlyTempData {
	name: string;
	temp: number;
}

export interface WeatherData {
	current: CurrentWeather;
	forecast: ForecastItem[];
	monthlyAverageTemp: MonthlyTempData[];
}

export type Theme = "light" | "dark";
export type Language = "en" | "fa";
export type WeatherIconType = "Sunny" | "Cloudy" | "Rainy" | "PartlyCloudy" | "Stormy";

export interface User {
	name: string;
}

export interface AppContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	language: Language;
	setLanguage: (language: Language) => void;
	user: User | null;
	login: (name: string) => void;
	logout: () => void;
	t: (key: string) => string;
}
