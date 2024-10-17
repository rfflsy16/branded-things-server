const router = require('express').Router()
const productController = require('../controllers/productController')

router.post('/', productController.add)
router.get('/', productController.read)
router.get('/:id', productController.readDetail)
router.put('/:id', productController.updateById)

module.exports = router