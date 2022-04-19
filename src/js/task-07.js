const ref = {
  inputFontSizeRange: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
const changeSizeFont = (event) =>
  (ref.text.style.fontSize = `${ref.inputFontSizeRange.value}px`);

ref.inputFontSizeRange.addEventListener("input", changeSizeFont);
