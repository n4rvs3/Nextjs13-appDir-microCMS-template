"use client"

import { usePathname } from 'next/navigation';

type Props = {
        description: string
        title: string
        imgurl: string
}

export const Default = ({ description, title, imgurl }: Props) => {

        const currentUrl = usePathname() as string
        const url = currentUrl

        // 検索エンジン向けのキーワード
        const keywords = ""

        return (
                <>
                        <meta content="width=device-width, initial-scale=1" name="viewport" />
                        <link rel="icon" href="/favicon.ico" />
                        <meta property="og:description" content={description} />
                        <meta property="og:site_name" content={title} />
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={description} />
                        <meta name="keywords" content={keywords} />
                        <meta property="og:url" content={url} />
                        <meta property="og:type" content="website" />
                        <meta property="og:locale" content="ja_JP" />
                        <meta property="og:image" content={imgurl} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content={title} />
                        <meta name="twitter:description" content={description} />
                        <meta name="twitter:image" content={imgurl} />
                        <meta name="twitter:url" content={url} />
                </>
        )
}