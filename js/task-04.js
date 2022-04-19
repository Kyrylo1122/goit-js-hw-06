const counterValue = document.querySelector("#value");
const decrementBtnEl = document.querySelector(
  `button[data-action="decrement"]`
);
const incrementBtnEl = document.querySelector(
  `button[data-action="increment"]`
);
incrementBtnEl.addEventListener("click", addOne);
decrementBtnEl.addEventListener("click", subtractOne);

function addOne(event) {
  let count = Number(counterValue.textContent);
  count += 1;
  counterValue.textContent = count;

  return counterValue;
}

function subtractOne(event) {
  let count = Number(counterValue.textContent);
  count -= 1;
  counterValue.textContent = count;

  return counterValue;
}
