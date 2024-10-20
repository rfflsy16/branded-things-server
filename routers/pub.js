const router = require('express').Router()
const PubController = require('../controllers/pubController')

router.get('/', PubController.read)
router.get('/:id', PubController.readDetail)

module.exports = router