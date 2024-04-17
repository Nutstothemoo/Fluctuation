import Image from 'next/image'
import afficheBateausanstexte from '../public/assets/afficheBateausanstexte.jpg'
import afficheBateusanstextwebp from '../public/assets/afficheBateausanstexte.webp'
export default function Background() {
  return (
    <Image
      alt="Fluctuation background"
      src={afficheBateusanstextwebp}
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