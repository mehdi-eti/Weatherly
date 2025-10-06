/** @format */
import { Box, Card, Typography, useTheme } from "@mui/material";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { MonthlyTempData } from "@/types";
import { useAppContext } from "@/contexts/AppContext";

export const MonthlyTempChart: React.FC<{ data: MonthlyTempData[] }> = ({ data }) => {
	const { t } = useAppContext();
	const {
		palette: { mode },
	} = useTheme();
	const lineColor = mode === "dark" ? "#63B3ED" : "#4A90E2";
	const gridColor = mode === "dark" ? "#4A5568" : "#E2E8F0";
	const textColor = mode === "dark" ? "#A0AEC0" : "#718096";

	return (
		<Card sx={{ p: 3 }}>
			<Typography variant='h6' fontWeight={600} mb={2}>
				{t("chart_title")}
			</Typography>
			<Box sx={{ width: "100%", height: 260 }}>
				<ResponsiveContainer>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray='3 3' stroke={gridColor} />

						<XAxis dataKey='name' tick={{ fill: textColor, fontSize: 12 }} tickFormatter={(monthName: string) => t(monthName)} />

						<YAxis tick={{ fill: textColor, fontSize: 12 }} tickFormatter={(v: number) => `${v}°`} />

						<Tooltip
							isAnimationActive={true}
							formatter={(value: number) => `${value}°`}
							labelFormatter={(monthName: string) => t(monthName)}
							contentStyle={{
								backgroundColor: mode === "dark" ? "#3F4861" : "#FFFFFF",
								border: "1px solid #CBD5E0",
								color: textColor,
								borderRadius: 8,
								boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
							}}
							itemStyle={{ color: textColor, fontSize: 13 }}
						/>

						<Line
							type='monotone'
							dataKey='temp'
							stroke={lineColor}
							strokeWidth={2}
							dot={{ r: 3, fill: lineColor }}
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</Box>
		</Card>
	);
};
