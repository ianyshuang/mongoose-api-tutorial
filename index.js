const debug = require('debug')('main:index')
const app = require('./app')
const model = require('./models')

const start = async () => {
  global.model = await model.modelStart()
  debug('models loaded')

  app.appStart()
}

start()