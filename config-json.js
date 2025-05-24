// const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
// const ConfigCheck = require('./app/config/ConfigCheck.js')
// const feedList = require('./config-list.js')

let CONFIG = {
  publicURL: `https://democwise2016.github.io/action-RSS-Fulltext-20250522/`,
  // publicURL: `https://dangerous-lizard-99.telebit.io/`,
  publicURLShorten: `https://ppt.cc/fy93nx`,
  thumbnailBorderColor: 'CC3333',
  // titleAppend: '[RSS+] 20230827-' + test,
  // idAppend: '20230827-' + test,
  titleAppend: '[RSS+]',
  idAppend: false,

  maxDownloadItemPerFeed: 50,
  maxDownloadFeed: 50,
  newArrialMax: 50,
  maxDownloadItems: 100,
  maxExcutionMinutes: 25,
  maxWait: 5,

  maxFileCache: 2000,
  BATCH_REMOVE: 100,

  proxy: 'https://script.google.com/macros/s/AKfycbzvvbn-FepcAJl1Ro3tgo0P4dXotOl81d4hcp4n4fNu_2RASYtO1idg6uxi0m7SXWtOMw/exec?proxy=',
  // feedList
  debug: false
}

// let test = '0137'

// CONFIG.publicURL = `https://dangerous-lizard-99.telebit.io/`
// CONFIG.titleAppend = '[RSS+] 20230827-' + test,
// CONFIG.idAppend = '20230827-' + test,
// // CONFIG.maxDownloadItemPerFeed = 3
// CONFIG.debug = true

module.exports = CONFIG
