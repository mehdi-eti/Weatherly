/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./contexts/AppContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppThemeProvider } from "./theme/ThemeProvider";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
	<React.StrictMode>
		<AppThemeProvider>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</AppThemeProvider>
	</React.StrictMode>
);
