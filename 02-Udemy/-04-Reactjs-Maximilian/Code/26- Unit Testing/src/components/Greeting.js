import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changedText, setChnagedText] = useState(false);

  const changedTextHandler = () => {
    setChnagedText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see ya!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
