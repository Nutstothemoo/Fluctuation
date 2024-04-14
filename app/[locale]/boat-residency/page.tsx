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

export default async function Page( { params: { locale } } ) {
  // const sortedPosts = sortPosts(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  return (
    <>
      <FirstPage params={{ locale }} />
    </>
  )
}
