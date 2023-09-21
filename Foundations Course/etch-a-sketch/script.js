const container = document.querySelector("#grid");
let gridNumber = 16;
let startDrag = false;

let newSizeButton = document.querySelector("#newSize");
newSizeButton.addEventListener("click", function () {
  let number = parseInt(prompt("Enter a value", 16));
  while (isNaN(number) || number < 1 || number > 100) {
    number = parseInt(prompt("Enter a value", 16));
  }
  createGrid(number);
  defaultColorChange();
});

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  createGrid(gridNumber);
  defaultColorChange();
});

let colorButton = document.querySelector("#color");
colorButton.addEventListener("click", function () {
  return;
});

function createGrid(value) {
  container.innerHTML = "";
  let gridSize = value * value;
  for (let i = 0; i < gridSize; i++) {
    let grid = document.createElement("div");
    grid.classList.add("innerGrid");
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.appendChild(grid);
  }
}

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

createGrid(gridNumber);
defaultColorChange();
