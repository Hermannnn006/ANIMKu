import Image from "next/image"
import Link from "next/link"

const AnimeList = ({animes}) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-4">
            {animes.data?.map((anime) => {
                return (
                    <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="text-color-primary hover:text-color-accent transition-all cursor-pointer">
                        <Image 
                            src={anime.images.webp.image_url} 
                            alt="image" 
                            width={600} 
                            height={600} 
                            className="w-full max-h-64 object-fill"
                            priority
                            />
                        <h3 className="font-bold text-base md:text-xl p-4">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList