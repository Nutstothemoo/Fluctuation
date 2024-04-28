interface Artist {
  name: string;
  imgSrc: string;
  tag: string;
  soundcloudLink: string;
}
interface Festival {
  title: string;
  slug: string;
  description: string;
  href?: string;
  imgSrc?: string;
  tags: { tag: string, color: string }[];
  artists: Artist[];
  date: string;
}
const festivalsData: Festival[] = [
  {
    title: "Brussels",
    slug: "brussels",
    description: `Experience the best of electronic music at ElectroFest. With performances from top DJs and producers from around the world, ElectroFest is the ultimate destination for electronic music fans.`,
    imgSrc: "https://i.ibb.co/zfvdRYj/belgique.jpg",
    href: "/festival/brussels",
    tags: [
      { tag: 'downtempo', color: 'pink' },
      { tag: 'techno', color: 'purple' },
      { tag: 'house', color: 'indigo' }
    ],
    artists: [
      {
        name: 'Artist 1',
        imgSrc: 'https://github.com/shadcn.png',
        tag: 'electronic',
        soundcloudLink: 'https://soundcloud.com/artist1'
      },
      {
        name: 'Artist 1',
        imgSrc: "https://github.com/shadcn.png",
        tag: 'electronic',
        soundcloudLink: 'https://soundcloud.com/artist1'
      },
      {
        name: 'Artist 1',
        imgSrc: "https://github.com/shadcn.png",
        tag: 'electronic',
        soundcloudLink: 'https://soundcloud.com/artist1'
      },
      {
        name: 'Artist 1',
        imgSrc: "https://github.com/shadcn.png",
        tag: 'electronic',
        soundcloudLink: 'https://soundcloud.com/artist1'
      },
      {
        name: 'Artist 1',
        imgSrc: "https://github.com/shadcn.png",
        tag: 'electronic',
        soundcloudLink: 'https://soundcloud.com/artist1'
      },
      {
        name: 'Artist 1',
        imgSrc: "https://github.com/shadcn.png",
        tag: 'electronic',
        soundcloudLink: 'https://soundcloud.com/artist1'
      },
      {
        name: 'Artist 1',
        imgSrc: 'https://example.com/artist1.jpg',
        tag: 'electronic',
        soundcloudLink: 'https://soundcloud.com/artist1'
      },
    ],
    date: '2022-12-31'
  },
  {
    title: "Lille",
    slug: "lille",
    description: `Travel back in time with SynthWave, a festival dedicated to the retro sounds of the 80s. Featuring a lineup of pioneering and modern synthwave artists, SynthWave is a must-visit for fans of synth-driven music.`,
    imgSrc: "https://i.ibb.co/r4hKxKz/france.jpg",
    href: "/festival/lille",
    tags: [
      { tag: 'electronic', color: 'pink' },
      { tag: 'music', color: 'purple' },
      { tag: 'festival', color: 'indigo' }
    ],
    artists: [
      {
        name: 'Artist 2',
        imgSrc: 'https://example.com/artist2.jpg',
        tag: 'synthwave',
        soundcloudLink: 'https://soundcloud.com/artist2'
      },
    ],
    date: '2023-01-01'
  },
  {
    title: "Utrecht",
    slug: "utrecht",
    description: `Travel back in time with SynthWave, a festival dedicated to the retro sounds of the 80s. Featuring a lineup of pioneering and modern synthwave artists, SynthWave is a must-visit for fans of synth-driven music.`,
    imgSrc: "https://i.ibb.co/stZGt7P/PaysBas.jpg",
    href: "/festival/utrecht",
    tags: [
      { tag: 'electronic', color: 'red' },
      { tag: 'music', color: 'indigo' },
      { tag: 'festival', color: 'indigo' }
    ],
    artists: [
      {
        name: 'Artist 3',
        imgSrc: 'https://example.com/artist3.jpg',
        tag: 'synthwave',
        soundcloudLink: 'https://soundcloud.com/artist3'
      },
    ],
    date: '2023-01-02'
  },
];

export default festivalsData;