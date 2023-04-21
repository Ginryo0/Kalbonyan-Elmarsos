// TYPE -> REACT FUNCTIONAL COMPONENT -> props of type object that always has children
// We are using a defined generic type <{}> = set generic type explicitly
// Our generic object prop gets merged with props object

import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

import { TodosContext } from '../store/todos-context';

// Optional -> {items? :string[]} -> ? Question mark
//  React.FC<{ items: Todo[]; removeTodo: (id: string) => void }>
const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
