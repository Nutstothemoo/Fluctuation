import AnimatedBackground from '@/components/AnimatedBackground'
import BoatResidency from '@/components/BoatResidency'
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
          <BoatResidency params={{ locale }} font={fluidFont} />
        </SectionContainer>
        <AnimatedBackground />
      </div>
    </>
  )
}
