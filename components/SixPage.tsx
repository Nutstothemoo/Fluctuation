import { getDictionary } from 'get-dictionary'
import Link from 'next/link'
import React from 'react'
import Paragraph from './Paragraph'

interface FirstPageProps {
  params: {
    locale: string
  }
}

const SixPage = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-3">
        <h3 className="mb-4 text-center text-lg font-bold md:text-4xl">{dictionary.SixPageTile}</h3>
        <h3 className="mb-8 text-center text-lg font-bold md:text-4xl">
          {dictionary.SixPageSecondTile}
        </h3>
        <div className="md:text-md text-center sm:text-sm lg:text-xl">
        <Paragraph
          text={`  ${dictionary.line13} `}
        />
       </div>
       <div className="md:text-md text-center sm:text-sm lg:text-xl mb-8 font-semibold">
        <Paragraph
          text={`  ${dictionary.line14} `}
        />
       </div>
       <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd-cb5HaS4EM6kNTzSC3OlGO2gDuG0xcnpfYwHMuzMkYjaDCQ/viewform">
          <button 
          type="button" 
          className='transition duration-200 ease-in-out hover:scale-105 flex items-center justify-center w-48 bg-gradient-to-r from-orange-300 to-indigo-500 hover:from-orange-600 hover:to-indigo-600 focus:outline-none text-white text-md font-bold shadow-md rounded-full mx-auto p-3'>
              <div className="flex sm:flex-cols-12 gap-2">
                    <div className="col-span-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>
                    </div>
                    <div className="col-span-2 pt-1 text-center">{dictionary.line15}</div>
                </div>    
            </button>
        </Link>
      </div>
    </div>
  )
}
export default SixPage
