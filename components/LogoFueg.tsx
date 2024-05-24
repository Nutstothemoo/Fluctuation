"use client";
// Logo.tsx

import { useTheme } from "next-themes";
import Image from "next/image";
import logofluctuationLight from "../public/assets/LOGO-FUEGO-LIGHT.webp";
import logofluctuationDark from "../public/assets/LOGO-FUEGO-DARK.webp";
import logoblue from "../public/assets/logoblue.png";
const LogoFueg = () => {
	const { theme } = useTheme();

	return <Image src={logoblue} alt="Logo Fluctuation" width={60} height={60} />;
};

export default LogoFueg;
