const liItemsEl = document.querySelectorAll(".item");
const liItemsTitleEl = document.querySelectorAll(".item >h2");

// console.log("Number of categories: ", liItemsEl.length);

// const listOfTitles = () => {
//   for (let i = 0; i < liItemsEl.length; i++) {
//     console.log(`Category: `, liItemsTitleEl[i].textContent);
//     console.log(`Elements: `, liLi[i].children.length);
//   }
// };
// listOfTitles();
const methodWithForEach = () => {
  console.log("Number of categories: ", liItemsEl.length);
  liItemsEl.forEach((el) => {
    console.log("Category: ", el.firstElementChild.textContent);
    console.log(`Elements: `, el.lastElementChild.children.length);
  });
};

methodWithForEach();
