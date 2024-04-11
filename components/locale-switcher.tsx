'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '../i18n-config'
import CountryFlag from 'react-country-flag'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div>
      <ul className="z-100 flex flex-row">
        {i18n.locales.map((locale) => {
          return (
            <li className="" key={locale}>
              <Link href={redirectedPathName(locale)}>
                <CountryFlag
                  className="rounded-full"
                  style={{ width: '25px', height: '25px' }}
                  countryCode={locale === 'en' ? 'GB' : locale}
                  svg
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
