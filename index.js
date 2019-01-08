'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests

// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')

// scripts
require('./assets/scripts/event.js')

// scripts
require('./assets/scripts/JS.js')
