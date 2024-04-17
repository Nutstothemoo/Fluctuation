import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph';
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
import manifesto11 from '../public/assets/manifesto11.webp'

import Image from 'next/image'

interface FirstPageProps {
  params: {
    locale: string;
  };
}

const Manifesto
 = async ({ params } ) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
        Manifesto      
      <div className='flex flex-col'>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="md:w-1/2">
        <Image src={manifesto1} alt="EU" width={200} height={200} />
      </div>
      <div className="md:w-1/2">
        <Paragraph text={`${dictionary.line1}`} />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <Image src={manifesto2} alt="m2" width={200} height={200} />
        </div>
        <div className="md:w-1/2">
          <Paragraph text={`${dictionary.line1}`} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="md:w-1/2">
        <Image src={manifesto3} alt="EU" width={200} height={200} />
      </div>
      <div className="md:w-1/2">
        <Paragraph text={`${dictionary.line1}`} />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <Image src={manifesto4} alt="m2" width={200} height={200} />
        </div>
        <div className="md:w-1/2">
          <Paragraph text={`${dictionary.line1}`} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="md:w-1/2">
        <Image src={manifesto5} alt="EU" width={200} height={200} />
      </div>
      <div className="md:w-1/2">
        <Paragraph text={`${dictionary.line1}`} />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <Image src={manifesto6} alt="m2" width={200} height={200} />
        </div>
        <div className="md:w-1/2">
          <Paragraph text={`${dictionary.line1}`} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="md:w-1/2">
        <Image src={manifesto7} alt="EU" width={200} height={200} />
      </div>
      <div className="md:w-1/2">
        <Paragraph text={`${dictionary.line1}`} />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/2">
          <Image src={manifesto8} alt="m2" width={200} height={200} />
        </div>
        <div className="md:w-1/2">
          <Paragraph text={`${dictionary.line1}`} />
        </div>
      </div>
      <Image src={manifesto3} alt="manifesto2" width={200} height={200} />
      <Image src={manifesto4} alt="manifesto3" width={200} height={200} />
      <Image src={manifesto5} alt="manifesto4" width={200} height={200} />
      <Image src={manifesto6} alt="manifesto5" width={200} height={200} />
      <Image src={manifesto7} alt="manifesto6" width={200} height={200} />
      <Image src={manifesto8} alt="manifesto7" width={200} height={200} />
      <Image src={manifesto9} alt="manifesto8" width={200} height={200} />
      <Image src={manifesto10} alt="manifesto9" width={200} height={200} />
      <Image src={manifesto11} alt="manifesto10" width={200} height={200} />
</div>
        <Image src={manifesto3} alt="manifesto2" width={200} height={200} />
        <Image src={manifesto4} alt="manifesto3" width={200} height={200} />
        <Image src={manifesto5} alt="manifesto4" width={200} height={200} />
        <Image src={manifesto6} alt="manifesto5" width={200} height={200} />
        <Image src={manifesto7} alt="manifesto6" width={200} height={200} />
        <Image src={manifesto8} alt="manifesto7" width={200} height={200} />
        <Image src={manifesto9} alt="manifesto8" width={200} height={200} />
        <Image src={manifesto10} alt="manifesto9" width={200} height={200} />
        <Image src={manifesto11} alt="manifesto10" width={200} height={200} />
      </div>
    </div>
  )
}

export default Manifesto

