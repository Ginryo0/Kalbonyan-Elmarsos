import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  } else if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  } else if (action.type === "RESET") {
    return initialState;
  }

  return initialState;
};

const useInput = (validateInput) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  // const [enteredValue, setEnteredValue] = useState("");
  // init states -> not valid, not touched
  // const [valueTouched, setvalueTouched] = useState(false);

  const valueValid = validateInput(inputState.value);
  const hasError = !valueValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  // validating on blur
  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
