import BoatResidency from '@/components/BoatResidency'
import SectionContainer from '@/components/SectionContainer'

export default async function Page({ params: { locale } }) {
  return (
    <>
      <div className="mt-48">
        <SectionContainer>
          <BoatResidency params={{ locale }} />
        </SectionContainer>
      </div>
    </>
  )
}
