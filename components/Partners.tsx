import React from 'react'
import partner1 from '../public/assets/partner1.webp'
import technical from '../public/assets/technical.webp'
import culture from '../public/assets/culture.webp'
import Image from 'next/image'
import media from '../public/assets/media.webp'


const Partners = async () => {
  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <div className="flex flex-col">
        <p>Media Partners</p>
        <Image src={media} width={500} alt="media partners" />
        <p>Financial Partners</p>
        <Image src={partner1} width={500} alt="financial partners"/>
        <p>Cultural & Impact Partner</p>
        <Image src={culture} width={500} alt="impact partners" />
        <p>Technical Partner</p>
        <Image src={technical} width={500}  alt="technical partner" />
      </div>
    </div>
  )
}

export default Partners
