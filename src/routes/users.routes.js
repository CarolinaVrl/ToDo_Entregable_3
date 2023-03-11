

const {Router} = require('express');
const { getAllUsers, createUser, allTodoHasUser } = require('../controllers/user.controller');



const router = Router();

router.post('/api/v1/users', createUser);
router.get('/api/v1/users', getAllUsers)
router.get('/api/v1/users/:id/todo', allTodoHasUser)

module.exports = router