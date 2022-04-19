const userInput = document.querySelector("#name-input");
const userSpan = document.querySelector("#name-output");

userInput.addEventListener("input", addUserName);

function addUserName(event) {
  userSpan.textContent = event.currentTarget.value;
}
