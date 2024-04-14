import { getDictionary } from 'get-dictionary'
import React from 'react'


interface FirstPageProps {
  params: {
    locale: string;
  };
}

const FirstPage = async ({ params } ) => {
  const dictionary = await getDictionary(params.locale)

   return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <p className="md:text-md lg:text-xl sm:text-sm text-justify"> 
      {dictionary.line1} {dictionary.line2} {dictionary.line3} {dictionary.line4}
        </p>
    </div>
  )
}

export default FirstPage
