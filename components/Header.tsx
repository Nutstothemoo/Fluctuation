// 'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'
import LocaleSwitcher from './locale-switcher'
import Image from 'next/image'
import logofluctuation from '../public/assets/logofluctuation.png'

const Header = ({ locale, fluidFont }) => {
  // const [scrollPosition, setScrollPosition] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  return (
    <>
      <header
        className={`
          sticky top-0 z-50 flex items-center justify-between py-8 transition-all duration-500 ease-in-out`}
      >
        <div>
          <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div>
                <Image
                  src={logofluctuation}
                  alt="Logo Fluctuation"
                  // layout="fill"
                  objectFit="contain"
                  width={70}
                  height={70}
                />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div
                  className={`dark: dark: hidden h-6 text-3xl text-indigo-950 dark:text-white sm:block ${fluidFont.className}`}
                >
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="light: flex items-center space-x-2 rounded-full border-solid bg-white p-1 px-4 leading-5 opacity-80 dark:bg-indigo-950 md:p-2 lg:space-x-4 ">
          {headerNavLinks
            .filter((link) => link.href !== `/${locale}/`)
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="lg:text-md relative hidden w-fit text-gray-900 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 dark:text-gray-100 dark:after:bg-white sm:block sm:text-sm sm:text-sm"
              >
                {link.title}
              </Link>
            ))}
          {/* <SearchButton /> */}
          <div className="relative z-10 flex flex-row space-x-4">
            <LocaleSwitcher locale={locale} />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
