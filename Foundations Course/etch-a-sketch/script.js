const container = document.querySelector("#grid");
let gridNumber = 16;
let startDrag = false;

function defaultColorChange() {
  let eachGrid = document.querySelectorAll(".innerGrid");
  startDrag = false;
  eachGrid.forEach(function (e) {
    e.addEventListener("mousedown", function () {
      startDrag = true;
      if (!e.classList.contains("black")) {
        e.classList.add("black");
        return;
      } else {
        e.classList.remove("black");
      }
    });
    e.addEventListener("mouseover", function () {
      if (!e.classList.contains("black") && startDrag === true) {
        e.classList.add("black");
      }
    });
    e.addEventListener("mouseup", function () {
      startDrag = false;
    });
  });
}

let newSizeButton = document.querySelector("#newSize");
newSizeButton.addEventListener("click", function () {
  let number = parseInt(prompt("Enter a value", 16));
  while (isNaN(number) || number < 1 || number > 100) {
    number = parseInt(prompt("Enter a value", 16));
  }
  resetGrid();
  createGrid(number);
  defaultColorChange();
});

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  resetGrid();
  createGrid(gridNumber);
  defaultColorChange();
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
defaultColorChange();
