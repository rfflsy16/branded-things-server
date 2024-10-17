const router = require('express').Router()
const productController = require('../controllers/productController')
const { checkStaffAuthorOrAdmin } = require('../middlewares/authorization.js')
const upload = require('../helpers/multer.js')
const uploadMiddleware = upload.single('image')

router.post('/', productController.add)
router.get('/', productController.read)
router.get('/:id', productController.readDetail)

router.use('/:id', checkStaffAuthorOrAdmin)
router.put('/:id', productController.updateById)
router.patch(':id', uploadMiddleware, productController.patchImgUrl)
router.delete('/:id', productController.deletebById)
//delete
module.exports = router