import AnimatedBackground from "@/components/AnimatedBackground";
import BoatResidency from "@/components/BoatResidency";
import SectionContainer from "@/components/SectionContainer";
import festivalsData from "@/data/festivalData";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function Page({
  params,
}: {
  params: {
      slug: string;
      locale: string;
  };
}) {
  const festival = festivalsData.find((festival) => {
    return festival.slug.toLowerCase() === params.slug[0];
  });

if (!festival) {
  return (
    <div className="mt-48">
      <SectionContainer>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
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
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
              {festival.title}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{festival.description}</p>
          </div>
          <div className="container py-6">
          <div className="m-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="m-2 flex items-center justify-center p-2 md:w-1/2">
              <Image src={festival.imgSrc} alt={festival.title} width={300} height={400} className="rounded-xl" />
            </div>
            <div className="flex flex-col items-center md:items-start justify-center text-center md:w-1/2 md:text-start gap-3 md:gap-6">
              <div className="flex items-center space-x-2 md:w-full">
                <FaCalendar className="text-xl md:text-2xl flex-shrink-0" />
                <p className="text-sm md:text-lg font-bold flex-grow">{festival.date}</p>
              </div>
              <div className="flex items-center space-x-2 md:w-full">
                <FaLocationDot className="text-xl md:text-2xl flex-shrink-0" />
                <p className="text-sm md:text-lg font-bold flex-grow">{festival.exactlocation}</p>
              </div>
              <div className="p-4 italic">
                {festival.description}
              </div>
            </div>
          </div>
          </div>
          {/* nouvelle section */}
          <div className="container py-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {festival.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="default" 
                className={`shadow-lg border-2 transform transition duration-200 hover:scale-110 ease-in-out bg-gradient-to-br from-purple-500 to-indigo-500 font-semibold p-2`}
              >
                {tag.tag}
              </Badge>
            ))}
          </div>
          </div>
          {/* nouvelle section */}
          <div className="container gap-2 py-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">Line-up</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
            {festival.artists.map((artist, index) => (
              <div className="flex flex-col items-center gap-2 p-2">
                <Avatar
                  className="shadow-lg h-20 w-20 md:h-40 md:w-40 transform transition duration-200 hover:scale-110 ease-in-out"
                  key={index}
                >
                  <AvatarImage  src={artist.imgSrc} alt={artist.name} />
                  <AvatarFallback className="border-1 shadow-lg first:transform transition duration-200 hover:scale-110 ease-in-out bg-gradient-to-br from-purple-500 to-indigo-500">{artist.name}</AvatarFallback>
                </Avatar>
                <p className="text-center font-semibold">{artist.name}</p>
                <a href={artist.soundcloudLink} className="transform transition duration-200 hover:scale-110 ease-in-out bg-gradient-to-br from-purple-500 to-orange-500 inline-block text-white px-4 py-2 rounded-full shadow-lg">
                  >
                </a>
              </div>
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