import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph';
import eu from '../public/assets/eu.webp'
import partner1 from '../public/assets/partner1.webp'
import technical from '../public/assets/technical.webp'
import culture from '../public/assets/culture.webp'
import Image from 'next/image'

interface FirstPageProps {
  params: {
    locale: string;
  };
}

const Partners
 = async ({ params } ) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
        Partners      
      {/* <div className="md:text-md lg:text-xl sm:text-sm text-justify"> 
      {/* <Paragraph text={`${dictionary.line1} ${dictionary.line2} ${dictionary.line3} ${dictionary.line4}`} /> */}
      {/* </div> */} 
      <div className='flex flex-col'>
        <Image src={partner1} alt="EU" />
        <p>TECHNICAL</p>
        <Image src={technical} alt="Br1" />
        <p>culture</p>
        <Image src={culture} alt="Br2" />
      </div>
    </div>
  )
}

export default Partners

