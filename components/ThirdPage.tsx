import { getDictionary } from 'get-dictionary'
import React from 'react'
import { motion } from 'framer-motion'
interface FirstPageProps {
  params: {
    locale: string
  }
}
const ThirdPage = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen min-h-screen w-full items-center justify-center">
      <div className="flex flex-col justify-center gap-6 sm:flex-row">
        <div className="m-8 flex flex-col rounded-2xl border border-indigo-300 bg-indigo-200 p-4 shadow-lg dark:border-indigo-600 dark:bg-indigo-900 sm:m-8 sm:w-1/2">
          <h3 className="mb-8 text-center text-lg font-bold md:text-4xl">
            {dictionary.titlethirdpage1}
          </h3>
          <p className="text-start md:text-lg lg:text-xl">{dictionary.line9} :</p>
          <ul className="list-disc p-6">
            <li className="text-justify text-sm sm:text-base md:text-lg lg:text-xl">
              {dictionary.firstcity}
            </li>
            <li className="text-sm sm:text-base md:text-lg lg:text-xl">{dictionary.secondcity}</li>
            <li className="text-sm sm:text-base md:text-lg lg:text-xl">{dictionary.thirdcity}</li>
          </ul>
        </div>
        <div className="m-8 flex flex-col rounded-2xl border border-indigo-300 bg-indigo-200 p-4 shadow-lg dark:border-indigo-600 dark:bg-indigo-900 sm:m-8 sm:w-1/2">
          <h3 className="mb-8 text-center text-lg font-bold md:text-4xl">
            2025
          </h3>
          <p className="text-justify md:text-lg">{dictionary.line10}</p>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
