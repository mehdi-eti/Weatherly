/** @format */

import React, { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Paper, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel, IconButton } from "@mui/material";

import { useColorMode } from "@/theme/ThemeProvider";
import { useAppContext } from "@/contexts/AppContext";

const LoginPage: React.FC = () => {
	const { t, language, setLanguage, login } = useAppContext();
	const { mode, toggleColorMode } = useColorMode();

	const [name, setName] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (name.trim()) return login(name);
	};

	return (
		<Box
			sx={{
				px: 2,
				gap: 5,
				display: "flex",
				minHeight: "100vh",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "center",
				bgcolor: "background.default",
			}}>
			<Paper className='w-1/2' elevation={3} sx={{ display: "flex", borderRadius: 3, overflow: "hidden" }}>
				<Box
					component='form'
					onSubmit={handleSubmit}
					sx={{ p: 6, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
					<Box>
						<Typography variant='h5' fontWeight='bold' textAlign='center' mb={4}>
							{t("login_title") || "Login"}
						</Typography>

						<TextField
							fullWidth
							value={name}
							sx={{ mb: 3 }}
							variant='standard'
							onChange={(e) => setName(e.target.value)}
							label={t("login_placeholder") || "Enter Your Name"}
						/>
					</Box>

					<Button type='submit' variant='contained' color='primary' fullWidth sx={{ py: 1.2, fontWeight: 600 }}>
						{t("login_button") || "LOGIN"}
					</Button>
				</Box>

				{mode === "dark" ? (
					<img className='flex-1' src='./assets/login-dark.svg' alt='login image' />
				) : (
					<img className='flex-1' src='./assets/login.svg' alt='login image' />
				)}
			</Paper>

			<Box
				sx={{
					mt: 2,
					gap: 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<FormControl size='small'>
					<Select
						value={language}
						variant='standard'
						label={t("language_label") || "Language"}
						onChange={(e) => setLanguage(e.target.value as "en" | "fa")}
						sx={{ minWidth: 120 }}>
						<MenuItem value='en'>English</MenuItem>
						<MenuItem value='fa'>فارسی</MenuItem>
					</Select>
				</FormControl>

				<IconButton onClick={toggleColorMode} color='primary'>
					{mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
				</IconButton>
			</Box>
		</Box>
	);
};

export default LoginPage;
