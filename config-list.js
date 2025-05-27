const ItemFilters = require('./app/config/ItemFilters.js')
const CONFIG = require('./config-json.js')

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

if (CONFIG.debug) { 
  feedList = [
    // { // <outline type="rss" text="海芋小站++" title="海芋小站++" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$1227-1844$/http%3A%2F%2Ffeedproxy.google.com%2Finotetw" htmlUrl="https://www.inote.tw"/>
    //   title: '奇客Solidot',
    //   feedID: 'Solidot',
    //   feedURL: 'https://www.solidot.org/index.rss',
    //   thumbnail: 'https://icon.solidot.org/images/m/logo.jpg',
    //   itemFilters: [
    //     ItemFilters['sites'].ItemFilterBlog,
    //     ItemFilters['sites'].ItemFilterSolidot
    //     // ItemFilters['common'].ItemFilterImageEmbed,
    //   ],
    //   options: {
    //     selector: '.p_mainnew'
    //   }
    // },
    // {
    //   title: '中央社 生活',
    //   feedID: 'cna-news-lifehealth',
    //   feedURL: 'https://feeds.feedburner.com/rsscna/lifehealth',
    //   itemFilters: [
    //     ItemFilters['sites'].ItemFilterCNA,
    //   ],
    // },
    {
        title: 'Dify [GH]',
        feedID: 'dify-gh',
        feedURL: 'https://github.com/langgenius/dify/releases.atom',
        itemFilters: [
          ItemFilters['common'].ItemFilterTitleExtract,
        ],
    },
  ] 
}

module.exports = feedList
