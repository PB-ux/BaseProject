quiz = [
  {
    question: "When is Harry Potter’s birthday?",
    a: "July 31",
    b: "August 22",
    c: "February 1",
    d: "March 5",
    correct: "a",
  },
  {
    question: "Where do the Dursleys live?",
    a: "Godric’s Hollow",
    b: "Little Whinging",
    c: "Diagon Alley",
    d: "Hogwarts",
    correct: "b",
  },
  {
    question: "How many brothers does Ron have?",
    a: "Seven",
    b: "Five",
    c: "Two",
    d: "Three",
    correct: "b",
  },
  {
    question: "What is Hermione’s middle name?",
    a: "Jean",
    b: "Diane",
    c: "Monica",
    d: "Anna",
    correct: "a",
  },
  {
    question: "What is Harry’s Patronus?",
    a: "Otter",
    b: "Stag",
    c: "Lion",
    d: "Dog",
    correct: "b",
  },
];

const questionTitle = document.querySelector(".quiz-title");
const input = document.querySelectorAll("input");
const question_a = document.getElementById("question_a");
const question_b = document.getElementById("question_b");
const question_c = document.getElementById("question_c");
const question_d = document.getElementById("question_d");
const submitBtn = document.querySelector(".quiz-btn");
const finish = document.querySelector(".quiz-finish");
const quizList = document.querySelector(".quiz-list");

let counterQuestions = 0;
let checkedItem = undefined;
let scope = 0;

addQuestion();

function addQuestion() {
  const quizApp = quiz[counterQuestions];

  questionTitle.innerHTML = quizApp.question;
  question_a.innerHTML = quizApp.a;
  question_b.innerHTML = quizApp.b;
  question_c.innerHTML = quizApp.c;
  question_d.innerHTML = quizApp.d;
}

function getAnswer() {
  input.forEach((element) => {
    if (element.checked) {
      checkedItem = element;
    }
  });
  return checkedItem;
}

function disaibledInput() {
  input.forEach((element) => {
    element.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getAnswer();
  if (answer) {
    if (answer.id == quiz[counterQuestions].correct) {
      scope++;
    }

    counterQuestions++;

    if (counterQuestions < quiz.length) {
      disaibledInput();
      addQuestion();
    } else {
      questionTitle.innerHTML = "Finish!";
      quizList.style = "display: none;";
      finish.innerHTML = `Your score ${scope}/${quiz.length}`;
      submitBtn.innerHTML = "Reload";
      submitBtn.onclick = function () {
        window.location.reload();
      };
    }
  }
});
