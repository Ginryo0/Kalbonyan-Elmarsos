import { Application } from 'https://deno.land/x/oak/mod.ts';

import todosRoutes from './routes/todos.ts';

const app = new Application();

// If you got async middle ware -> all your middleware should be async or you'll get empty response
app.use(async (ctx, next) => {
  console.log('MW');
  await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 3000 });
