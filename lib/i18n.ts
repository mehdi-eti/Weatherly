/** @format */

export const translations: Record<string, Record<string, string>> = {
	en: {
		// Login
		login_title: "Login",
		login_placeholder: "Enter Your Name",
		login_button: "LOGIN",
		language_label: "Language",

		// Header
		header_title: "Weather Dashboard",
		header_search_label: "Search Your Location",
		mode: "Mode",
		language: "Language",

		// Current Weather
		current_high: "High",
		current_low: "Low",
		current_feels_like: "Feels Like",

		// Forecast
		forecast_title: "2 weeks Forecast",
		forecast_today: "Today",

		// Monthly Temp Chart
		chart_title: "Average Monthly Temperature",
		temp: "Temp",

		// Footer
		footer_rights: "All rights of this site are reserved for Mohammad Mehdi Etezadi.",
		footer_contact: "contact us: etezadi_mehdi@yahoo.com",

		// General
		logout: "Logout",
		loading: "Loading data...",
		error: "Failed to load weather data.",

		// Conditions
		Sunny: "Sunny",
		Cloudy: "Cloudy",
		Rainy: "Rainy",
		PartlyCloudy: "Partly Cloudy",
		Stormy: "Stormy",

		// Days
		Monday: "Monday",
		Tuesday: "Tuesday",
		Wednesday: "Wednesday",
		Thursday: "Thursday",
		Friday: "Friday",
		Saturday: "Saturday",
		Sunday: "Sunday",

		// Months
		Jan: "Jan",
		Feb: "Feb",
		Mar: "Mar",
		Apr: "Apr",
		May: "May",
		Jun: "Jun",
		Jul: "Jul",
		Aug: "Aug",
		Sep: "Sep",
		Oct: "Oct",
		Nov: "Nov",
		Dec: "Dec",
	},
	fa: {
		// Login
		login_title: "ورود",
		login_placeholder: "نام خود را وارد کنید",
		login_button: "ورود",
		language_label: "زبان",

		// Header
		header_title: "داشبورد هواشناسی",
		header_search_label: "مکان خود را جستجو کنید",
		mode: "مود",
		language: "زبان",

		// Current Weather
		current_high: "بیشینه",
		current_low: "کمینه",
		current_feels_like: "احساس می‌شود",

		// Forecast
		forecast_title: "پیش‌بینی ۲ هفته",
		forecast_today: "امروز",

		// Monthly Temp Chart
		chart_title: "میانگین دمای ماهانه",
		temp: "درجه",

		// Footer
		footer_rights: "کلیه حقوق این سایت متعلق به محمد مهدی اعتضادی می‌باشد.",
		footer_contact: "تماس با ما: etezadi_mehdi@yahoo.com",

		// General
		logout: "خروج",
		loading: "در حال بارگذاری اطلاعات...",
		error: "خطا در بارگذاری اطلاعات آب و هوا.",

		// Conditions
		Clear: "آفتابی",
		Clouds: "ابری",
		Rainy: "بارانی",
		PartlyCloudy: "نیمه ابری",
		Stormy: "طوفانی",

		// Days
		Mon: "دوشنبه",
		Tue: "سه‌شنبه",
		Wed: "چهارشنبه",
		Thu: "پنج‌شنبه",
		Fri: "جمعه",
		Sat: "شنبه",
		Sun: "یکشنبه",
		Monday: "دوشنبه",
		Tuesday: "سه‌شنبه",
		Wednesday: "چهارشنبه",
		Thursday: "پنج‌شنبه",
		Friday: "جمعه",
		Saturday: "شنبه",
		Sunday: "یکشنبه",

		// Months
		Jan: "دی",
		Feb: "بهمن",
		Mar: "اسفند",
		Apr: "فروردین",
		May: "اردیبهشت",
		Jun: "خرداد",
		Jul: "تیر",
		Aug: "مرداد",
		Sep: "شهریور",
		Oct: "مهر",
		Nov: "آبان",
		Dec: "آذر",
	},
};

export const getTranslator =
	(language: "en" | "fa") =>
	(key: string): string => {
		return translations[language][key] || key;
	};
