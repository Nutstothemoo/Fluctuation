import { getDictionary } from 'get-dictionary'
import React from 'react'


interface FirstPageProps {
  params: {
    locale: string;
  };
}

const FivePage = async ({ params } ) => {
  const dictionary = await getDictionary(params.locale)

   return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      {dictionary.line1}
      {dictionary.line2}
      {dictionary.line3}
      {dictionary.line4}
    </div>
  )
}

export default FivePage
