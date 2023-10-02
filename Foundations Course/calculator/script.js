let var1 = "";
let var2 = "";
let total = 0;
let sign = "";
let buttons = document.querySelectorAll(".innerButton");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", () => {
    clear();
    var1 += button.innerHTML;
    document.getElementById("display").innerHTML = var1;

    if (sign == "/") {
      let temp = var2;
      document.getElementById("display").innerHTML = temp;
      var1 = divideFunction(var1, var2);
      var2 = null;
      console.log(`temp: ${temp}`);
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
  });
}

let clears = document.querySelector(".clear");
clears.addEventListener("click", () => {
  var1 = "";
  var2 = "";
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
  total = parseFloat(var1);
  clear();
  document.getElementById("display").innerHTML = total;
});

let percent = document.querySelector(".sign.percent");
percent.addEventListener("click", () => {
  let temp = parseFloat(var1);
  temp /= 100;
  var1 = temp.toString();
  document.getElementById("display").innerHTML = temp;
});

let signChange = document.querySelector(".sign.preSign");
signChange.addEventListener("click", () => {
  let temp = parseFloat(var1);
  temp *= -1;
  var1 = temp.toString();
  document.getElementById("display").innerHTML = var1;
});

function divideFunction(a, b) {
  let x = parseFloat(a);
  let y = parseFloat(b);
  return x / y;
}

function multiplyFunction(a, b) {
  let x = parseFloat(a);
  let y = parseFloat(b);
  return x * y;
}

function addFunction(a, b) {
  let x = parseFloat(a);
  let y = parseFloat(b);
  return x + y;
}

function minusFunction(a, b) {
  let x = parseFloat(a);
  let y = parseFloat(b);
  return x - y;
}

function clear() {
  document.getElementById("display").innerHTML = "";
}
