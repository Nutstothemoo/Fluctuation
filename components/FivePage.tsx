import { getDictionary } from "get-dictionary";
import React from "react";
import Paragraph from "./Paragraph";
import Image from "next/image";
import festiboat3 from "../public/assets/test.webp";
interface FirstPageProps {
	params: {
		locale: string;
	};
}

const FivePage = async ({ params }) => {
	const dictionary = await getDictionary(params.locale);

	return (
		<div className="relative top-0 h-screen w-full items-center justify-center flex flex-col space-y-5">
			<h2 className="text-center text-lg font-bold md:text-4xl mb-10">{dictionary.fivePageTile}</h2>
			<Image src={festiboat3} alt="festiboat3" width={800} />

			<div className="md:text-md text-center sm:text-sm lg:text-xl">
				<Paragraph
					text={`  ${dictionary.line1}
          ${dictionary.line2}
          ${dictionary.line3}
          ${dictionary.line4}`}
				/>
			</div>
		</div>
	);
};

export default FivePage;
