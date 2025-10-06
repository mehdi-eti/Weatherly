/** @format */
import React, { useState } from "react";
import { Settings, ExitToApp } from "@mui/icons-material";
import { Box, Popover, Typography, IconButton, ToggleButtonGroup, ToggleButton, Divider, Button, useTheme } from "@mui/material";

import { useColorMode } from "../theme/ThemeProvider";
import { useAppContext } from "../contexts/AppContext";

export const SettingsMenu: React.FC = () => {
	const theme = useTheme();
	const { mode, toggleColorMode } = useColorMode();
	const { language, setLanguage, logout, t } = useAppContext();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const handleThemeChange = (_: any, newMode: "light" | "dark" | null) => {
		if (newMode) toggleColorMode();
		handleClose();
	};

	const handleLanguageChange = (_: any, newLang: "en" | "fa" | null) => {
		if (newLang) setLanguage(newLang);
		handleClose();
	};

	return (
		<>
			<IconButton onClick={handleOpen} color='primary' sx={{ ml: 1 }}>
				<Settings />
			</IconButton>

			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				slotProps={{
					paper: {
						sx: {
							mt: 1,
							p: 2,
							minWidth: 200,
							borderRadius: 3,
							boxShadow: 4,
							bgcolor: theme.palette.mode === "dark" ? "#292F45" : "#fff",
						},
					},
				}}>
				{/* Mode section */}
				<Box>
					<Typography variant='subtitle2' sx={{ mb: 0.5, color: "text.secondary" }}>
						{t("mode")}
					</Typography>
					<ToggleButtonGroup
						fullWidth
						exclusive
						size='small'
						value={mode}
						onChange={handleThemeChange}
						sx={{ "& .MuiToggleButton-root": { textTransform: "none" } }}>
						<ToggleButton value='light'>🌞 Light</ToggleButton>
						<ToggleButton value='dark'>🌙 Dark</ToggleButton>
					</ToggleButtonGroup>
				</Box>

				<Divider sx={{ my: 1.5 }} />

				{/* Language section */}
				<Box>
					<Typography variant='subtitle2' sx={{ mb: 0.5, color: "text.secondary" }}>
						{t("language")}
					</Typography>
					<ToggleButtonGroup
						exclusive
						fullWidth
						size='small'
						value={language}
						onChange={handleLanguageChange}
						sx={{ "& .MuiToggleButton-root": { textTransform: "none" } }}>
						<ToggleButton value='en'>En</ToggleButton>
						<ToggleButton value='fa'>Fa</ToggleButton>
					</ToggleButtonGroup>
				</Box>

				<Divider sx={{ my: 1.5 }} />

				{/* Logout button */}
				<Button
					className='gap-2'
					fullWidth
					color='error'
					onClick={logout}
					variant='outlined'
					startIcon={<ExitToApp />}
					sx={{ borderRadius: 2, textTransform: "none" }}>
					{t("logout")}
				</Button>
			</Popover>
		</>
	);
};
