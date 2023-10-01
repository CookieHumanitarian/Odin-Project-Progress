let var1 = null;
let var2 = null;
let total = 0;
let sign = "";
let buttons = document.querySelectorAll(".innerButton");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", () => {
    clear();
    document.getElementById("display").innerHTML += button.innerHTML;
    if (var1 === null) {
      var1 = button.innerHTML;
    } else {
      var2 = button.innerHTML;
    }

    if (var1 != null && var2 != null) {
      if (sign == "/") {
        let temp = var2;
        document.getElementById("display").innerHTML = temp;
        var1 = divideFunction(var1, var2);
        var2 = null;
      } else if (sign == "*") {
        let temp = var2;
        document.getElementById("display").innerHTML = temp;
        var1 = multiplyFunction(var1, var2);
        var2 = null;
      } else if (sign == "+") {
        let temp = var2;
        document.getElementById("display").innerHTML = temp;
        var1 = addFunction(var1, var2);
        var2 = null;
      } else if (sign == "-") {
        let temp = var2;
        document.getElementById("display").innerHTML = temp;
        var1 = minusFunction(var1, var2);
        var2 = null;
      }
    }
  });
}

let clears = document.querySelector(".clear");
clears.addEventListener("click", () => {
  var1 = null;
  var2 = null;
  total = 0;
  sign = "";
  clear();
});

let divides = document.querySelector(".sign.divide");
divides.addEventListener("click", () => {
  sign = "/";
});

let multiply = document.querySelector(".sign.multiply");
multiply.addEventListener("click", () => {
  sign = "*";
});

let addition = document.querySelector(".sign.plus");
addition.addEventListener("click", () => {
  sign = "+";
});

let subtraction = document.querySelector(".sign.minus");
subtraction.addEventListener("click", () => {
  sign = "-";
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  total = var1;
  clear();
  document.getElementById("display").innerHTML = total;
});

function divideFunction(a, b) {
  let x = Number(a);
  let y = Number(b);
  return x / y;
}

function multiplyFunction(a, b) {
  let x = Number(a);
  let y = Number(b);
  return x * y;
}

function addFunction(a, b) {
  let x = Number(a);
  let y = Number(b);
  return x + y;
}

function minusFunction(a, b) {
  let x = Number(a);
  let y = Number(b);
  return x - y;
}

function clear() {
  document.getElementById("display").innerHTML = "";
}
