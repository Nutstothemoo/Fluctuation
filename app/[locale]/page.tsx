import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import SplashScreen from '@/components/splashscreen'

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <SplashScreen />
      <Main posts={posts} />
    </>
  )
}
