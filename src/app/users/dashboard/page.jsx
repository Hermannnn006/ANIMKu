import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()

    return (
        <div className="text-color-primary p-4">
            <h3>Dashboard</h3>
            <Image src={user?.image} alt="user" width={250} height={250} />
            <p>Welcome, {user?.name}</p>
        </div>
    )
}

export default Page