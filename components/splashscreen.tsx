"use client";

import React from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
	animate: {
		x: [0, -1000], // augmenter cette valeur pour accélérer le défilement
		transition: {
			x: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 9, // réduire cette valeur pour accélérer le défilement
			},
		},
	},
};
const opacityVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 2 } },
};

const SplashScreen = ({ fluidFont, regularFont }) => {
	const dates = ["LILLE • 6-7/07", "BRUSSELS • 13-14/07", "UTRECHT • 20-21/07", "BUDAPEST • 14/09"]; // dates à afficher
	const allDates = [...dates, ...dates, ...dates]; // duplique le tableau des dates
	return (
		<div className={`mx-auto relative top-0 flex w-full overflow-x-hidden h-screen ${regularFont.className}`}>
			<motion.div className="absolute w-full text-white py-2" variants={marqueeVariants} animate="animate">
				<div
					className={`mt-24 flex text-center text-2xl md:text-5xl text-[#5D27DA] whitespace-nowrap ${regularFont} `}
				>
					{allDates.map((date, index) => (
						<span key={index} className="mr-20">
							{date}
						</span> // marge à droite pour ajouter de l'espace
					))}
				</div>
			</motion.div>
			<motion.div
				variants={opacityVariants}
				initial="hidden"
				animate="visible"
				className="text-[rgb(93,39,218)] transform -translate-y-20 items-center flex flex-col text-center w-full mx-auto h-screen justify-center font-semibold gap-9 text-2xl md:text-4xl space-y-9 ${fluidFont}"
			>
				<p className="text-xl md:text-4xl font-bold  tracking-[.30em] mb-10">
					SMMMILE X URBAN BOAT <span className="font-normal">PRESENT </span>{" "}
				</p>
				<p className={`font-normal tracking-wider text-6xl lg:text-10xl	 ${fluidFont.className}`}>
					{" "}
					Fluctuations
				</p>
				<p className="lg:text-6xl font-normal tracking-[.30em]	">Festival 2024 </p>
			</motion.div>
		</div>
	);
};

export default SplashScreen;
