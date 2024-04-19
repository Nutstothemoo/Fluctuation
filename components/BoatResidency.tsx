import { getDictionary } from "get-dictionary";
import React from "react";
import eu from "../public/assets/eu.webp";
import Br1 from "../public/assets/BR1.webp";
import Br2 from "../public/assets/BR2.webp";
import Br3 from "../public/assets/br3.webp";
import Br4 from "../public/assets/BR4.webp";
import Br5 from "../public/assets/br5.webp";
import Br6 from "../public/assets/BR6.webp";
import Image from "next/image";
import Paragraph from "./Paragraph";

interface FirstPageProps {
	params: {
		locale: string;
	};
}

const BoatResidency = async ({ params }) => {
	const dictionary = await getDictionary(params.locale);

	return (
		<div className="relative top-0 flex w-full items-center justify-center">
			<div className="flex flex-col">
				<div className="divide-y divide-gray-200 dark:divide-gray-700">
					<div className="space-y-2 pb-8 pt-6 md:space-y-5">
						<h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
							Boat Residency
						</h1>
						<p className="text-lg leading-7 text-gray-500 dark:text-gray-400"> Join the Flutopia</p>
					</div>
					{/* PARITE 1 */}
					<div className="space-y-2 pb-8 pt-6 md:space-y-5">
						<div className="flex flex-col-reverse space-y-4 p-2 md:flex-row md:space-x-4 md:space-y-0">
							<div className="flex flex-col space-y-8 justify-center text-center md:w-1/2 md:text-end">
								<h2 className="text-center md:text-end">{dictionary.boatline1}</h2>
								<Paragraph text={`${dictionary.boatline3}`} />
							</div>
							<div className="m-2 flex items-center justify-center p-4 md:w-1/2">
								<Image src={Br1} alt="m2" width={420} height={250} className="rounded-xl" />
							</div>
						</div>
						<div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
							<div className="m-2 flex items-center justify-center p-4 md:w-1/2">
								<Image src={Br2} alt="EU" width={420} height={250} className="rounded-xl" />
							</div>
							<div className="flex flex-col space-y-8 justify-center text-center md:w-1/2 md:text-start">
								<Paragraph text={`${dictionary.boatline4}`} />
								<Paragraph text={`${dictionary.boatline5}`} />
							</div>
						</div>
					</div>
				</div>
				{/* PARTIE 2 FORM ET INFO */}
				<div className="flex flex-row space-x-6">
            <div className="flex flex-col" >
              <Image src={Br3} width={600} className="rounded-xl shadow-lg" alt="Br3" />
            </div>
          <div className="flex flex-col space-y-6">
              <Image src={Br4} width={200} className="rounded-xl shadow-md" alt="Br4" />
              <Image src={Br5} width={200} className="rounded-xl shadow-md" alt="Br5" />
              <Image src={Br6} width={200} className="rounded-xl shadow-md" alt="Br6" />
          </div>
				</div>
        <div className="space-y-2 flex flex-col">
                <p className="text-lg font-semibold">{dictionary.boatline6}</p>
                <ul className="list-disc list-inside space-y-1">
                  <li className="text-sm">{dictionary.boatline7}</li>
                  <li className="text-sm">{dictionary.boatline8}</li>
                </ul>
              <div>
                  <Paragraph text={`${dictionary.boatline9}`} />
              </div>
              <div>
                  <Paragraph text={`${dictionary.boatline10}`} />
              </div>
              <div>
                  <Paragraph text={`${dictionary.boatline11}`} />
              </div>
              <div>
                  <Paragraph text={`${dictionary.boatline12}`} />
              </div>
            </div>
        {/* PARTIE 3 */}
        <div className="flex flex-col space-y-8 md:space-x-4 md:space-y-0 text-center italic">
					<div>
          <Paragraph text={`${dictionary.boatline13}`} />
          </div>
          <div> 
          <Paragraph text={`${dictionary.boatline14}`} />
          </div>
          <div>
          <Paragraph text={`${dictionary.boatline15}`} />
          </div>					
				</div>
			</div>
		</div>
	);
};

export default BoatResidency;
