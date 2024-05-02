import { getDictionary } from "get-dictionary";
import React from "react";
import Image from "next/image";
import L05 from "../public/assets/L05.jpg";

const ThirdPage = async ({ params }) => {
	const dictionary = await getDictionary(params.locale);
	return (
		<div className="relative top-0 flex h-[1500px] md:h-[800px] w-full items-center justify-center">
			<div className="flex flex-col items-center justify-center md:gap-6 lg:gap-24 sm:flex-row">
				<div className="w-[300px] min-h-full rounded-lg p-2 md:w-1/2">
					<div
						className={
							"h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"
						}
					>
						<Image
							alt={"fesitboat2"}
							src={L05}
							className="object-cover object-center sm:h-52 lg:h-64 z-30"
							width={544}
							height={306}
						/>
						<div className="p-6">
							<h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
								{dictionary.titlethirdpage1}
							</h2>
							<div className="prose max-w-none md:h-[200px] overflow-hidden text-gray-500 dark:text-gray-400">
								<p className="text-start md:text-lg lg:text-xl">{dictionary.line9} :</p>
								<ul className="list-disc p-6">
									<li className="text-justify text-sm sm:text-base md:text-lg lg:text-xl">
										{dictionary.firstcity}
									</li>
									<li className="text-sm sm:text-base md:text-lg lg:text-xl">
										{dictionary.secondcity}
									</li>
									<li className="text-sm sm:text-base md:text-lg lg:text-xl">
										{dictionary.thirdcity}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[300px] min-h-full rounded-lg p-2 md:w-1/2 z-30">
					<div
						className={
							"z-30 h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"
						}
					>
						<Image
							alt={"fesitboat2"}
							src={L05}
							className="object-cover object-center sm:h-52 lg:h-64 z-30"
							width={544}
							height={306}
						/>
						<div className="p-6">
							<h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
								{dictionary.titlethirdpage2}
							</h2>
							<div className="prose max-w-none md:h-[200px] text-gray-500 dark:text-gray-400">
								<p className="text-start md:text-md lg:text-xl">{dictionary.line10}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdPage;
