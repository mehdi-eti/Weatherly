/** @format */
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import stylisRTLPlugin from "stylis-plugin-rtl";
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";

type Mode = "light" | "dark";
type Direction = "ltr" | "rtl";

interface ColorModeContext {
	mode: Mode;
	toggleColorMode: () => void;
	direction: Direction;
	setDirection: (d: Direction) => void;
}

const ColorModeContext = createContext<ColorModeContext>({
	mode: "light",
	toggleColorMode: () => {},
	direction: "ltr",
	setDirection: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

function createEmotionCache(direction: Direction) {
	if (direction === "rtl") {
		return createCache({ key: "mui-rtl", stylisPlugins: [stylisRTLPlugin] });
	}
	return createCache({ key: "mui" });
}

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [mode, setMode] = useState<Mode>((localStorage.getItem("themeMode") as Mode) || "light");
	const [direction, setDirectionState] = useState<Direction>((localStorage.getItem("direction") as Direction) || "ltr");

	const cache = useMemo(() => createEmotionCache(direction), [direction]);

	const toggleColorMode = () => {
		setMode((prev) => {
			const next = prev === "light" ? "dark" : "light";
			localStorage.setItem("themeMode", next);
			return next;
		});
	};

	const setDirection = (d: Direction) => {
		setDirectionState(d);
		localStorage.setItem("direction", d);
	};

	useEffect(() => {
		document.documentElement.setAttribute("dir", direction);
	}, [direction]);

	const theme = useMemo(
		() =>
			createTheme({
				direction: direction,
				palette: {
					mode,
					background: {
						default: mode === "dark" ? "#151D32" : "#f7fafc",
						paper: mode === "dark" ? "#292F45" : "#fff",
					},
				},
				typography: {
					fontFamily: `'Inter', 'Roboto', 'Noto Nastaliq Urdu', sans-serif`,
				},
			}),
		[mode, direction]
	);

	return (
		<ColorModeContext.Provider value={{ mode, toggleColorMode, direction, setDirection }}>
			<CacheProvider value={cache}>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</MuiThemeProvider>
			</CacheProvider>
		</ColorModeContext.Provider>
	);
};
