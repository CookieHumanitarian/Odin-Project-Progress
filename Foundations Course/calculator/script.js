let var1 = "";
let total = null;
let sign = "";
let count = 0;

let buttons = document.querySelectorAll(".innerButton");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", () => {
    clear();
    var1 += button.innerHTML;
    document.getElementById("display").innerHTML = var1;
  });
}

let clears = document.querySelector(".clear");
clears.addEventListener("click", () => {
  var1 = "";
  total = null;
  sign = "";
  clear();
});

let divides = document.querySelector(".sign.divide");
divides.addEventListener("click", () => {
  sign = "/";
  if (total == null) {
    total = var1;
    var1 = "";
  } else {
    if (var1 != "") {
      total = divideFunction(total, var1);
      document.getElementById("display").innerHTML = total;
    }
  }
});

let multiply = document.querySelector(".sign.multiply");
multiply.addEventListener("click", () => {
  if (total == null) {
    total = var1;
    var1 = "";
  } else {
    if (var1 != "") {
      total = multiplyFunction(total, var1);
      document.getElementById("display").innerHTML = total;
    }
  }
});

let addition = document.querySelector(".sign.plus");
addition.addEventListener("click", () => {
  sign = "+";
  if (total == null) {
    total = var1;
    var1 = "";
  } else {
    if (var1 != "") {
      total = addFunction(total, var1);
      document.getElementById("display").innerHTML = total;
    }
  }
});

let subtraction = document.querySelector(".sign.minus");
subtraction.addEventListener("click", () => {
  sign = "-";
  if (total == null) {
    total = var1;
    var1 = "";
  } else {
    if (var1 != "") {
      total = minusFunction(total, var1);
      document.getElementById("display").innerHTML = total;
    }
  }
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (sign == "/") {
    total = divideFunction(total, var1);
  } else if (sign == "*") {
    total = multiplyFunction(total, var1);
  } else if (sign == "+") {
    total = addFunction(total, var1);
  } else {
    total = minusFunction(total, var1);
  }
  clear();
  document.getElementById("display").innerHTML = total;
});

let percent = document.querySelector(".sign.percent");
percent.addEventListener("click", () => {
  let temp = parseFloat(var1);
  temp /= 100;
  total = temp.toString();
  document.getElementById("display").innerHTML = temp;
});

let signChange = document.querySelector(".sign.preSign");
signChange.addEventListener("click", () => {
  let temp = parseFloat(var1);
  temp *= -1;
  total = temp.toString();
  document.getElementById("display").innerHTML = var1;
});

function divideFunction(a, b) {
  let x = parseFloat(a);
  let y = parseFloat(b);
  var1 = "";
  return x / y;
}

function multiplyFunction(a, b) {
  let x = parseFloat(a);
  let y = parseFloat(b);
  var1 = "";
  return x * y;
}

function addFunction(a, b) {
  let x = parseFloat(a);
  let y = parseFloat(b);
  var1 = "";
  return x + y;
}

function minusFunction(a, b) {
  let x = parseFloat(a);
  let y = parseFloat(b);
  var1 = "";
  return x - y;
}

function clear() {
  document.getElementById("display").innerHTML = "";
}
