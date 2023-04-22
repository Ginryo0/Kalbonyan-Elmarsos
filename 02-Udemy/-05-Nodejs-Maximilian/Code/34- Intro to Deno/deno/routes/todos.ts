import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get('/todos', (ctx) => {
  // assumed it's json response
  ctx.response.body = { todos };
});

router.post('/todos', async (ctx) => {
  const data = await ctx.request.body();
  const value = await data.value!;
  const text = value.text;
  console.log(text);
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: text,
  };
  todos.push(newTodo);
  ctx.response.body = { message: 'Created Todo', todo: newTodo };
});

router.put('/todos/:todoId', async (ctx) => {
  const tid = ctx.params.todoId;
  const data = await ctx.request.body();
  const value = await data.value!;
  const text = value.text;
  const todoIdx = todos.findIndex((todo) => todo.id === tid);

  todos[todoIdx] = { ...todos[todoIdx], text: text };
  ctx.response.body = { message: 'Todo updated', todo: todos[todoIdx] };
});

router.delete('/todos/:todoId', (ctx) => {
  const tid = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  ctx.response.body = { message: 'Todo deleted', todos };
});

export default router;
