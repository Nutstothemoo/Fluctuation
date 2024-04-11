import React from 'react'
import CountryFlag from 'react-country-flag'
import Link from 'next/link'

export default function LanguageSelector({ locale }) {
  return (
    <div>
      {locale == 'fr' ? (
        <Link href="/" locale="en">
          <CountryFlag
            className="rounded-full"
            style={{ width: '25px', height: '25px' }}
            countryCode={'GB'}
            svg
          />
        </Link>
      ) : (
        <Link href="/" locale="fr">
          <CountryFlag
            className="rounded-full "
            style={{ width: '25px', height: '25px' }}
            countryCode={'FR'}
            svg
          />
        </Link>
      )}
    </div>
  )
}
