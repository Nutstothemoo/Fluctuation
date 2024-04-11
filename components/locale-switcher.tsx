'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { i18n, type Locale } from '../i18n-config'
import CountryFlag from 'react-country-flag'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

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
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <CountryFlag
        onClick={toggleDropdown}
        className="rounded-full"
        style={{ width: '25px', height: '25px' }}
        countryCode={locale === 'en' ? 'GB' : locale}
        svg
      />
      {isOpen && (
        <ul className="z-100 flex flex-row">
          {i18n.locales
            .filter((local) => local !== locale)
            .map((local) => {
              return (
                <li className="" key={local}>
                  <Link href={redirectedPathName(local)}>
                    <CountryFlag
                      className="rounded-full"
                      style={{ width: '25px', height: '25px' }}
                      countryCode={local === 'en' ? 'GB' : local}
                      svg
                    />
                  </Link>
                </li>
              )
            })}
        </ul>
      )}
    </div>
  )
}
