import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph'
import eu from '../public/assets/eu.webp'
import Br1 from '../public/assets/BR1.webp'
import Br2 from '../public/assets/BR2.webp'
import Br3 from '../public/assets/BR3.webp'
import Br4 from '../public/assets/BR4.webp'
import Br5 from '../public/assets/BR5.webp'
import Br6 from '../public/assets/BR6.webp'
import Image from 'next/image'

interface FirstPageProps {
  params: {
    locale: string
  }
}

const BoatResidency = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full flex-col items-center justify-center">
      <div className="md:text-md text-justify sm:text-sm lg:text-xl">
        <h3>{dictionary.boatline1}</h3>
        {/* boatline 1-25 */}
      </div>
      <div>
        <Image src={eu} alt="EU" />
        <Image src={Br1} alt="Br1" />
        <Image src={Br2} alt="Br2" />
        <Image src={Br3} alt="Br3" />
        <Image src={Br4} alt="Br4" />
        <Image src={Br5} alt="Br5" />
        <Image src={Br6} alt="Br6" />
      </div>
    </div>
  )
}

export default BoatResidency
