import { getDictionary } from 'get-dictionary'
import Link from 'next/link'
import React from 'react'

interface FirstPageProps {
  params: {
    locale: string
  }
}

const SixPage = async ({ params }) => {
  const dictionary = await getDictionary(params.locale)

  return (
    <div className="relative top-0 flex h-screen w-full items-center justify-center">
      <div className="flex flex-col">
        <h3 className="mb-4 text-center text-lg font-bold md:text-4xl">{dictionary.SixPageTile}</h3>
        <h3 className="mb-8 text-center text-lg font-bold md:text-4xl">
          {dictionary.SixPageSecondTile}
        </h3>
        <p>{dictionary.line13}</p>
        <p>{dictionary.line14}</p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd-cb5HaS4EM6kNTzSC3OlGO2gDuG0xcnpfYwHMuzMkYjaDCQ/viewform">
          {' '}
          {dictionary.line15}{' '}
        </Link>
      </div>
    </div>
  )
}
export default SixPage
