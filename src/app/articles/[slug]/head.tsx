import type { Article } from "../../types";

import { getArticle } from "@/components/getArticle";

import { ogpUrl } from "@/app/ogp";

import { Default } from "../../DefaultTags";

export default async function Head({ params }: { params: { slug: string } }) {

        const articlePromise = getArticle(params.slug);
        const article: Article = await articlePromise;

        const ogp = ogpUrl(article)

        return (
                <>
                        <title>{article.title}</title>
                        <Default description={article.description} title={article.title} imgurl={ogp} />
                        <meta name="description" content={article.title} />
                </>
        )
}