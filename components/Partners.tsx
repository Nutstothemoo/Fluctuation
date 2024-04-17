import React from 'react'
import partner1 from '../public/assets/partner1.webp'
import technical from '../public/assets/technical.webp'
import culture from '../public/assets/culture.webp'
import Image from 'next/image'
import media from '../public/assets/media.webp'

const Partners = async () => {
  return (
    <div className="relative top-0 flex w-full items-center justify-center">
      <div className="flex flex-col">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
              Partners
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Without them Fluctuations would not be possible
            </p>
          </div>
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <p className="my-4 text-center text-lg font-semibold">Media</p>
            <div className="flex items-center justify-center">
              <Image src={media} width={500} alt="media partners" />
            </div>
            <p className="my-4 text-center text-lg font-semibold">Financial</p>
            <div className="flex items-center justify-center">
              <Image src={partner1} width={500} alt="financial partners" />
            </div>
            <p className="my-4 text-center text-lg font-semibold">Cultural & Impact</p>
            <div className="flex items-center justify-center">
              <Image src={culture} width={900} alt="impact partners" />
            </div>
            <p className="my-4 text-center text-lg font-semibold">Technical</p>
            <div className="flex items-center justify-center">
              <Image src={technical} width={700} alt="technical partner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
