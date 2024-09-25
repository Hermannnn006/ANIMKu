import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-color-primary font-bold text-2xl md:text-3xl">{title}</h1>
            {
                linkHref && linkTitle ?
                <Link href={linkHref} className="text-base text-color-primary md:text-xl underline hover:text-color-accent transition-all">
                    {linkTitle}
                </Link>
                : null
            }
        </div>
    )
}

export default Header