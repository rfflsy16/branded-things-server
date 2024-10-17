const router = require('express').Router()
const userController = require('../controllers/userController.js')
const product = require('./product.js')
const category = require('./category.js')
const handleError = require('../middlewares/handleError.js')
const { checkAdmin, checkStaff } = require('../middlewares/authorization.js')

router.post('/login', userController.login)


const authentication = require('../middlewares/authentication.js')
router.use(authentication)
router.use('/products', product)
router.use('/categories', category)

router.post('/add-user', checkAdmin, userController.addUser)


router.use(handleError)

module.exports = router