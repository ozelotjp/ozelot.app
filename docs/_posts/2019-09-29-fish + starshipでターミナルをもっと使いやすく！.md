---
title: fish + starshipでターミナルをもっと使いやすく！
layout: Post
category: インフラ
tags:
  - Linux
  - fish
  - Starship
date: 2019-09-29
---

## 環境

この記事では下記のバージョンを使用しています。

|  CentOS  | fish  | starship |
| :------: | :---: | :------: |
| 7.6.1810 | 3.0.2 |  0.19.0  |

## fishをインストール

最新の[fish][]を使用するために、まずはレポジトリを登録する必要があります。

```bash
curl \
  --location \
  --output /etc/yum.repos.d/shells:fish:release:3.repo \
  https://download.opensuse.org/repositories/shells:fish:release:3/RHEL_7/shells:fish:release:3.repo
```

レポジトリを登録したら、パッケージをインストールをしてください。

```bash
yum install fish
```

::: tip
starship導入時にfishの設定を編集するため、まだfishは起動しないでください。
:::

## starshipをインストール

[starship][]は2019/03/31に開発が開始した、まだまだ若いシェルプロンプトのようです。

現在はGitHubのReleaseページからダウンロードする必要があります。
執筆時点ではまだstarshipはベータ版のため、今後はもっと簡単になることでしょう。
（ワンライナーで追加できるようになると便利ですね）

```bash
curl --location --output starship.tar.gz https://github.com/starship/starship/releases/download/v0.19.0/starship-v0.19.0-x86_64-unknown-linux-musl.tar.gz
tar -xf starship.tar.gz
mv x86_64-unknown-linux-musl/starship /bin
rm -rf starship.tar.gz
rm -rfd x86_64-unknown-linux-musl
mkdir -p ~/.config/fish
echo "eval (starship init fish)" > ~/.config/fish/config.fish
```

ここまでの作業が終われば、次のコマンドで起動できます。

```bash
fish
```

今後、ターミナルを開いたときに自動で起動する場合はchshコマンドを使用します。

```bash
chsh /bin/fish
```

[fish]: https://github.com/fish-shell/fish-shell
[starship]: https://starship.rs/ja/
