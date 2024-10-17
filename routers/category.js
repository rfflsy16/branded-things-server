const router = require('express').Router()
const categoryController = require('../controllers/categoryController.js')

router.delete('/', categoryController.delete)


module.exports = router