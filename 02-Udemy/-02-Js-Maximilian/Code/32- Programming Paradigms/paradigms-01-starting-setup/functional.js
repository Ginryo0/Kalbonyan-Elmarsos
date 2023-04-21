const REQUIRED = 'REQUIRED';
const MIN_LEN = 'MIN_LEN';

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  } else if (flag === MIN_LEN) {
    return value.trim().length >= validatorValue;
  }
}

function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function createUser(username, pw) {
  if (!validate(username, REQUIRED) || !validate(pw, MIN_LEN, 5)) {
    throw new Error('Invalid uName/Pw (must be longer than 5)');
  }
  return { username: username, password: pw };
}

function greet(user) {
  console.log(`hi, ${user.username}`);
}

function signUpHandler(event) {
  event.preventDefault();
  const uName = getUserInput('username');
  const pw = getUserInput('password');

  try {
    const newuser = createUser(uName, pw);
    console.log(newuser);
    greet(newuser);
  } catch (err) {
    alert(err.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signUpHandler);
