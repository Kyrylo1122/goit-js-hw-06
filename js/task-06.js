const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", checkInput);

function checkInput(event) {
  let hasInvalidTag = document.querySelector(".invalid");
  if (hasInvalidTag) {
    hasInvalidTag.classList.remove("invalid");
  }
  const correctLength = validInput.dataset.length;
  if (event.target.value.length == correctLength) {
    validInput.classList.add("valid");
  } else {
    validInput.classList.add("invalid");
  }
}
