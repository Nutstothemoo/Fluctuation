import Image from 'next/image'
import afficheBateausanstexte from '../public/assets/afficheBateausanstexte.jpg'

export default function Background() {
  return (
    <Image
      alt="Fluctuation background"
      src={afficheBateausanstexte}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}