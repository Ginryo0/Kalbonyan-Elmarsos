const form = document.getElementById('user-input');

function signUpHandler(event) {
  event.preventDefault();
  const userNameInput = document.getElementById('username');
  const userName = userNameInput.value;
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;

  if (userName.trim().length === 0) {
    alert('Invalid - user name cannot be empty');
    return;
  }
  if (password.trim().length <= 5) {
    alert('Invalid - password cannot be less than 6 chars');
    return;
  }

  const user = {
    userName: userName,
    password: password,
  };
  console.log(user);
  console.log('Supp,' + user.userName);
}
form.addEventListener('submit', signUpHandler);
