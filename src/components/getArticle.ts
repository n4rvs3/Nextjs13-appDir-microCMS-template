import { notFound } from "next/navigation";

export const getArticle = async (slug?: string) => {
  const res = await fetch(`${process.env.MICROCMS_URL}/${slug}` as string, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
    },
    method: "GET",
    // next: { revalidate: 10 },
  });

  if (res.status === 404) {
    notFound();
  }

  const data = await res.json();

  return data;
};
