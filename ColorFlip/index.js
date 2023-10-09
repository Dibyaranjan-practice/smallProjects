const button = document.getElementById("change");
const main = document.getElementsByClassName("main")[0];

const getColor = () => {
  let res = "#";
  for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * 15);
    if (r < 10) {
      res = res + r.toString();
    } else {
      res = res + String.fromCharCode((r % 10) + 65).toString();
    }
  }
  return res;
};

button.addEventListener("click", () => {
  main.style.backgroundColor = getColor();
});
setInterval(() => {
  main.style.backgroundColor = getColor();
}, 1000);
