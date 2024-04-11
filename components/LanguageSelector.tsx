'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import CountryFlag from 'react-country-flag'

export default function LanguageSelector({ locale }) {
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`
  }

  return (
    <div>
      {locale == 'fr' ? (
        <CountryFlag
          onClick={() => changeLanguage('en')}
          className="rounded-full"
          style={{ width: '25px', height: '25px' }}
          countryCode={'GB'}
          svg
        />
      ) : (
        <CountryFlag
          onClick={() => changeLanguage('fr')}
          className="rounded-full"
          style={{ width: '25px', height: '25px' }}
          countryCode={'FR'}
          svg
        />
      )}
    </div>
  )
}
