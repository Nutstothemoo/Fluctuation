import Partners from "@/components/Partners";

export default async function Page( { params: { locale } } ) {

  return (
    <>
      <Partners params={{ locale }} />
    </>
  )
}
