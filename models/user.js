const mongoose = require('mongoose')
const { Schema } = mongoose

// options 為一個 object，裡面可以放一些設定 schema 的參數，之後會再細講
module.exports = (options) => {
  const schema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  }, options)

  return mongoose.model('user', schema)
}