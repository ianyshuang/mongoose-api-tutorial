const debug = require('debug')('main:app')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || development

const appStart = () => {
  app.use('/', require('./router'))
  app.listen(port, () => {
    debug(`App is running on port ${port} | NODE_ENV: ${NODE_ENV}`)
  })
}

module.exports = {
  appStart
}