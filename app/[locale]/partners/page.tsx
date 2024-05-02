import AnimatedBackground from '@/components/AnimatedBackground'
import Partners from '@/components/Partners'
import SectionContainer from '@/components/SectionContainer'
import localFont from 'next/font/local'
// Font files can be colocated inside of `app`

const fluidFont = localFont({
  src: '../../liquido-fluid.otf',
  display: 'swap',
})

export default async function Page({ params: { locale } }) {
  return (
    <>
      <div className="mt-48">
        <SectionContainer>
          <Partners  params={{ locale }} font={fluidFont} />
        </SectionContainer>
        <AnimatedBackground />
      </div>
    </>
  )
}
