import Manifesto from "@/components/Manifesto";

export default async function Page( { params: { locale } } ) {

  return (
    <>
      <Manifesto params={{ locale }} />
    </>
  )
}
