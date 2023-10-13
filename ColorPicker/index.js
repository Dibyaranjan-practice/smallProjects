const container = document.getElementsByClassName("container")[0];
const display = document.getElementsByClassName("display")[0];

async function add(i, j, k) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = `rgb(${i}, ${j}, ${k})`;
  container.appendChild(card);
}
for (let i = 255; i >= 0; i -= 3) {
  for (let j = 255; j >= 0; j -= 3) {
    for (let k = 255; k >= 0; k -= 6) {
      add(i, j, k);
    }
  }
}

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) {
    display.style.backgroundColor = event.target.style.backgroundColor;
    display.innerHTML = event.target.style.backgroundColor;
  }
});
