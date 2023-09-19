const container = document.getElementById("grid");
let gridNumber = 10;

let newSizeButton = document.querySelector("#newSize");
newSizeButton.addEventListener("click", function () {
  let number = parseInt(prompt("Enter a value", 16));
  while (isNaN(number) || number < 1 || number > 100) {
    number = parseInt(prompt("Enter a value", 16));
  }

  createGrid(value);
});
