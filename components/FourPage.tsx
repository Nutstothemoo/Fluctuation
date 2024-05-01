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
    <div className="relative top-0 flex h-[75vh] w-full items-center justify-center flex-col">
      <div className='flex flex-col gap-5'>
          <CarousselSlide />
          <div className="md:text-md text-center sm:text-sm lg:text-xl font-semibold italic">
            <Paragraph text={`${dictionary.line7} ${dictionary.line10}`} />
          </div>
      </div>
    </div>
  )
}

export default FourPage
