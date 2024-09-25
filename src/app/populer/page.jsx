"use client"

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnime } from "../../libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnimes, setTopAnimes] = useState([])

    const fetchData = async() => {
        const response = await getAnime("top/anime", `page=${page}`)
        setTopAnimes(response)
    }

    useEffect( ()=> {
        fetchData()
    }, [page])

    return (
        <div className="flex flex-col">
            <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
            <AnimeList animes={topAnimes} />
            <Pagination 
                page={page} 
                lastPage={topAnimes.pagination?.last_visible_page}
                setPage={setPage}
            />
        </div>
    )
}

export default Page