const ItemFilters = require('./app/config/ItemFilters.js')

let feedList = [
  {
    title: '中央社 政治',
    feedID: 'cna-news-politics',
    feedURL: 'https://feeds.feedburner.com/rsscna/politics',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 國際',
    feedID: 'cna-news-intworld',
    feedURL: 'https://feeds.feedburner.com/rsscna/intworld',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  { // <outline type="rss" text="靖技場++" title="靖技場++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/http%3A%2F%2Fjinnsblog.blogspot.com%2Ffeeds%2Fposts%2Fdefault" htmlUrl="https://www.jinnsblog.com/"/>
    title: '中央社 兩岸',
    feedID: 'cna-news-mainland',
    feedURL: 'https://feeds.feedburner.com/rsscna/mainland',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 產經證券',
    feedID: 'cna-news-finance',
    feedURL: 'https://feeds.feedburner.com/rsscna/finance',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 科技',
    feedID: 'cna-news-technology',
    feedURL: 'https://feeds.feedburner.com/rsscna/technology',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 生活',
    feedID: 'cna-news-lifehealth',
    feedURL: 'https://feeds.feedburner.com/rsscna/lifehealth',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 社會',
    feedID: 'cna-news-social',
    feedURL: 'https://feeds.feedburner.com/rsscna/social',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 地方',
    feedID: 'cna-news-local',
    feedURL: 'https://feeds.feedburner.com/rsscna/local',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 文化',
    feedID: 'cna-news-culture',
    feedURL: 'https://feeds.feedburner.com/rsscna/culture',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 運動',
    feedID: 'cna-news-sport',
    feedURL: 'https://feeds.feedburner.com/rsscna/sport',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },
  {
    title: '中央社 娛樂',
    feedID: 'cna-news-stars',
    feedURL: 'https://feeds.feedburner.com/rsscna/stars',
    itemFilters: [
      ItemFilters['sites'].ItemFilterCNA,
    ],
  },  
]

// 29 / 30

// ----------------------------------------------------------------

// feedList = [
//   { // <outline type="rss" text="Linuxeden开源社区++$0413-0909$" title="Linuxeden开源社区++$0413-0909$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0413-0909$,/http%3A%2F%2Fwww.linuxeden.com%2Ffeed" htmlUrl="http://www.linuxeden.com"/>
//     title: 'Chrome Unboxed',
//     feedID: 'chromeunboxed',
//     feedURL: 'https://chromeunboxed.com/feed/',
//     itemFilters: [
//       ItemFilters['sites'].ItemFilterBlog,
//       ItemFilters['common'].ItemFilterImageEmbed,
//       ItemFilters['common'].ItemFilterThumbnailCache,
//     ],
//     options: {
//       selector: 'article > .entry-content'
//     }
//   },
// ]

module.exports = feedList
