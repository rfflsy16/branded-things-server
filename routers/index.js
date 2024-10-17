const router = require('express').Router()
const userController = require('../controllers/userController.js')
const product = require('./product.js')
const category = require('./category.js')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.use('/product', product)
router.use('/category', category)

module.exports = router