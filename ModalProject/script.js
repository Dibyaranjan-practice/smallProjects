const loginForm = document.getElementById("login");
const modal = document.getElementsByClassName("modal")[0];
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (modal.style.display == "block") modal.style.display = "none";
  else modal.style.display = "block";
});
