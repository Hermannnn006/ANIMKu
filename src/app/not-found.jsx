"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={44} className="text-color-accent" />
                <h3 className="text-color-accent text-2xl font-bold">NOT FOUND</h3>
                <Link href="/" className="text-color-primary hover:text-color-accent underline transition-all">Kembali</Link>
            </div>
        </div>
    )
}

export default Page