//faq_list
const question_container = document.getElementsByClassName("container")[0];
const question_list = document.getElementsByClassName("question-list")[0];

question_list.addEventListener("click", (event) => {
  if (event.target.parentElement.classList.contains("fa-square-plus")) {
    console.log("workign");
    event.target.parentElement.parentElement.nextElementSibling.classList.toggle(
      "hide"
    );
  }
});

//load all the questions and answers
faq_list.forEach((question) => {
  const questions = document.createElement("div");
  questions.classList.add("question-container");
  questions.innerHTML = `
  
      <div class="question">
        <div class="que">${question[1]}</div>
        <i class="fa-regular fa-square-plus"></i>
      </div>
      <div class="answer hide">${question[2]}</div>
    
  `;
  question_list.appendChild(questions);
});
