/** @format */

import React from "react";

// Fix: Use 'as const' to infer literal types for SVG properties, resolving type errors.
const iconProps = {
	width: "1em",
	height: "1em",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
} as const;

export const SunnyIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className}>
		<circle cx='12' cy='12' r='5'></circle>
		<line x1='12' y1='1' x2='12' y2='3'></line>
		<line x1='12' y1='21' x2='12' y2='23'></line>
		<line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
		<line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
		<line x1='1' y1='12' x2='3' y2='12'></line>
		<line x1='21' y1='12' x2='23' y2='12'></line>
		<line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
		<line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
	</svg>
);

export const CloudyIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className}>
		<path d='M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'></path>
	</svg>
);

export const PartlyCloudyIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className} viewBox='0 0 64 64'>
		<path
			d='M41.5 21.5A14.5 14.5 0 0027 7a14.51 14.51 0 00-14.5 14.5c0 8 6.5 14.5 14.5 14.5H46A10.5 10.5 0 0046 15'
			fill='#f9d76c'
			stroke='#f9d76c'
			strokeMiterlimit='10'
			strokeWidth='3'
			transform='translate(0 2)'></path>
		<path
			d='M46 15a10.5 10.5 0 000 21h.5a14.5 14.5 0 0014.5-14.5A14.5 14.5 0 0046.5 7.03C46.33 7 46.17 7 46 7a10.4 10.4 0 00-10 7.5'
			fill='#e6e8e9'
			stroke='#e6e8e9'
			strokeMiterlimit='10'
			strokeWidth='3'></path>
	</svg>
);

export const RainyIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className} viewBox='0 0 64 64'>
		<path
			d='M46.5 31.5h-.32a14.5 14.5 0 00-28.36 0H17.5A10.5 10.5 0 007 42a10.4 10.4 0 0010.5 10.5h28.5A10.5 10.5 0 0057 42a10.4 10.4 0 00-10.5-10.5z'
			fill='#e6e8e9'
			stroke='#e6e8e9'
			strokeMiterlimit='10'
			strokeWidth='3'></path>
		<path d='M32.5 58.5v-11' stroke='#4a90e2' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3'></path>
		<path d='M24.5 58.5v-11' stroke='#4a90e2' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3'></path>
		<path d='M40.5 58.5v-11' stroke='#4a90e2' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='3'></path>
	</svg>
);

export const StormyIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className} viewBox='0 0 64 64'>
		<path
			d='M46.5 31.5h-.32a14.5 14.5 0 00-28.36 0H17.5A10.5 10.5 0 007 42a10.4 10.4 0 0010.5 10.5h28.5A10.5 10.5 0 0057 42a10.4 10.4 0 00-10.5-10.5z'
			fill='#e6e8e9'
			stroke='#e6e8e9'
			strokeMiterlimit='10'
			strokeWidth='3'></path>
		<path d='M33 47.5l-6 8h10l-6 8' stroke='#f9d76c' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='3'></path>
	</svg>
);

export const LocationPinIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className}>
		<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
		<circle cx='12' cy='10' r='3'></circle>
	</svg>
);

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className}>
		<circle cx='12' cy='12' r='5'></circle>
		<line x1='12' y1='1' x2='12' y2='3'></line>
		<line x1='12' y1='21' x2='12' y2='23'></line>
		<line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
		<line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
		<line x1='1' y1='12' x2='3' y2='12'></line>
		<line x1='21' y1='12' x2='23' y2='12'></line>
		<line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
		<line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
	</svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className}>
		<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
	</svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className}>
		<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
		<polyline points='22,6 12,13 2,6'></polyline>
	</svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg {...iconProps} className={className}>
		<rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
		<line x1='16' y1='2' x2='16' y2='6'></line>
		<line x1='8' y1='2' x2='8' y2='6'></line>
		<line x1='3' y1='10' x2='21' y2='10'></line>
	</svg>
);

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
	<svg width='24' height='24' viewBox='0 0 100 100' className={className}>
		<path d='M10 90 L50 10 L90 90 Z' fill='none' stroke='#4A90E2' strokeWidth='10' />
		<path d='M30 90 L50 50 L70 90' fill='none' stroke='#63B3ED' strokeWidth='8' />
	</svg>
);

export const weatherMap: Record<string, { label: string; icon: string }> = {
	Thunderstorm: { label: "Thunderstorm", icon: "⛈️" },
	Drizzle: { label: "Drizzle", icon: "🌦️" },
	Rain: { label: "Rain", icon: "🌧️" },
	Snow: { label: "Snow", icon: "❄️" },
	Mist: { label: "Mist", icon: "🌫️" },
	Smoke: { label: "Smoke", icon: "🌫️" },
	Haze: { label: "Haze", icon: "🌁" },
	Dust: { label: "Dust", icon: "🏜️" },
	Fog: { label: "Fog", icon: "🌫️" },
	Sand: { label: "Sand", icon: "🏖️" },
	Ash: { label: "Ash", icon: "🌋" },
	Squall: { label: "Squall", icon: "🌪️" },
	Tornado: { label: "Tornado", icon: "🌪️" },
	Clear: { label: "Clear Sky", icon: "☀️" },
	Clouds: { label: "Cloudy", icon: "☁️" },
};
