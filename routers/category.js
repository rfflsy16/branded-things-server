const router = require('express').Router()
const categoryController = require('../controllers/categoryController.js')
const authentication = require('../middlewares/authentication.js')

router.get('/', categoryController.read)
router.post('/', categoryController.create)
router.put('/:id', categoryController.update)


module.exports = router