const {Router} = require('express');
const { createToDo, deletetodo, updatestatus } = require('../controllers/toDo.controller');


const router = Router();


router.put('/api/v1/todo/:id', updatestatus)
router.post('/api/v1/todo', createToDo);
router.delete('/api/v1/todo/:id', deletetodo);


module.exports = router