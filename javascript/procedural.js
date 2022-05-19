const form = document.getElementById("user-input");

function signupHandler(event) {
  event.preventDefault();
  const userNameInput = document.getElementById("username");
  const enterUsername = userNameInput.value;
  const passwordInput = document.getElementById("password");
  const enterPassword = passwordInput.value;
  if (enterUsername.trim().length === 0) {
    alert("Invalid input - username must not be empty!");
    return;
  }
  if (enterPassword.trim().length <= 5) {
    alert("Invalid input - password must be six chracter or longer.");
    return;
  }
  const user = {
    username: enterUsername,
    password: enterPassword,
  };
  console.log(user);
  console.log("Hi, I am " + user.username);
}

form.addEventListener("submit", signupHandler);
