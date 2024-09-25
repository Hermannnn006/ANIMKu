"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault();
        const keyword = searchRef.current.value.trim(); //trim untuk menghilangkan spasi di awal dan diakhir kata
        
        if (keyword) {
            router.push(`/search/${keyword}`);
        }
    }

    return (
        <form className="relative">
            <input 
                type="text"
                placeholder="Cari anime..." 
                className="w-full px-2 py-1.5 rounded"
                ref={searchRef}
            />
            <button 
                onClick={handleSearch}
                className="absolute top-1 end-2">
                <MagnifyingGlass size={24} />
            </button>
        </form>
    )
}

export default InputSearch