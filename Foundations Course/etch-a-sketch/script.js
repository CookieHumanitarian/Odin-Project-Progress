const container = document.getElementById("grid");
let gridNumber = 10;

function generateGrids(gridNumber) {
  for (let i = 0; i < gridNumber; i++) {
    for (let k = 0; k < gridNumber; k++) {
      let innerGrid = document.createElement("div");
      innerGrid.classList.add("inner_grid");
      container.appendChild(innerGrid);
    }
  }
}

generateGrids(gridNumber);
