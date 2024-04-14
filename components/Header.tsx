// 'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'
import LocaleSwitcher from './locale-switcher'


const Header = ({ locale , fluidFont}) => {
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
      <div >
        <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
                <div className={`light: blue-indigo-950 dark: hidden sm:block h-6 text-3xl ${fluidFont.className}`}>{siteMetadata.headerTitle}
                </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>    
      <div className="p-2 px-4 opacity-80 light: bg-white dark:bg-indigo-950 rounded-full border-solid flex items-center space-x-2 lg:space-x-4 leading-5 ">
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
