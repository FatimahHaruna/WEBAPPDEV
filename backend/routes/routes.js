const express = require('express');
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

//CRUD operations
router.post('/create', createTodo);           // Create
router.get('/', getAllTodos);                 // Read All
router.get('/:id', getTodo);                  // Read One
router.put('/:id', updateTodo);               // Update
router.delete('/:id', deleteTodo);            // Delete

module.exports = router;