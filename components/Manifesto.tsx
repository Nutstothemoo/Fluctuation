import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph'
import manifesto1 from '../public/assets/manifesto1.webp'
import manifesto2 from '../public/assets/manifesto2.webp'
import manifesto3 from '../public/assets/manifesto3.webp'
import manifesto4 from '../public/assets/manifesto4.webp'
import manifesto5 from '../public/assets/manifesto5.webp'
import manifesto6 from '../public/assets/manifesto6.webp'
import manifesto7 from '../public/assets/manifesto7.webp'
import manifesto8 from '../public/assets/manifesto8.webp'
import manifesto9 from '../public/assets/manifesto9.webp'
import manifesto10 from '../public/assets/manifesto10.webp'
// import manifesto11 from '../public/assets/manifesto11.webp'

import Image from 'next/image'

interface FirstPageProps {
  params: {
    locale: string
  }
}

const Manifesto = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex w-full items-center justify-center">
      <div className="flex flex-col">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
              Manifesto
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {dictionary.manifesto3}
            </p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto1} alt="EU" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto4}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto2} alt="m2" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto5}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto3} alt="EU" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto6}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto4} alt="m2" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto7}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto5} alt="EU" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto8}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto6} alt="m2" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto9}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto7} alt="EU" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto10}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto8} alt="m2" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto11}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto9} alt="m2" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto12}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              <Image src={manifesto10} alt="m2" width={200} height={200} />
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto10}`} />
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="md:w-1/2">
              {/* <Image src={manifesto11} alt="m2" width={200} height={200} /> */}
            </div>
            <div className="md:w-1/2">
              <Paragraph text={`${dictionary.manifesto11}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manifesto
