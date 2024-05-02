import React from "react";
import partner1 from "../public/assets/partner1.webp";
import technical from "../public/assets/technical.webp";
import culture from "../public/assets/culture.webp";
import Image from "next/image";
import media from "../public/assets/media.webp";
import { getDictionary } from "get-dictionary";

const Partners = async ({ params, font }) => {
	const dictionary = await getDictionary(params.locale);
	
	return (
		<div className="relative top-0 flex w-full items-center justify-center">
			<div className="flex flex-col">
				<div className="divide-y divide-gray-200 dark:divide-gray-700">
					<div className="space-y-2 pb-8 pt-6 md:space-y-5">
						<h1 className={`md:leading-14 text-3xl font-extrabold leading-9 tracking-wider text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl ${font.className}`}>
							Partners
						</h1>
						<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
							{dictionary.titlePartners}
						</p>
					</div>
					<div className="space-y-2 pb-8 pt-6 md:space-y-5">
						<div className="text-center text-xl lg:text-4xltext-center  font-bold md:text-4xl">Media</div>
						<div className="flex items-center justify-center rounded-xl bg-white">
							<Image src={media} width={500} alt="media partners" className="rounded-xl" />
						</div>
						</div>
						<div className="space-y-2 pb-8 pt-6 md:space-y-5">
						<h2 className="text-center text-xl lg:text-4xltext-center  font-bold md:text-4xl">Financial</h2>
						<div className="flex items-center justify-center rounded-xl bg-white">
							<Image src={partner1} width={500} alt="financial partners" className="rounded-xl" />
						</div>
					</div>
					<div className="space-y-2 pb-8 pt-6 md:space-y-5">
						<h2 className="text-center text-xl lg:text-4xltext-center  font-bold md:text-4xl">
							Cultural & Impact
						</h2>
						<div className="flex items-center justify-center rounded-xl bg-white">
							<Image src={culture} width={900} alt="impact partners" className="rounded-xl" />
						</div>
					</div>
					<div className="space-y-2 pb-8 pt-6 md:space-y-5">

						<div className="text-center text-xl lg:text-4xltext-center  font-bold md:text-4xl">
							Technical
						</div>
						<div className="flex items-center justify-center rounded-xl bg-white">
							<Image src={technical} width={700} alt="technical partner" className="rounded-xl" />
						</div>
					</div>
					</div>
			</div>
		</div>
	);
};

export default Partners;
