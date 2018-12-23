'use strict'

let apiUrl
const apiUrls = {
  development: 'https://aqueous-atoll-85096.herokuapp.com',
  // development: 'http://localhost:4741',
  production: 'https://tic-tac-toe-wdi.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
