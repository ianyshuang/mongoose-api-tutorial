const router = require('express').Router()
const userController = require('../controller/user')

router.get('/all', userController.getUsers)

module.exports = router