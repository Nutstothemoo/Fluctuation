"use client";
import Paragraph from "./Paragraph";
import AnimatedBackgroundHome from "./AnimatedBackgroundHome";
import React, { useRef } from "react"; // Ajoutez useRef ici

interface FirstPageProps {
	dictionary: {
		line1: string;
		line2: string;
		line3: string;
		line4: string;
	};
}

const FirstPage = ({ dictionary }: FirstPageProps) => {
	const containerRef = useRef(null);

	return (
		<div
			ref={containerRef}
			className="relative top-0 flex h-[60vh] md:min-h-[500px] w-full items-center justify-center"
		>
			<div className="md:text-lg text-center sm:text-sm lg:text-2xl font-semibold italic ">
				<Paragraph text={`"${dictionary.newline}`} />
			</div>
		</div>
	);
};

export default FirstPage;
