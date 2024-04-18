import { getDictionary } from 'get-dictionary'
import React from 'react'
import eu from '../public/assets/eu.webp'
import Br1 from '../public/assets/BR1.webp'
import Br2 from '../public/assets/BR2.webp'
import Br3 from '../public/assets/br3.webp'
import Br4 from '../public/assets/BR4.webp'
import Br5 from '../public/assets/br5.webp'
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
    <div className="relative top-0 flex w-full flex-col items-center justify-center">
      {/* <div className="md:text-md text-justify sm:text-sm lg:text-xl">
        <h3></h3> */}
      <div className="divide-y divide-gray-500">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl">
            {dictionary.boatline1}
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of future Events
          </p> */}
        </div>
      </div>
      {/* boatline 1-25 */}
      <div>
        <Image src={eu} alt="EU" />
        <Image src={Br1} width={300} className="rounded-xl" alt="Br1" />
        <Image src={Br2} width={300} className="rounded-xl" alt="Br2" />
        <Image src={Br3} width={300} className="rounded-xl" alt="Br3" />
        <Image src={Br4} width={300} className="rounded-xl" alt="Br4" />
        <Image src={Br5} width={300} className="rounded-xl" alt="Br5" />
        <Image src={Br6} width={300} className="rounded-xl" alt="Br6" />
      </div>
    </div>
  )
}

export default BoatResidency
