import { getDictionary } from "get-dictionary";
import React from "react";
import Paragraph from "./Paragraph";
import eu from "../public/assets/eu.webp";
import smileImage from "../public/assets/creative1.webp";
import creative2 from "../public/assets/creative2.webp";
import creative3 from "../public/assets/creative3.webp";
import creative4 from "../public/assets/creative4.webp";
import creative5 from "../public/assets/creative5.webp";
import Image from "next/image";

interface FirstPageProps {
	params: {
		locale: string;
	};
}

const CreativeEurope = async ({ params, font }) => {
	const dictionary = await getDictionary(params.locale);

	return (
		<div className="relative top-0 flex w-full items-center justify-center">
			<div className="flex flex-col">
				<div className="divide-y divide-gray-200 dark:divide-gray-700">
					<div className="space-y-2 pb-8 pt-6 md:space-y-5">
						<h1 className={`md:leading-14 text-3xl font-extrabold leading-9 tracking-wider text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl ${font.className}`}>
							Creative Europe
						</h1>
						<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
							{dictionary.titleEU}
						</p>
					</div>
					<div className="m-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
						<div className="m-2 flex items-center justify-center p-2 md:w-1/2">
							<Image src={eu} alt="EU" width={250} height={250} className="rounded-xl" />
						</div>
						<div className="flex flex-col items-center justify-center text-center md:w-1/2 md:text-start">
							<div className="p-4">
								<Paragraph text={`${dictionary.line16}`} />
							</div>
						</div>
					</div>
					<div className="flex flex-col-reverse space-y-4 p-2 md:flex-row md:space-x-4 md:space-y-0">
						<div className="flex items-center justify-center text-center md:w-1/2 md:text-end">
							<Paragraph text={`${dictionary.line21}`} />
						</div>
						<div className="m-2 flex items-center justify-center p-4 md:w-1/2">
							<Image src={smileImage} alt="smile" width={250} height={250} className="rounded-xl" />
						</div>
					</div>
					<div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
						<div className="m-2 flex items-center justify-center p-4 md:w-1/2">
							<Image src={creative2} alt="creative2" width={250} height={250} className="rounded-xl" />
						</div>
						<div className="flex items-center justify-center text-center md:w-1/2 md:text-start">
							<Paragraph text={`${dictionary.line17}`} />
						</div>
					</div>
					<div className="flex flex-col-reverse space-y-4 md:flex-row md:space-x-4 md:space-y-0">
						<div className="flex items-center justify-center p-2 text-center md:w-1/2 md:text-end">
							<Paragraph text={`${dictionary.line18}`} />
						</div>
						<div className="m-2 flex items-center justify-center p-4 md:w-1/2">
							<Image src={creative3} alt="creative3" width={250} height={250} className="rounded-xl" />
						</div>
					</div>
					<div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
						<div className="m-2 flex items-center justify-center p-4 md:w-1/2">
							<Image src={creative4} alt="creative4" width={250} height={250} className="rounded-xl" />
						</div>
						<div className="flex items-center justify-center p-2 text-center md:w-1/2 md:text-start ">
							<Paragraph text={`${dictionary.line19}`} />
						</div>
					</div>
					<div className="flex flex-col-reverse space-y-4 md:flex-row md:space-x-4 md:space-y-0">
						<div className="flex items-center justify-center p-2 text-center md:w-1/2 md:text-end">
							<Paragraph text={`${dictionary.line20}`} />
						</div>
						<div className="m-2 flex items-center justify-center p-4 text-center md:w-1/2 md:text-start">
							<Image src={creative5} alt="creative5" width={400} height={400} className="rounded-xl" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreativeEurope;
