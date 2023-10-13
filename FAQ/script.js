//faq_list
const question_container = document.getElementsByClassName("container")[0];
const question_list = document.getElementsByClassName("question_list")[0];

question_container.addEventListener("click", (event) => {
  if (event.target.parentElement.classList.contains("fa-circle-chevron-down")) {
    event.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle(
      "hide"
    );
    event.target.parentElement.nextElementSibling.classList.toggle("hide");
    event.target.parentElement.classList.toggle("hide");
  }
});
question_container.addEventListener("click", (event) => {
  if (event.target.parentElement.classList.contains("fa-circle-chevron-up")) {
    event.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle(
      "hide"
    );
    event.target.parentElement.previousElementSibling.classList.toggle("hide");
    event.target.parentElement.classList.toggle("hide");
  }
});

//load all the questions and answers
faq_list.forEach((question) => {
  const questions = document.createElement("div");
  questions.classList.add("question-container");
  questions.innerHTML = `
        <div class="question">
          <div class="que">${question[1]}</div>
          <div class="action">
          <i class="fa-solid fa-circle-chevron-down"></i>
          <i class="fa-solid fa-circle-chevron-up hide"></i>
          </div>
        </div>
        <div class="answer hide">${question[2]}</div>
    `;
  question_list.appendChild(questions);
});
