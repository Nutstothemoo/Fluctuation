import { client } from "@/components/client";
import Card from "@/components/Card";
import { genPageMetadata } from "app/seo";
import SectionContainer from "@/components/SectionContainer";
import AnimatedBackground from "@/components/AnimatedBackground";
import localFont from "next/font/local";
import { getDictionary } from "get-dictionary";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
	return builder.image(source);
}
// Font files can be colocated inside of `app`

const fluidFont = localFont({
	src: "../../liquido-fluid.otf",
	display: "swap",
});

export const metadata = genPageMetadata({ title: "Projects" });

export default async function Projects({ params: { locale } }) {
	const festivalsData = await client.fetch(`*[_type == "festival"]`);
	const dictionary = await getDictionary(locale);
	return (
		<>
			<div className="mt-48">
				<SectionContainer>
					<div className="divide-y divide-gray-200 dark:divide-gray-700">
						<div className="space-y-2 pb-8 pt-6 md:space-y-5">
							<h1
								className={`md:leading-14 text-3xl font-extrabold leading-9 tracking-wider text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl ${fluidFont.className}`}
							>
								Festival
							</h1>
							<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
								{dictionary.titleFestival}
							</p>
						</div>
						<div className="container py-12">
							<div className="-m-4 flex flex-wrap">
								{festivalsData.map((festival) => (
									<Card
										key={festival.title}
										title={festival.title}
										description={festival.smalldescription}
										imgSrc={urlFor(festival.Image).url()}
										href={festival.href}
									/>
								))}
							</div>
						</div>
					</div>
				</SectionContainer>
			</div>
			<AnimatedBackground />
		</>
	);
}
