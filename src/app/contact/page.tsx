import Link from "next/link"

import { AiFillGithub, AiFillTwitterSquare } from "react-icons/ai"

export default function Contact() {

        const twitte_url = ""
        const github_url = ""

        return (
                <>
                        <p className="mt-20 text-lg text-center ">記事に関してのお問合せや質問はこちらへお願いします。</p>
                        <div className="mt-10 ">
                                <span className="flex items-center justify-center text-orange-500 transition ease-in-out hover:opacity-40"><AiFillTwitterSquare /><Link href={twitte_url} target="_blank" className="ml-3" >Twitter</Link></span>
                                <span className="flex items-center justify-center mt-3 text-orange-500 transition ease-in-out hover:opacity-40"><AiFillGithub /><Link href={github_url} target="_blank" className="ml-3" >Github</Link></span>
                        </div>
                </>
        )
}