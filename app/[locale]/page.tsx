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
      <SplashScreen fluidFont={fluidFont} />
      <div className="bg-gradient-to-br from-red-100 to-amber-50 dark:from-sky-950 dark:to-indigo-950">
        <SectionContainer>
          <FirstPage dictionary={dictionary} />        
        </SectionContainer>
      </div>
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
        {/* <div className="block dark:hidden absolute top-96 left-12 right-12 -bottom-24 blur-3xl" style="background:conic-gradient(from 41deg at 50% 50%, rgba(248, 249, 251, 0.00) 0deg, #F7F7F9 35.62500089406967deg, #F7F7F9 238.12499284744263deg, rgba(248, 249, 251, 0.00) 283.0139493942261deg)"></div> */}
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
