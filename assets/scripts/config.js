'use strict'

let apiUrl
const apiUrls = {
  // development: 'https://aqueous-atoll-85096.herokuapp.com',
  // production: 'https://tic-tac-toe-wdi.herokuapp.com'
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}

// 'use strict'
// let apiUrl
// const apiUrls = {
//   production: 'https://aqueous-atoll-85096.herokuapp.com',
//   development: 'https://tic-tac-toe-wdi.herokuapp.com/'
// }
// if (window.location.hostname === 'localhost') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }
// module.exports = {
//   apiUrl
// }