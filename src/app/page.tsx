import { getAllArticle } from "@/components/getAllArticle"

import Link from "next/link"

// ページ本体
export default async function Home() {
  const articles = await getAllArticle()


  return (
    <div className="w-full mt-20">
      <h1 className="my-10 text-3xl text-center text-white md:text-4xl">新着記事一覧</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="px-8 py-3 transition ease-in-out hover:opacity-70">
            <p className="pb-3 mb-3 border-b">
              <Link href={`/articles/${article.id}`}>{article.title}</Link>
            </p>
          </li>
        )
        )}
      </ul>
    </div>
  )
}