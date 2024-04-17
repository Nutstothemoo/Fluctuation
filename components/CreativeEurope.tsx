import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph'
import eu from '../public/assets/eu.webp'
import smileImage from '../public/assets/creative1.webp'
import creative2 from '../public/assets/creative2.webp'
import creative3 from '../public/assets/creative3.webp'
import creative4 from '../public/assets/creative4.webp'
import creative5 from '../public/assets/creative5.webp'
import Image from 'next/image'

interface FirstPageProps {
  params: {
    locale: string
  }
}

const CreativeEurope = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex w-full items-center justify-center">
      <div className="flex flex-col">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
              Creative Europe
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Info about the Creative Europe Programme
            </p>
          </div>
          <div className="md:text-md items-center text-justify sm:text-sm lg:text-xl">
            <Image src={eu} alt="EU" width={300} className="rounded-xl" />
            <Paragraph text={`${dictionary.line16} `} />
          </div>
          <div>
            <div>
              <Image src={smileImage} width={300} alt="smile" className="rounded-xl" />
              <Paragraph text={`${dictionary.line21} `} />
            </div>
            <div>
              <Image src={creative2} width={300} alt="creative2" className="rounded-xl" />
              <Paragraph text={`${dictionary.line17} `} />
            </div>
            <div>
              <Image src={creative3} width={300} alt="creative3" className="rounded-xl" />
              <Paragraph text={`${dictionary.line18} `} />
            </div>
            <div>
              <Image src={creative4} width={300} alt="creative4" className="rounded-xl" />
              <Paragraph text={`${dictionary.line19} `} />
            </div>
            <div>
              <Image src={creative5} width={300} alt="creative5" className="rounded-xl" />
              <Paragraph text={`${dictionary.line20} `} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreativeEurope
