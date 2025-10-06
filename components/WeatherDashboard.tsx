/** @format */

import React, { useEffect, useState, useCallback } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";

import { Header } from "./Header";
import { Footer } from "./Footer";
import ErrorState from "./ErrorState";
import type { WeatherData } from "../types";
import { ForecastCarousel } from "./ForecastCarousel";
import { MonthlyTempChart } from "./MonthlyTempChart";
import { useAppContext } from "../contexts/AppContext";
import { CurrentWeatherCard } from "./CurrentWeatherCard";
import { fetchWeatherData } from "../services/weatherService";

/* ----------------------------- Main Dashboard ----------------------------- */
const WeatherDashboard: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("Tehran");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<string | null>(false);
	const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const { t } = useAppContext();

	const handleSearchChange = (value: string) => {
		console.log("User searched for:", value);
		setSearchTerm(value);
	};
	const loadData = useCallback(async () => {
		if (!debouncedSearch) return setWeatherData(null);
		try {
			setError(null);
			setLoading(true);
			const data = await fetchWeatherData(debouncedSearch);
			setWeatherData(data);
		} catch {
			setError(t("error"));
		} finally {
			setLoading(false);
		}
	}, [debouncedSearch, t]);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(searchTerm);
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [searchTerm]);
	useEffect(() => {
		loadData();
	}, [loadData]);

	if (error) {
		return (
			<ErrorState
				message={error}
				onRetry={() => {
					setError(null);
					setWeatherData(null);
					loadData();
				}}
			/>
		);
	}

	return (
		<Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
			<Header onSearchChange={handleSearchChange} />
			{loading || !weatherData ? (
				<Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
					<CircularProgress />
					<Typography sx={{ ml: 2 }}>{t("loading")}</Typography>
				</Box>
			) : (
				<>
					<Box component='main' sx={{ p: 3 }}>
						<Grid container spacing={3}>
							<Grid size={{ xs: 12, md: 5 }}>
								<CurrentWeatherCard data={weatherData.current} />
							</Grid>
							<Grid size={{ xs: 12, md: 7 }}>
								<MonthlyTempChart data={weatherData.monthlyAverageTemp} />
							</Grid>
							<Grid size={{ xs: 12 }}>
								<ForecastCarousel data={weatherData.forecast} />
							</Grid>
						</Grid>
					</Box>
					<Footer />
				</>
			)}
		</Box>
	);
};

export default WeatherDashboard;
