---
title: Dockerを使っていてNuxt.jsにアクセスできない場合
layout: Post
category: 開発メモ
tags:
  - Nuxt.js
  - Docker
date: 2019-09-25
---

## Dockerのポートフォワードが行われているか確認

`docker ps`または`docker-compose ps`で設定を確認。ここで間違っている場合は次の２つをチェック。

- Dockerコマンド
  - 例:`docker run -d -p 3000:3000 app`
- docker-compose.ymlのports
  - 例: `- 3000:3000`

## Nuxt.jsのNUXT_HOST設定

Dockerのコンテナ内でNuxtサーバを立ち上げる場合に必要。`NUXT_HOST`に`0.0.0.0`を設定する必要がある。

正しく設定していれば、`yarn run dev`を実行したときに`http://localhost:3000`以外のホスト名が表示される。
