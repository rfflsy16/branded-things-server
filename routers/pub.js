const router = require('express').Router()
const productController = require('../controllers/productController.js')

router.get('/', productController.read)
router.get('/:id', productController.readDetail)


 module.exports = router