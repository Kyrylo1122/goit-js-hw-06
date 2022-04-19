const refs = {
  validInput: document.querySelector("#validation-input"),
};
refs.validInput.addEventListener("blur", checkInput);

function checkInput(event) {
  if (event.currentTarget.value.length < refs.validInput.dataset.length) {
    return refs.validInput.classList.add("invalid");
  }
  if (event.currentTarget.value.length >= refs.validInput.dataset.length) {
    return refs.validInput.classList.replace("invalid", "valid");
  }
}
