const symbol = document.getElementsByClassName("symbol")[0];
const nav = document.getElementsByTagName("nav")[0];
let count = 0;
symbol.addEventListener("click", () => {
  count++;
  if (count % 2 == 1) nav.style.display = "block";
  else nav.style.display = "none";
});
