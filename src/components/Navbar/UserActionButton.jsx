import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async () => {
    const user = await authUserSession()

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between items-center gap-2">
            {
                user ? <Link href="/users/dashboard">Dasboard</Link> : null
            }
            <Link href={actionUrl} className="bg-color-dark text-color-primary py-1 px-2 rounded">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton