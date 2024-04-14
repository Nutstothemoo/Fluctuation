'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { i18n, type Locale } from '../i18n-config'
import CountryFlag from 'react-country-flag'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LocaleSwitcher({ locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div>
          <DropdownMenu>
          <DropdownMenuTrigger>              
            <CountryFlag
                    onClick={toggleDropdown}
                    className="rounded-3xl "
                    style={{ width: '25px', height: '25px' }}
                    countryCode={locale === 'en' ? 'GB' : locale}
                    svg
                  />
          </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-2xl">
        {i18n.locales
                  .filter((local) => local !== locale)
                  .map((local) => {
                    return (
                        <DropdownMenuItem
                          className={
                            'flex h-full w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md'
                          }
                        >
                          <Link href={redirectedPathName(local)}>
                            <CountryFlag
                              className="rounded-full"
                              style={{ width: '25px', height: '25px' }}
                              countryCode={local === 'en' ? 'GB' : local}
                              svg
                            />
                          </Link>
                        </DropdownMenuItem>
                    )
                  })}
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
