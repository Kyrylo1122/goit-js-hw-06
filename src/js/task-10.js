function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  onCreateDivBtn: document.querySelector("button[data-create]"),
  onDeleteDivBtn: document.querySelector("button[data-destroy]"),
  amount: document.querySelector('[type="number"]'),
  form: document.querySelector("#controls"),
  spaceForBoxes: document.getElementById("boxes"),
};

let amountOfSquares = 0;
//

ref.onCreateDivBtn.addEventListener("click", createDiv);
ref.onDeleteDivBtn.addEventListener("click", deleteBoxes);

function deleteBoxes(event) {
  ref.spaceForBoxes.textContent = "";
}
function createDiv(event) {
  let width = 30;
  let height = 30;
  const arr = [];
  for (let i = 0; i < ref.amount.value; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;

    width += 10;
    height += 10;
    arr.push(newDiv);
  }
  ref.spaceForBoxes.append(...arr);
}
