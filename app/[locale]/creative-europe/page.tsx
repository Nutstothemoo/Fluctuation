import AnimatedBackground from '@/components/AnimatedBackground'
import CreativeEurope from '@/components/CreativeEurope'
import SectionContainer from '@/components/SectionContainer'
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`

const fluidFont = localFont({
  src: '../../liquido-fluid.otf',
  display: 'swap',
})

export default async function Page({ params: { locale } }) {
  // const sortedPosts = sortPosts(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  return (
    <>
      <div className="mt-48">
        <SectionContainer>
        <CreativeEurope params={{ locale }} font={fluidFont} />       
        </SectionContainer>
        <AnimatedBackground />
      </div>
    </>
  )
}
