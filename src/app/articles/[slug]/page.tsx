import type { Article } from "../../types";

import { getArticle } from "@/components/getArticle";

import css from "./slug.module.scss";

const generateStaticParams = async () => {

        const data = await getArticle()

        const paths = data.map((d: any) => {
                return {
                        slug: d.id
                }
        })

        return [...paths]

}

export default async function Article({ params }: { params: { slug: string } }) {
        const articlePromise = getArticle(params.slug);
        const article: Article = await articlePromise;

        return (
                <>
                        <h1 className={css.title}>{article.title}</h1>
                        <div
                                className={css.contents}
                                dangerouslySetInnerHTML={{
                                        __html: `${article.textContent}`,
                                }} />
                </>
        )
}