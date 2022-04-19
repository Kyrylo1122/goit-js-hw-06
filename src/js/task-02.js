const ulIngredients = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
function createLiEl() {
  const product = ingredients.map((el) => {
    const newEl = document.createElement("li");
    newEl.textContent = el;
    newEl.classList.add("item");
    return newEl;
  });
  ulIngredients.append(...product);
}

createLiEl();
