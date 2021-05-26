const debug = require('debug')('controller:user')
const { model } = global

module.exports = {
  getUsers: async (req, res, next) => {
    const { userModel } = model
    const userList = await userModel.find({})

    debug('successfully get users')

    res.status(200).json({
      users: userList
    })

    return null
  }
}