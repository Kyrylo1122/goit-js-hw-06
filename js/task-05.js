const userInput = document.querySelector("#name-input");
const userSpan = document.querySelector("#name-output");

userInput.addEventListener("input", addUserName);

function addUserName(event) {
  return event.currentTarget.value !== ""
    ? (userSpan.textContent = event.target.value)
    : (userSpan.textContent = "Anonymous");
}
