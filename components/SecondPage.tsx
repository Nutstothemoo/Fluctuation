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
      <div className='flex flex-col items-center gap-10 '>
        <div className='flex flex-col items-center gap-5'>
            <h2 className="text-xl lg:text-4xl text-center"> 
                {dictionary.line5}
            </h2> 
            <h2 className="text-xl lg:text-4xl text-center"> 
                {dictionary.line6}
            </h2>
        </div>

        <p className="md:text-md lg:text-xl sm:text-sm text-center"> 
            {dictionary.line7} {dictionary.line8}
          </p>
      </div>
    </div>
  )
}

export default SecondPage
