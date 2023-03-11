const {Router} = require('express')
const { getAllcategorys, createCategory, deleteCategory } = require('../controllers/categorys.controller')


const router = Router()



router.get('/api/v1/categorys', getAllcategorys)
router.post('/api/v1/categorys', createCategory)
router.delete('/api/v1/categorys/:id', deleteCategory)
module.exports = router