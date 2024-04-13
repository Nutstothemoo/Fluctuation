'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import LanguageSelector from './LanguageSelector'
import LocaleSwitcher from './locale-switcher'
import { useState, useEffect } from 'react'

const Header = ({ locale }) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={`${
        scrollPosition > 10 ? 'translate-y-[-30px]' : ''
      } sticky top-0 z-50 flex items-center justify-between py-10 transition-all duration-500 ease-in-out`}
    >
      <div>
        <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div
                className="hidden h-6 text-2xl font-bold sm:block"
                style={{ fontFamily: 'liquid-fluid' }}
              >
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== `/${locale}/`)
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="relative hidden w-fit font-medium text-gray-900 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 dark:text-gray-100 dark:after:bg-white sm:block"
            >
              {link.title}
            </Link>
          ))}

        {/* <SearchButton /> */}
        <LocaleSwitcher locale={locale} />
        {/* <LanguageSelector locale={locale} /> */}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
