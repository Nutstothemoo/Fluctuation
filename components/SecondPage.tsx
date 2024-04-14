import { getDictionary } from 'get-dictionary'
import React from 'react'


interface FirstPageProps {
  params: {
    locale: string;
  };
}

const SecondPage = async ({ params } ) => {
  const dictionary = await getDictionary(params.locale)

   return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <div className='flex flex-col'>
        <h2>
            {dictionary.line5}
        </h2> 
        <h2>
            {dictionary.line6}
        </h2>   
      <p>
      {dictionary.line7}
      {dictionary.line8}
      </p>
      </div>
    </div>
  )
}

export default SecondPage
