import BoatResidency from "@/components/BoatResidency";

export default async function Page( { params: { locale } } ) {
  return (
    <>
        <BoatResidency params={{ locale }} />
    </>
  )
}
