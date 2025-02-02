const router = require('express').Router()
const userController = require('../controllers/userController.js')
const product = require('./product.js')
const category = require('./category.js')
const handleError = require('../middlewares/handleError.js')
const {checkStaffAuthorOrAdmin, checkAdmin } = require('../middlewares/authorization.js')
const authentication = require('../middlewares/authentication.js')
const pub = require('./pub.js')

router.use('/pub', pub)

router.post('/login', userController.login)
router.use(authentication)

router.use('/products', product)
router.use('/categories', category)
router.post('/add-user', checkAdmin, userController.addUser)

router.use(handleError)

module.exports = router