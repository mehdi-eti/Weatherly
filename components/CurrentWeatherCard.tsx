/** @format */

import React from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { useAppContext } from "../contexts/AppContext";
import { WeatherIcon } from "@/services/weatherIcon";

export const CurrentWeatherCard: React.FC<{ data: any }> = ({ data }) => {
	const { t } = useAppContext();
	const theme = useTheme();

	return (
		<Card sx={{ p: 5.5 }}>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: "center",
					justifyContent: "space-between",
					gap: 3,
				}}>
				<Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1,
							mb: 1,
							px: 1.5,
							py: 0.5,
							bgcolor: theme.palette.action.hover,
							borderRadius: 1,
						}}>
						<LocationOn fontSize='small' />
						<Typography fontWeight={500}>{data.location}</Typography>
					</Box>

					<Typography variant='h4' fontWeight={700}>
						{t(data.day)}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.date} &nbsp; {data.time}
					</Typography>

					<Typography variant='h2' fontWeight={800} my={2}>
						{data.temperature}°C
					</Typography>

					<Typography variant='body2' color='text.secondary'>
						{t("current_high")}: {data.high}° &nbsp;&nbsp; {t("current_low")}: {data.low}°
					</Typography>
				</Box>

				<Box textAlign='center' justifyItems='center'>
					{WeatherIcon({ icon: data.condition })}
					<Typography variant='h6' fontWeight={600}>
						{t(data.condition)}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{t("current_feels_like")} {data.feelsLike}°
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};
