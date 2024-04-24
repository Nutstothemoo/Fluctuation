interface Festival {
	title: string;
	slug: string;
	description: string;
	href?: string;
	imgSrc?: string;
}

const festivalsData: Festival[] = [
	{
		title: "Brussels",
		slug: "brussels",
		description: `Experience the best of electronic music at ElectroFest. With performances from top DJs and producers from around the world, ElectroFest is the ultimate destination for electronic music fans.`,
		imgSrc: "https://i.ibb.co/zfvdRYj/belgique.jpg",
		href: "/festival/brussels",
	},
	{
		title: "Lille",
		slug: "lille",
		description: `Travel back in time with SynthWave, a festival dedicated to the retro sounds of the 80s. Featuring a lineup of pioneering and modern synthwave artists, SynthWave is a must-visit for fans of synth-driven music.`,
		imgSrc: "https://i.ibb.co/r4hKxKz/france.jpg",
		href: "/festival/lille",
	},
	{
		title: "Utrecht",
		slug: "utrecht",
		description: `Travel back in time with SynthWave, a festival dedicated to the retro sounds of the 80s. Featuring a lineup of pioneering and modern synthwave artists, SynthWave is a must-visit for fans of synth-driven music.`,
		imgSrc: "https://i.ibb.co/stZGt7P/PaysBas.jpg",
		href: "/festival/utrecht",
	},
];

export default festivalsData;
