import {useState} from 'react';

const useInput =  (validateInput) => {
   const [enteredValue, setEnteredValue] = useState("");
  // init states -> not valid, not touched
  const [valueTouched, setvalueTouched] = useState(false);

  const valueValid = validateInput(enteredValue);
  const hasError = !valueValid && valueTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // validating on blur
  const inputBlurHandler = (event) => {
    setvalueTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setvalueTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  }
}


export default useInput;
