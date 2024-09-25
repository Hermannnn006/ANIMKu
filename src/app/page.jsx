import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnime, getNestedAnimeResponses, reproduce } from "../libs/api-libs"

const Page = async () => {

  const topAnimes = await getAnime("top/anime", "limit=10")
  let recomendedAnime = await getNestedAnimeResponses("recommendations/anime", "entry")
  // recomendedAnime = {  data: recomendedAnime.slice(0, 10) }
  recomendedAnime = reproduce(recomendedAnime, 10)

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList animes={topAnimes} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList animes={recomendedAnime} />
      </section>
    </>
  )
}
export default Page