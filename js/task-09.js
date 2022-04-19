const ref = {
  onBtnChangeColor: document.querySelector(".change-color"),
  textColor: document.querySelector(".color"),
};
ref.onBtnChangeColor.addEventListener("click", changeColorBody);
function changeColorBody(event) {
  ref.textColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = ref.textColor.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
