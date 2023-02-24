# What's this ?

Next.js v13 × microCMS で作成できるブログテンプレートです。

fork 後、[こちら](#TODO)の手順に従うことで簡単に自分だけのブログを運用することが出来ます。

最低限の機能のみ実装しています。今後も継続的に更新予定ですが何か問題・不明点がありましたらお気軽に[twitter](https://twitter.com/Squl_d)もしくは[issue]("")までお願いします。

## fork したら

ローカル環境にて作業を行います。ターミナルにて

- `git clone フォークしたリポジトリのリンク`

- `cd フォークしたリポジトリ && yarn`

## TODO

### [microCMSにてapiを作成する](https://microcms.io/)

| API 名   | エンドポイント |
| -------- | -------------- |
| 投稿     | post           |
| カテゴリ | category       |

- 投稿の API スキーマ

| フィールド ID | 表示名   | 種類                     | 必須項目   |
| ------------- | -------- | ------------------------ | ---------- |
| title         | タイトル | テキストエリア           | 必須       |
| textContent   | 本文     | リッチエディタ           | 必須       |
| category      | カテゴリ | コンテンツ参照(カテゴリ) | 必須でない |
| description   | 説明文   | テキストエリア           | 必須でない |

- カテゴリの API スキーマ

| フィールド ID | 表示名     | 種類               | 必須項目 |
| ------------- | ---------- | ------------------ | -------- |
| name          | カテゴリ名 | テキストフィールド | 必須     |

### API_KEY と URL を env ファイルに追加する

- `.env.local` ファイルを root 直下に作成する
  - `.env.local.example`の中身をコピーし、貼り付ける
    - `MICROCMS_API_KEY`に microCMS の api キー
    - `MICROCMS_URL`に`https://****.microcms.io/api/v1/post`(\*\*\*\*の部分は自身の URL)

3. サイト情報を入力

- [header.tsx](./src/app/../../../src/app/header.tsx)の`site_name`を自身のサイト名に変更

  - サイト上部のヘッダーに表示されるテキストになります。

- [ogp.ts](./src/app/../../../src/app/ogp.ts)の`image_url`を変更

  - [こちらの記事](https://pentaprogram.tokyo/blog/Pmh6xlMcj48)が大変参考になります。

- [head.tsx](./src/app/../../../src/app/head.tsx)の`description`と`title`を変更

  - トップページの meta タグに設定されます。

- [footer.tsx](./src/app/../../../src/app/footer.tsx)の`copyright`を変更

  - サイト下部のフッターに表示されるコピーライト名になります。

- [DefaultTags.tsx](./src/app/../../../src/app/DefaultTags.tsx)の`keywords`を変更

  - 昨今の検索エンジンには必要ないとされていますのでご自身の都合に合わせてご変更をお願いします。

- [contact/page.tsx](./src/app/../../../src/app/contact/page.tsx)の`twitter_url`と`github_url`を変更
  - お問合せページ内のリンクに適応されます。

### 記事を書く & 確認

microCMSにて記事を書き終えたら

`yarn dev`を実行し、[localhost:3000](http://localhost:3000)にて問題なくサイトが表示されることを確認してください。

### vercelにデプロイ

[microCMS公式様の解説記事](https://blog.microcms.io/microcms-next-jamstack-blog/#hb67e9ac3f6)を参考にデプロイすることが出来ます。

記事と違い、環境変数は`MICROCMS_URL`と`MICROCMS_API_KEY`の二種を設定してください。

## 今後のアップデート予定

- [ ] Todo
    - [ ] ページネーション機能の追加
    - [ ] ブログカードの追加
    - [ ] TOC(目次)の追加