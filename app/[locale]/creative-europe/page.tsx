import CreativeEurope from "@/components/CreativeEurope";

export default async function Page( { params: { locale } } ) {
  // const sortedPosts = sortPosts(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  return (
    <>
      <CreativeEurope params={{ locale }} />
    </>
  )
}
