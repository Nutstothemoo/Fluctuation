import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph';
import eu from '../public/assets/eu.webp'
import smileImage from '../public/assets/creative1.webp'
import creative2 from '../public/assets/creative2.webp'
import creative3 from '../public/assets/creative3.webp'
import creative4 from '../public/assets/creative4.webp'
import creative5 from '../public/assets/creative5.webp'
import Image from 'next/image'

interface FirstPageProps {
  params: {
    locale: string;
  };
}

const CreativeEurope = async ({ params } ) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <div className="md:text-md lg:text-xl sm:text-sm text-justify"> 
      {/* {dictionary.line1} {dictionary.line2} {dictionary.line3} {dictionary.line4} */}
      <Paragraph text={`${dictionary.line1} ${dictionary.line2} ${dictionary.line3} ${dictionary.line4}`} />
      {/* <ParagraphWord text={`${dictionary.line1} ${dictionary.line2} ${dictionary.line3} ${dictionary.line4}`} /> */}
      </div>
      <div>
        <Image src={eu} alt="EU" />
        <Image src={smileImage} alt="smile" />
        <Image src={creative2} alt="creative2" />
        <Image src={creative3} alt="creative3" />
        <Image src={creative4} alt="creative4" />
        <Image src={creative5} alt="creative5" />
      </div>
    </div>
  )
}

export default CreativeEurope
