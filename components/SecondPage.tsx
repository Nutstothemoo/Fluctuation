import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph'

interface FirstPageProps {
  params: {
    locale: string
  }
}

const SecondPage = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-10 ">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-center text-xl lg:text-4xl">{dictionary.line5}</h2>
          <h2 className="text-center text-xl lg:text-4xl">{dictionary.line6}</h2>
        </div>
        <div className="md:text-md text-center sm:text-sm lg:text-xl">
          <Paragraph text={`${dictionary.line7} ${dictionary.line8}`} />
        </div>
      </div>
      <p className="md:text-md text-center sm:text-sm lg:text-xl"></p>
    </div>
  )
}

export default SecondPage
