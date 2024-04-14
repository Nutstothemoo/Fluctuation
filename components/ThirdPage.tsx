import { getDictionary } from 'get-dictionary'
import React from 'react'


interface FirstPageProps {
  params: {
    locale: string;
  };
}

const ThirdPage = async ({ params } ) => {
  const dictionary = await getDictionary(params.locale)

   return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center min-h-screen">
      <div className='flex sm:flex-row flex-col justify-center gap-8'>
        <div className='w-full sm:w-1/2 sm:m-8 flex flex-col rounded-2xl p-4 bg-indigo-200 dark:bg-indigo-900'>
            <h3 className='text-center text-lg md:text-4xl font-bold'>{dictionary.titlethirdpage1}</h3>
            <p className='text-center md:text-lg lg:text-xl'>{dictionary.line9} :</p>
            <ul className='p-8 list-disc'>
              <li className='text-sm sm:text-base md:text-lg lg:text-xl text-justify'>{dictionary.firstcity}</li>
              <li className='text-sm sm:text-base md:text-lg lg:text-xl'>{dictionary.secondcity}</li>
              <li className='text-sm sm:text-base md:text-lg lg:text-xl'>{dictionary.thirdcity}</li>
            </ul>
        </div>
        <div className='w-full sm:w-1/2 sm:m-8 flex flex-col rounded-2xl p-4 bg-indigo-200 dark:bg-indigo-900'>
            <h3 className='text-center text-sm sm:text-base md:text-lg lg:text-xl'>{dictionary.titlethirdpage2}</h3>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>{dictionary.line10}</p>
        </div>
    </div>
    </div>
  )
}

export default ThirdPage