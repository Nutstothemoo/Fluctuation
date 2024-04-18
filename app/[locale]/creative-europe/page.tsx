import AnimatedBackground from '@/components/AnimatedBackground'
import CreativeEurope from '@/components/CreativeEurope'
import SectionContainer from '@/components/SectionContainer'

export default async function Page({ params: { locale } }) {
  // const sortedPosts = sortPosts(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  return (
    <>
      <div className="mt-48">
        <SectionContainer>
          <CreativeEurope params={{ locale }} />
        </SectionContainer>
        <AnimatedBackground />
      </div>
    </>
  )
}
