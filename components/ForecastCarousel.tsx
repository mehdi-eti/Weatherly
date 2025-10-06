/** @format */

import { Box, Card, Typography, useTheme } from "@mui/material";

import { ForecastItem } from "@/types";
import { useAppContext } from "@/contexts/AppContext";
import { WeatherIcon } from "@/services/weatherIcon";

export const ForecastCarousel: React.FC<{ data: ForecastItem[] }> = ({ data }) => {
	const { t } = useAppContext();
	const theme = useTheme();

	return (
		<Card sx={{ p: 3, overflowX: "auto", whiteSpace: "nowrap" }}>
			<Typography variant='h6' fontWeight={600} mb={2}>
				{t("forecast_title")}
			</Typography>

			<Box sx={{ display: "flex", gap: 2 }}>
				{data.map((item, i) => (
					<Card
						key={i}
						sx={{
							height: 240,
							boxShadow: 2,
							minWidth: 130,
							flexShrink: 0,
							borderRadius: 3,
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
							backgroundColor: theme.palette.mode === "dark" ? "#3F4861" : "#fff",
							justifyContent: "space-around",
							color: theme.palette.text.primary,
						}}>
						<Typography variant='subtitle2' fontWeight={600}>
							{i === 0 ? t("forecast_today") : t(item.day)}
						</Typography>
						{WeatherIcon({ icon: item.condition })}
						<Typography variant='h6' fontWeight={700}>
							{Math.round(item.temperature)}°C
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{t(item.condition)}
						</Typography>
					</Card>
				))}
			</Box>
		</Card>
	);
};
