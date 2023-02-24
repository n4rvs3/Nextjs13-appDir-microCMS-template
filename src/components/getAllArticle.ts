import type { Article } from "../app/types";

export const getAllArticle = async () => {
  const res = await fetch(process.env.MICROCMS_URL as string, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
    },
    method: "GET",
    cache: "no-cache",
  });

  if (!res.ok) {
    console.error(res);
    throw new Error("Failed to fetch API");
  }

  const data = await res.json();
  return data.contents as Article[];
};
