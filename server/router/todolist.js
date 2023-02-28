const express = require('express');
const router = express.Router()

const {createTodo,getAllTodo,getOneTodo,updateTodo,deleteTodo,datewiseTodo}=
require('../controller/todolist');

router.post('/todolist',createTodo);
router.get('/todolist/:id',getAllTodo);
router.get('/todolist/:id',getOneTodo);
router.put('/todolist/:id',updateTodo);
router.delete('/todolist/:id',deleteTodo);
router.get('/todolist',datewiseTodo)



module.exports = router;