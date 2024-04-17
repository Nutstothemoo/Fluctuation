interface Festival {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Festival[] = [
  {
    title: 'ElectroFest',
    description: `Experience the best of electronic music at ElectroFest. With performances from top DJs and producers from around the world, ElectroFest is the ultimate destination for electronic music fans.`,
    imgSrc: '/static/images/electrofest.jpg',
    href: 'https://www.electrofest.com',
  },
  {
    title: 'SynthWave',
    description: `Travel back in time with SynthWave, a festival dedicated to the retro sounds of the 80s. Featuring a lineup of pioneering and modern synthwave artists, SynthWave is a must-visit for fans of synth-driven music.`,
    imgSrc: '/static/images/synthwave.jpg',
    href: '/blog/synthwave-festival',
  },
]

export default projectsData
