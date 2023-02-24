import base64url from "base64url";

const generateOgImage = (title: string) => {
  // ogpの元となる画像のURL
  const image_url = "";

  // タイトルを Base64 エンコーディング
  const base64title = base64url(title);

  // 文字画像のURLを作成
  const textImage = `https://images.microcms-assets.io/~text?txtsize=48&w=1000&h=400&txt-align=left,middle&txtfont=Hiragino%20Sans%20W6&txt64=${base64title}`;

  // 文字画像のURLをBase64 エンコーディング
  const textImageUrl = base64url(textImage);

  // 文字画像と背景画像を合成する
  return `${image_url}?auto=format,compress&h=300?w=1200&mark-align=center%2Cmiddle&mark64=${textImageUrl}`;
};

export const ogpUrl = (blogPost: any) => {
  return generateOgImage(blogPost.title);
};
