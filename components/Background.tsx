import Image from "next/image";
import fp from "../public/assets/F-header-fb-page.jpg";

export default function Background() {
	return (
		<Image
			alt="Fluctuation background"
			src={fp}
			placeholder="blur"
			quality={100}
			fill
			sizes="100vw"
			style={{
				objectFit: "cover",
			}}
		/>
	);
}
