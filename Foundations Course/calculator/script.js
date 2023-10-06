let var1 = "";
let total = null;
let sign = "";

function updateDisplay(value) {
  document.getElementById("display").innerHTML = value;
}

function appendToVar1(value) {
  var1 += value;
  updateDisplay(var1);
}

function calculateFunction() {
  if (total === null) {
    total = parseFloat(var1);
  } else {
    const currentValue = parseFloat(var1);
    if (!isNaN(currentValue)) {
      switch (sign) {
        case "+":
          total += currentValue;
          break;
        case "-":
          total -= currentValue;
          break;
        case "x":
          total *= currentValue;
          break;
        case "/":
          if (currentValue !== 0) {
            total /= currentValue;
          } else {
            updateDisplay("Error: Division by zero");
            return;
          }
          break;
        default:
          break;
      }
    }
  }

  var1 = "";
  updateDisplay(total);
}

function clear() {
  total = null;
  var1 = "";
  sign = "";
  updateDisplay("");
}

document.querySelectorAll(".innerButton").forEach((button) => {
  button.addEventListener("click", () => {
    appendToVar1(button.innerHTML);
  });
});

document.querySelector(".clear").addEventListener("click", () => {
  clear();
});

document.querySelectorAll(".sign").forEach((operator) => {
  operator.addEventListener("click", () => {
    if (var1 !== "") {
      calculateFunction();
    }
    sign = operator.innerHTML;
  });
});

document.querySelector(".equal").addEventListener("click", () => {
  if (var1 !== "") {
    calculateFunction();
  }
});

document.querySelector(".sign.percent").addEventListener("click", () => {
  const temp = parseFloat(var1);
  if (!isNaN(temp)) {
    const result = temp / 100;
    updateDisplay(result.toString());
    var1 = result.toString();
  }
});

document.querySelector(".sign.preSign").addEventListener("click", () => {
  const temp = parseFloat(var1);
  if (!isNaN(temp)) {
    const result = -temp;
    updateDisplay(result.toString());
    var1 = result.toString();
  }
});
