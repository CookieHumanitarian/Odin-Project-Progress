const container = document.querySelector("#grid");
let gridNumber = 16;

let newSizeButton = document.querySelector("#newSize");
newSizeButton.addEventListener("click", function () {
  let number = parseInt(prompt("Enter a value", 16));
  while (isNaN(number) || number < 1 || number > 100) {
    number = parseInt(prompt("Enter a value", 16));
  }
  resetGrid();
  createGrid(number);
});

function createGrid(value) {
  let gridSize = value * value;
  for (let i = 0; i < gridSize; i++) {
    let grid = document.createElement("div");
    grid.classList.add("innerGrid");
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.appendChild(grid);
  }
}

function resetGrid() {
  container.innerHTML = "";
}

createGrid(gridNumber);
