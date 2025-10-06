/** @format */

export function WeatherIcon({ icon }: { icon: string }) {
	const iconUrl = `./assets/${icon}.png`;
	return <img src={iconUrl} alt='Weather icon' width={64} height={64} />;
}
