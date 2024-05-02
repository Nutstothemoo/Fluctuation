import { getDictionary } from "get-dictionary";
import React from "react";
import Paragraph from "./Paragraph";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import {images} from "./images";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };


const FourPage = async ({ params }) => {
	const dictionary = await getDictionary(params.locale);

	return (
		<div className="relative top-0 flex h-[80vh] min-h-[900px] w-full items-center justify-center flex-col">
			<div className="flex flex-col gap-5">
				<EmblaCarousel slides={images} options={OPTIONS} />
				<div className="md:text-md text-center sm:text-sm lg:text-xl font-semibold italic">
					<Paragraph text={`${dictionary.line7} ${dictionary.line10}`} />
				</div>
			</div>
		</div>
	);
};

export default FourPage;
