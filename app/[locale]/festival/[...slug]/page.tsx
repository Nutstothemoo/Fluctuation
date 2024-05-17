import AnimatedBackground from "@/components/AnimatedBackground";
import SectionContainer from "@/components/SectionContainer";
import { Badge } from "../../../../@/components/ui/badge";
import Image from "next/image";
import { client } from "@/components/client";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../@/components/ui/avatar";
import localFont from "next/font/local";
import imageUrlBuilder from "@sanity/image-url";

// Font files can be colocated inside of `app`

const fluidFont = localFont({
	src: "../../../liquido-fluid.otf",
	display: "swap",
});
const builder = imageUrlBuilder(client);
function urlFor(source) {
	return builder.image(source);
}

export default async function Page({
	params,
}: {
	params: {
		slug: string;
		locale: string;
	};
}) {
	const query = `*[_type == "festival" && slug.current == $slug]`;
	const festivalArray = await client.fetch(query, { slug: params.slug[0] });
	const festival = festivalArray[0];
	if (!festival) {
		return (
			<div className="mt-48">
				<SectionContainer>
					<div className="divide-y divide-gray-200 dark:divide-gray-700">
						<div className="space-y-2 pb-8 pt-6 md:space-y-5">
							<h1
								className={`md:leading-14 text-3xl font-extrabold leading-9 tracking-wider text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl ${fluidFont.className}`}
							>
								{params.slug}
							</h1>
							<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Festival Not found</p>
						</div>
						<div className="container py-12">
							<div className="-m-4 flex flex-wrap"></div>
						</div>
					</div>
				</SectionContainer>
			</div>
		);
	}

	return (
		<>
			<div className="mt-48">
				<SectionContainer>
					<div className="divide-y divide-gray-200 dark:divide-gray-700">
						<div className="space-y-2 pb-8 pt-6 md:space-y-5">
							<h1
								className={`md:leading-14 text-3xl font-extrabold leading-9 tracking-wider text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl ${fluidFont.className}`}
							>
								{festival.title}
							</h1>

							<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
								{festival.smallDescription}
							</p>
						</div>
						<div className="container py-6">
							<div className="m-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
								<div className="m-2 flex items-center justify-center p-2 md:w-1/2">
									<Image
										src={urlFor(festival.Image).url()}
										alt={festival.title}
										width={300}
										height={400}
										className="rounded-xl"
									/>
								</div>
								<div className="flex flex-col items-center md:items-start justify-center text-center md:w-1/2 md:text-start gap-3 md:gap-6">
									<div className="flex items-center space-x-2 md:w-full">
										<FaCalendar className="text-xl md:text-2xl flex-shrink-0" />
										<p className="text-sm md:text-lg font-bold flex-grow">
											{new Date(festival.date).toLocaleDateString(params.locale, {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</p>
									</div>
									<div className="flex items-center space-x-2 md:w-full">
										<FaLocationDot className="text-xl md:text-2xl flex-shrink-0" />
										<p className="text-sm md:text-lg font-bold flex-grow">
											{festival.exactlocation}
										</p>
									</div>
									<div className="p-4 italic">{festival.description}</div>
								</div>
							</div>
						</div>
						{/* nouvelle section */}
						{festival.tags && festival.tags.length > 0 && (
							<div className="container py-12">
								<div className="flex flex-wrap items-center justify-center gap-4">
									{festival.tags.map((tag, index) => (
										<Badge
											key={index}
											variant="default"
											className={`shadow-lg border-2 transform transition duration-200 hover:scale-110 ease-in-out bg-gradient-to-br from-purple-500 to-indigo-500 font-semibold p-2 text-white`}
										>
											{tag.name}
										</Badge>
									))}
								</div>
							</div>
						)}
						{/* nouvelle section */}
						<div className="container gap-2 py-12">
							<h2 className="text-xl md:text-2xl font-bold mb-5"> Line-up </h2>
							{festival.artists && festival.artists.length > 0 && (
								<div className="flex flex-col">
									{festival.artists
										.sort(
											(a, b) =>
												new Date(a.LineupStartTime).getTime() -
												new Date(b.LineupEndTime).getTime()
										)
										.map((artist, index) => (
											<div key={index} className="flex flex-col items-center ">
												<div className= "flex flex-row gap-3">
													<p className="font-bold">{artist.name}</p>
													<p>
														{new Date(artist.startTime).toLocaleTimeString()} -{" "}
														{new Date(artist.endTime).toLocaleTimeString()}
													</p>
												</div>

											</div>
										))}
								</div>
							)}
						</div>
						<div className="container gap-2 py-12">
							{/* nouvelle section */}
							<h2 className="text-xl md:text-2xl font-bold mb-5">Artists</h2>
							{festival.artists && festival.artists.length > 0 && (
								<div className="flex flex-wrap items-center justify-center gap-4">
									{festival.artists.map((artist, index) => (
										<div key={index} className="flex flex-col items-center gap-2 p-2">
											<Avatar
												className="shadow-lg h-20 w-20 md:h-40 md:w-40 transform transition duration-200 hover:scale-110 ease-in-out"
												key={index}
											>
												<AvatarImage
													key={index}
													src={urlFor(artist.image).url()}
													alt={artist.name}
												/>
												<AvatarFallback
													key={index}
													className="border-1 shadow-lg first:transform transition duration-200 hover:scale-110 ease-in-out bg-gradient-to-br from-purple-500 to-indigo-500"
												>
													{artist.name}
												</AvatarFallback>
											</Avatar>
											<p className="text-center font-semibold">{artist.name}</p>
											{artist.soundcloudLink && (
												<a
													href={artist.soundcloudLink}
													className="transform transition duration-200 hover:scale-110 ease-in-out bg-gradient-to-br from-purple-500 to-orange-500 inline-block text-white px-4 py-2 rounded-full shadow-lg"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="2em"
														height="2em"
														viewBox="0 0 24 24"
													>
														<path
															fill="currentColor"
															d="M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.67c0-1.48-1.12-2.67-2.62-2.67c-.38 0-.7.08-1.03.22c-.24-2.34-2.23-4.17-4.68-4.17c-1.17 0-2.28.44-3.11 1.16m-.88 1.02c-.3-.18-.62-.32-.97-.39V17h1.39V9.34c-.15.16-.29.36-.42.55m-2.35-.54V17h.92V9.38c-.19-.03-.38-.04-.58-.04c-.12 0-.23 0-.34.01M6.5 10v7h.91V9.54c-.33.11-.64.27-.91.46m-1.67 2.5c-.06 0-.12-.06-.19-.09V17h.92v-6.14c-.37.48-.62 1.05-.73 1.64m-2.04-.28v4.69c.21.06.45.09.71.09h.22v-4.86c-.08-.01-.16-.02-.22-.02c-.26 0-.5.04-.71.1M1 14.56c0 .75.34 1.41.87 1.86v-3.71c-.53.44-.87 1.11-.87 1.85"
														/>
													</svg>
												</a>
											)}
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</SectionContainer>
			</div>
			<AnimatedBackground />
		</>
	);
}
