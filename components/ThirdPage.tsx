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
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <div className='flex flex-row justify-center gap-4'>
        <div className='w-1/2 flex flex-col rounded-2xl p-4 border-white'>
            <h3>{dictionary.titlethirdpage1}</h3>
            <p>{dictionary.line9}</p>
            <ul>
              <li>{dictionary.firstcity}</li>
              <li>{dictionary.secondcity}</li>
              <li>{dictionary.thirdcity}</li>
            </ul>
        </div>
        <div className='w-1/2 flex flex-col rounded-2xl p-4 border-white'>
            <h3>{dictionary.titlethirdpage2}</h3>
            <p>{dictionary.line10}</p>
        </div>
    </div>
    </div>
  )
}

export default ThirdPage
