const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const display = document.getElementById("display");

reset.addEventListener("click", () => {
  display.innerHTML = "0";
});

increment.addEventListener("click", () => {
  display.innerHTML = parseInt(display.innerHTML) + 1;
});
decrement.addEventListener("click", () => {
  display.innerHTML = parseInt(display.innerHTML) - 1;
});
