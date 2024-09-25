import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex flex-col md:items-center md:flex-row justify-between p-4 gap-2">
                <Link href="/" className="text-white font-bold text-2xl">ANIMKu</Link>
                <InputSearch />
                <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar