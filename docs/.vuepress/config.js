module.exports = {
  title: 'ozelot.app',
  description: 'ozelot.app',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  theme: 'meteorlxy',
  themeConfig: {
    lang: {
      home: 'ホーム',
      posts: 'ブログ',
      category: 'カテゴリ',
      categories: 'カテゴリ',
      tag: 'タグ',
      tags: 'タグ',
      allCategories: '全て',
      search: '検索',
      searchHint: 'タイトルと抜粋で検索',
      noRelatedPosts: '関連する記事が見つかりませんでした',
      top: 'トップ',
      createdAt: 'Created',
      updatedAt: 'Updated',
      prevPost: '前の投稿',
      nextPost: '次の投稿',
      toc: '目次',
      comments: 'コメント',
      notFound: '該当する記事が見つかりませんでした'
    },
    personalInfo: {
      nickname: 'オセロット',
      description: `
      楽するために苦労しているデベロッパーです。現在は学校で技術を学んでいます。アイコンは有償で描いていただいたものです。<br>
      <br>
      疑問点や問題点がありましたら、<a href="/other.html">お問い合わせ</a> か <a href="https://twitter.com/ozelotjp" target="_blank" rel="noopener noreferrer">Twitter</a> でご連絡ください。<br>
      <br>
      <a href="https://twitter.com/ozelotjp" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Twitter-ozelotjp-1da1f2?logo=Twitter&style=flat-square"></a>
      <a href="https://github.com/ozelotjp" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-ozelotjp-181717?logo=GitHub&style=flat-square"></a>
      `,
      avatar: '/assets/images/icon.jpg',
      sns: {}
    },
    header: {
      background: {
        url: '',
        useGeo: true
      },
      showTitle: true
    },
    lastUpdated: true,
    nav: [
      { text: 'ホーム', link: '/', exact: true },
      { text: 'ブログ', link: '/blog', exact: false },
      { text: 'その他', link: '/other', exact: true },
    ],
    comments: false,
    pagination: {
      perPage: 5
    },
    defaultPages: {
      home: false,
      posts: false
    }
  },
  evergreen: true,
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-144350835-1'
      }
    ],
    [
      'seo'
    ],
    [
      'sitemap',
      {
        hostname: 'https://ozelot.app'
      }
    ]
  ],
  markdown: {
    config: md => {
      md.set({ breaks: true })
    },
    lineNumbers: true
  },
  chainMarkdown(config) {
    config.options.breaks(true)
  }
}
