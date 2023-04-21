class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LEN = 'MIN_LEN';

  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    } else if (flag === this.MIN_LEN) {
      return value.trim().length >= validatorValue;
    }
  }
}
class User {
  constructor(un, pw) {
    this.userName = un;
    this.pw = pw;
  }
  greet() {
    console.log('hi,' + this.userName);
  }
}
class UserInputForm {
  constructor() {
    this.form = document.getElementById('user-input');
    this.userNameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');

    this.form.addEventListener('submit', this.signUpHandler.bind(this));
  }
  signUpHandler(event) {
    event.preventDefault();
    const uName = this.userNameInput.value;
    const pw = this.passwordInput.value;
    if (
      !Validator.validate(uName, Validator.REQUIRED) ||
      !Validator.validate(pw, Validator.MIN_LEN, 5)
    ) {
      alert('Invalid uName/Pw (must be longer than 5)');
      return;
    }
    const newUser = new User(uName, pw);

    console.log(newUser);
    newUser.greet();
  }
}

new UserInputForm();
