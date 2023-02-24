# What's this ?

Next.js v13 × microCMS で作成できるブログテンプレートです。

fork 後、[こちら](#TODO)の手順に従うことで簡単に自分だけのブログを運用することが出来ます。

[実際に運用しているブログ](https://scrap.n4rvs3.com/)

最低限の機能のみ実装しています。今後も継続的に更新予定ですが何か問題・不明点がありましたらお気軽に[twitter](https://twitter.com/Squl_d)もしくは[issue](https://github.com/n4rvs3/Nextjs13-appDir-microCMS-template/issues)までお願いします。

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

### サイト情報を入力

- [こちらのファイル](./src/components/siteSetting.ts)を確認、適時変更してください。

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