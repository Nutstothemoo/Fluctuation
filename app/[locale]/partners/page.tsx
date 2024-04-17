import Partners from '@/components/Partners'
import SectionContainer from '@/components/SectionContainer'

export default async function Page({ params: { locale } }) {
  return (
    <>
      <div className="mt-48">
        <SectionContainer>
          <Partners params={{ locale }} />
        </SectionContainer>
      </div>
    </>
  )
}
