/** @format */

import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { LogoIcon } from "./icons";
import { SettingsMenu } from "./SettingsMenu";
import { useAppContext } from "@/contexts/AppContext";

interface HeaderProps {
	onSearchChange?: (value: string) => void; // 👈 callback to parent
}

export const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
	const { t } = useAppContext();
	const [searchValue, setSearchValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
		onSearchChange?.(value); // 👈 pass up to parent if provided
	};

	return (
		<Box
			component='header'
			sx={{
				py: 2,
				px: 4,
				boxShadow: 1,
				display: "flex",
				alignItems: "center",
				bgcolor: "background.default",
				justifyContent: "space-between",
			}}>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<img src='./assets/logo.svg' alt='logo' />
				<h2>{t("header_title")}</h2>
			</Box>

			<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
				<TextField size='small' label={t("header_search_label") || "Search"} value={searchValue} onChange={handleChange} />
				<SettingsMenu />
			</Box>
		</Box>
	);
};
