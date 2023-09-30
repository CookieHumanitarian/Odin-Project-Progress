let buttons = document.querySelectorAll(".innerButton");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", () => {
    document.getElementById("display").innerHTML += button.innerHTML;
  });
}

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  document.getElementById("display").innerHTML = "";
});
