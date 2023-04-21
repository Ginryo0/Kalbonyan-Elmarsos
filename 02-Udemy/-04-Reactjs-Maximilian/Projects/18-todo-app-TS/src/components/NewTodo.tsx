import { useRef, useContext } from 'react';

import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

// on AddTodo is a function -> takes a string -> returns no value
const NewTodo: React.FC = () => {
  // must have a start value -> null refers to nothing
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  // React.MouseEvent - FormEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ? -> in case of ref connection fails - try to get / if not store null
    // ! -> if you are sure it'll never fail - I'm sure no null will return
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
