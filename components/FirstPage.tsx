import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph'
import ParagraphWord from './ParagraphWord'

interface FirstPageProps {
  params: {
    locale: string
  }
}

const FirstPage = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <div className="md:text-md text-justify sm:text-sm lg:text-xl">
        <Paragraph
          text={`${dictionary.line1} ${dictionary.line2} ${dictionary.line3} ${dictionary.line4}`}
        />
      </div>
    </div>
  )
}

export default FirstPage
