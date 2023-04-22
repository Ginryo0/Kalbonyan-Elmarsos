import { Router } from 'express';

import { Todo } from '../models/todos';

let todos: Todo[] = [];

const router = Router();

type ReqBody = { text: string };
type ReqParams = { todoId: string };

router.get('/', (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
  const body = req.body as ReqBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ message: 'Added Todo', todo: newTodo, todos });
});

router.put('/todo/:todoId', (req, res, next) => {
  const params = req.params as ReqParams;
  const tid = params.todoId;
  const body = req.body as ReqBody;
  const todoIdx = todos.findIndex((item) => item.id === tid);

  if (todoIdx >= 0) {
    todos[todoIdx] = { id: todos[todoIdx].id, text: body.text };
    return res.status(200).json({ message: 'Update Todo' });
  }
  res.status(404).json({ message: 'Could not find the requested todo' });
});

router.delete('/todo/:todoId', (req, res, next) => {
  const params = req.params as ReqParams;
  const tid = params.todoId;
  todos = todos.filter((todoItem) => todoItem.id !== tid);
  res.status(200).json({ message: 'Deleted Todo', todos });
});

export default router;
