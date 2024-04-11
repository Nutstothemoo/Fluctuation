import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

import SplashScreen from '@/components/splashscreen'
// import initTranslations from './i18n'

export default async function Page() {
  // const { t } = await initTranslations(locale, ['home'])
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <SplashScreen />
      <Main posts={posts} />
    </>
  )
}
