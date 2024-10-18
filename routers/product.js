const router = require('express').Router()
const productController = require('../controllers/productController')
const { checkStaffAuthorOrAdmin } = require('../middlewares/authorization.js')
const upload = require('../helpers/multer.js')
const uploadMiddleware = upload.single('imgUrl')

router.post('/', productController.add)
router.get('/', productController.read)
router.get('/:id', productController.readDetail)

router.put('/:id', checkStaffAuthorOrAdmin, productController.updateById)
router.patch('/:id',checkStaffAuthorOrAdmin, uploadMiddleware, productController.patchImgUrl)
router.delete('/:id',checkStaffAuthorOrAdmin, productController.deletebById)

module.exports = router