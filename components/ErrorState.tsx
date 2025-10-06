/** @format */

import React from "react";
import { ErrorOutline, Refresh } from "@mui/icons-material";
import { Box, Typography, Button, Paper, useTheme } from "@mui/material";

interface ErrorStateProps {
	message?: string;
	onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
	const theme = useTheme();

	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			minHeight='70vh'
			sx={{
				backgroundColor: "background.default",
				color: "text.primary",
				p: 3,
			}}>
			<Paper
				elevation={3}
				sx={{
					p: 5,
					textAlign: "center",
					maxWidth: 420,
					borderRadius: 4,
					bgcolor: theme.palette.mode === "dark" ? "rgba(30,30,30,0.9)" : "background.paper",
					backdropFilter: "blur(6px)",
				}}>
				<ErrorOutline
					sx={{
						fontSize: 64,
						color: theme.palette.error.main,
						mb: 2,
					}}
				/>
				<Typography variant='h6' gutterBottom fontWeight={600}>
					Oops! Something went wrong
				</Typography>
				<Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
					{message || "We couldn’t fetch the weather data. Please check your connection and try again."}
				</Typography>
				<Button
					variant='contained'
					color='primary'
					startIcon={<Refresh />}
					onClick={onRetry}
					sx={{
						textTransform: "none",
						borderRadius: 2,
						px: 3,
					}}>
					Try Again
				</Button>
			</Paper>
		</Box>
	);
};

export default ErrorState;
