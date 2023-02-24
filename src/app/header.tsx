import Link from "next/link"

import { site_name } from "@/components/siteSetting"

export const Header = () => {

        return (
                <header className="sticky top-0 w-full text-white bg-slate-800 bg-opacity-40 backdrop-blur-md">
                        <div className="flex items-center justify-between h-12 max-w-5xl px-2 py-3 mx-auto">
                                <p className="text-lg "><Link href="/">{site_name}</Link></p>
                                <button className="px-3 py-1 bg-white rounded-md text-slate-800"><Link href="/contact">お問合せ</Link></button>
                        </div>
                </header>
        )
}