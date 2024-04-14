import { getDictionary } from 'get-dictionary'
import React from 'react'


interface FirstPageProps {
  params: {
    locale: string;
  };
}

const FourPage = async ({ params } ) => {
  const dictionary = await getDictionary(params.locale)

   return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      {dictionary.line10}
    </div>
  )
}

export default FourPage
