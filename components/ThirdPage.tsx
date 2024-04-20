import { getDictionary } from 'get-dictionary'
import React from 'react'
import Image from 'next/image'
import L05 from '../public/assets/L05.jpg'
import { motion } from 'framer-motion'
interface FirstPageProps {
  params: {
    locale: string
  }
}
const ThirdPage = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
     
        <div className="w-[300px] rounded-lg p-2 md:w-1/2">
          <div
            className={'h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'}
          >

                <Image
                  alt={"fesitboat2"}
                  src={L05}
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
            <div className="p-6">
              <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                {dictionary.titlethirdpage1}
              </h2>
              <div className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">        
              <p className="text-start md:text-lg lg:text-xl">{dictionary.line9} :</p>     
              <ul className="list-disc p-6">
                <li className="text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                  {dictionary.firstcity}
                </li>
                <li className="text-sm sm:text-base md:text-lg lg:text-xl">{dictionary.secondcity}</li>
                <li className="text-sm sm:text-base md:text-lg lg:text-xl">{dictionary.thirdcity}</li>
              </ul>
              </div>
            </div>
          </div>
        </div>

      <div className="w-[300px] rounded-lg p-2 md:w-1/2">
          <div
            className={'h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'}
          >

                <Image
                  alt={"fesitboat2"}
                  src={L05}
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
            <div className="p-6">
              <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                  {dictionary.titlethirdpage2}
              </h2>
                  <div className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                  <p className="text-start md:text-lg lg:text-xl">{dictionary.line10}</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage



