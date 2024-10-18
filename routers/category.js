const router = require('express').Router()
const categoryController = require('../controllers/categoryController.js')

router.get('/', categoryController.read)
router.post('/', categoryController.create)
router.put('/:id', categoryController.update)


module.exports = router