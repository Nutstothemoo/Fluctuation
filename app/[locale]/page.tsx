// import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
// import Main from './Main'
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
import AnimatedBackgroundHome from '@/components/AnimatedBackgroundHome'
// Font files can be colocated inside of `app`
const fluidFont = localFont({
  src: '../liquido-fluid.otf',
  display: 'swap',
})

export default async function Page({ params: { locale } }) {
  const dictionary = await getDictionary(locale);
  return (
    <>
      <Background />
      <SectionContainer>
        <SplashScreen fluidFont={fluidFont} />
        <FirstPage dictionary={dictionary} />
        <SecondPage params={{ locale }} />
        <ThirdPage params={{ locale }} />
        <FourthPage params={{ locale }} />
        <FivePage params={{ locale }} />
        <SixPage params={{ locale }} />
      </SectionContainer>
    </>
  )
}
