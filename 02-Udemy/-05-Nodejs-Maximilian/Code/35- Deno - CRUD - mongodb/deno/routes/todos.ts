import { Router } from 'https://deno.land/x/oak/mod.ts';
import { ObjectId } from 'https://deno.land/x/mongo/mod.ts';

import { getDb } from '../helpers/db_client.ts';

const router = new Router();

interface Todo {
  id?: string;
  text: string;
}

let todos: Todo[] = [];

router.get('/todos', async (ctx) => {
  const todos = await getDb().collection('todos').find().toArray();
  const transformedTodos = todos.map((todo) => {
    return { id: todo._id.toString(), text: todo.text };
  });
  ctx.response.body = { todos: transformedTodos };
});

router.post('/todos', async (ctx) => {
  const data = await ctx.request.body();
  const value = await data.value;
  const newTodo: Todo = {
    // id: new Date().toISOString(),
    text: value.text,
  };

  const id = await getDb().collection('todos').insertOne(newTodo);
  newTodo.id = id.toString();
  console.log(newTodo.id);
  ctx.response.body = { message: 'Created todo!', todo: newTodo };
});

router.put('/todos/:todoId', async (ctx) => {
  const tid = ctx.params.todoId!;
  console.log(tid);
  const data = await ctx.request.body();
  const value = await data.value;

  await getDb()
    .collection('todos')
    .updateOne({ _id: new ObjectId(tid) }, { $set: { text: value.text } });
  ctx.response.body = { message: 'Updated todo' };
});

router.delete('/todos/:todoId', async (ctx) => {
  const tid = ctx.params.todoId;

  await getDb()
    .collection('todos')
    .deleteOne({ _id: new ObjectId(tid) });
  ctx.response.body = { message: 'Deleted todo' };
});

export default router;
