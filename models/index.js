const debug = require('debug')('model:index')
const mongoose = require('mongoose')
const userModelGenerator = require('./user')
const config = require('../config.json')

const modelStart = async () => {
  const mongodbUri = config.mongodb.uri

  // 當 mongoose.connect 成功建立連線後，connection 物件就會有東西
  const connection = mongoose.connection
  connection.on('connected', () => debug('mongodb connected'))
  connection.on('error', () => debug('mongodb error with connection'))

  // connect 為非同步函式
  // 這些參數是為避免 call 到 deprecated 的 mongodb driver functions
  await mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  // 生成 models 並以 object 的形式回傳給 index(entry point)
  return {
    userModel: userModelGenerator({})
  }
}

module.exports = {
  modelStart
}