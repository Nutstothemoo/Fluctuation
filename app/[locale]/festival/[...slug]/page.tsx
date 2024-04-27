import AnimatedBackground from "@/components/AnimatedBackground";
import BoatResidency from "@/components/BoatResidency";
import SectionContainer from "@/components/SectionContainer";
import festivalsData from "@/data/festivalData";
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar";
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
          {/* nouvelle section */}
          <div className="container py-12">
          <div className="-m-4 flex flex-wrap items-center justify-center gap-4">
            {festival.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="default" 
                className={`bg-gradient-to-br from-purple-500 to-indigo-500 font-semibold p-2`}
              >
                {tag.tag}
              </Badge>
            ))}
          </div>
      </div>
      <div className="container py-12">
      <h2 className="text-xl font-bold">Line-up</h2>
        <div className="-m-4 flex flex-wrap items-center justify-center gap-4">
          {festival.artists.map((artist, index) => (
            <Avatar 
              key={index} 
              name={artist.name} 
              src={artist.imgSrc} 
              alt={artist.name}
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