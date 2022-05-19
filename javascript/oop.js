class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";
  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length >= validatorValue;
    }
  }
}

class User {
  constructor(uName, uPassword) {
    this.userName = uName;
    this.password = uPassword;
  }
  greet() {
    console.log("Hi, I am " + this.userName);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");

    this.form.addEventListener("submit", this.signupHandler.bind(this));
  }
  signupHandler(event) {
    event.preventDefault();
    const enterUsername = this.userNameInput.value;
    const enterPassword = this.passwordInput.value;
    if (
      !Validator.validate(enterUsername, Validator.REQUIRED) ||
      !Validator.validate(enterPassword, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        "Invalid input - username or password is wrong (password should be at least six character."
      );
      return;
    }

    const newUser = new User(enterUsername, enterPassword);
    console.log(newUser);
    newUser.greet();
  }
}

new UserInputForm();
