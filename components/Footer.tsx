/** @format */

import { useAppContext } from "@/contexts/AppContext";
import { CalendarMonth, Email } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Footer: React.FC = () => {
	const { t, language } = useAppContext();
	const currentDate = new Date().toLocaleDateString(language === "en" ? "en-US" : "fa-IR", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<Box
			component='footer'
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexWrap: "wrap",
				p: 3,
				mt: 2,
				borderTop: 1,
				borderColor: "divider",
				color: "text.secondary",
				fontSize: 12,
			}}>
			<Box display='flex' alignItems='center' gap={1}>
				<Typography>{t("footer_rights")}</Typography>
			</Box>
			<Box display='flex' alignItems='center' gap={3}>
				<Box display='flex' alignItems='center' gap={0.5}>
					<Email fontSize='small' />
					<span>{t("footer_contact")}</span>
				</Box>
				<Box display='flex' alignItems='center' gap={0.5}>
					<CalendarMonth fontSize='small' />
					<span>{currentDate.replace(/,/g, "")}</span>
				</Box>
			</Box>
		</Box>
	);
};
