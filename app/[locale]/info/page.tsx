import SplashScreen from '@/components/splashscreen'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import ThirdPage from '@/components/ThirdPage'
import FourthPage from '@/components/FourPage'
import FivePage from '@/components/FivePage'
import SixPage from '@/components/SixPage'
import localFont from 'next/font/local'
import { getDictionary } from 'get-dictionary'
import Background from '@/components/Background'
import SectionContainer from '@/components/SectionContainer'
// Font files can be colocated inside of `app`

const fluidFont = localFont({
  src: '../liquido-fluid.otf',
  display: 'swap',
})

const regularFont = localFont({
  src:'../liquidoregular.otf',
  display:'swap'
})

export default async function Page({ params: { locale } }) {
  const dictionary = await getDictionary(locale);
  return (
    <>
      <div className="bg-gradient-to-br from-rose-100 to-amber-50 dark:from-blue-950 dark:to-indigo-950">
        <SectionContainer>
          <SecondPage params={{ locale }} />
        </SectionContainer>
      </div>
      <div className="bg-gradient-to-br from-pink-100 to-amber-50 dark:from-sky-950 dark:to-indigo-950">
        <SectionContainer>
          <ThirdPage params={{ locale }} />
        </SectionContainer>
      </div>
      <div className="bg-gradient-to-br from-fuchsia-100 to-amber-50 dark:from-blue-950 dark:to-indigo-950">
        <SectionContainer>
          <FourthPage params={{ locale }} />
        </SectionContainer>
      </div>
      <div className="bg-gradient-to-br from-red-100 to-amber-50 dark:from-indigo-900 dark:to-sky-900">
        <SectionContainer>
          <FivePage params={{ locale }} />
        </SectionContainer>
      </div>
      <div >
        <SectionContainer>
          <SixPage params={{ locale }} />
        </SectionContainer>
      </div>
    </>
  )
}
