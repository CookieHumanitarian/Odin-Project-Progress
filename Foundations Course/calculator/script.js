let var1 = 0;
let total = 0;
let sign = "";

let buttons = document.querySelectorAll(".innerButton");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", () => {
    clear();
    document.getElementById("display").innerHTML += button.innerHTML;
    var1 = button.innerHTML;
  });
}

let clears = document.querySelector(".clear");
clears.addEventListener("click", () => {
  var1 = 0;
  total = 0;
  sign = "";
  clear();
});

let divides = document.querySelector(".sign.divide");
divides.addEventListener("click", () => {
  sign = "/";
  if (total == 0) {
    total = var1;
    document.getElementById("display").innerHTML = total;
  } else {
    total = divideFunction(total, var1);
    document.getElementById("display").innerHTML = total;
  }
});

function divideFunction(a, b) {
  let x = Number(a);
  let y = Number(b);
  return x / y;
}

function clear() {
  document.getElementById("display").innerHTML = "";
}

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (sign == "/") {
    total = divideFunction(total, var1);
  }
  clear();
  document.getElementById("display").innerHTML = total;
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", () => {
      document.getElementById("display").innerHTML = "Please reset calculator";
    });
  }
});
