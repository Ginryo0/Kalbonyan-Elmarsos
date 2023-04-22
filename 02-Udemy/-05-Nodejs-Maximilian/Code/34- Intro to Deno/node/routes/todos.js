const express = require('express');

const router = express.Router();

let todos = [];

router.get('/todos', (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post('/todos', (req, res, next) => {
  const newTodo = { id: new Date().toISOString(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json({ message: 'Todo created', todos });
});

router.put('/todos/:todoId', (req, res, next) => {
  const tid = req.params.todoId;
  const todoIdx = todos.findIndex((todo) => todo.id === tid);

  todos[todoIdx] = { ...todos[todoIdx], text: req.body.text };
  res.status(201).json({ message: 'Todo updated', todo: todos[todoIdx] });
});

router.delete('/todos/:todoId', (req, res, next) => {
  const tid = req.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  res.status(201).json({ message: 'Todo deleted', todos });
});

module.exports = router;
