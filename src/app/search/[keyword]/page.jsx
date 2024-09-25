import { getAnime } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
  const { keyword } = params
  const decodeKyword = decodeURI(keyword)

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKyword}`)
  // const searchAnimes = await response.json()

  const response = await getAnime("anime", `q=${decodeKyword}`)
  const searchAnimes = await response
 
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodeKyword}`} />
        <AnimeList animes={searchAnimes} />
      </section>
    </>
  )
}
export default Page