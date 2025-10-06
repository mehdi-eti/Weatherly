/** @format */

import React, { useEffect } from "react";
import { useAppContext } from "./contexts/AppContext";
import LoginPage from "./components/LoginPage";
import WeatherDashboard from "./components/WeatherDashboard";

const App: React.FC = () => {
	const { theme, language, user } = useAppContext();

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
	}, [theme]);

	useEffect(() => {
		document.documentElement.lang = language;
		document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
	}, [language]);

	return user ? <WeatherDashboard /> : <LoginPage />;
};

export default App;
