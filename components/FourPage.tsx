import { getDictionary } from 'get-dictionary'
import React from 'react'
import Paragraph from './Paragraph'
import CarousselSlide from './CarousselSlide'
interface FirstPageProps {
  params: {
    locale: string
  }
}

const FourPage = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center flex-col">
      <div>
        <div className='p-5 items-center justify-center'>
          <CarousselSlide />
        </div>
      <div className="md:text-md text-center sm:text-sm lg:text-xl">
        <Paragraph text={`${dictionary.line7} ${dictionary.line10}`} />
      </div>
      </div>

    </div>
  )
}

export default FourPage
