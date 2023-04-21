import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // init states -> not valid, not touched
  const {
    value: enteredName,
    isValid: nameInputValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailNotValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  // one state is enough -> cuz when it resets we could check for validity using latest entered name

  let formIsValid = false;

  // check all inputs validity if more than 1
  if (nameInputValid && enteredEmailValid) {
    formIsValid = true;
  }

  // validating on key stroke

  // validating on blur

  // validating on submission
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    //const enteredValue = userInputRef.current.value;
    //userInputRef.current.value = ""; -> shouldn't manipulate DOM

    resetName();
    resetEmail();
  };

  const nameInputClass = nameHasError ? "form-control invalid" : "form-control";
  const emailInputClass = emailNotValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailNotValid && (
          <p className="error-text">Please enter a valid E mail</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
