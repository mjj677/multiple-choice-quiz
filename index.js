import {
  getQuestion,
  displayQuestion,
  showFeedback,
  checkAnswer,
  checkFinish,
  clearSelections
} from "./utils.js";

import questions from "./questions.json" with{type: 'json'}

const questionTitle = document.getElementById("questionParagraph");
const choices = [...document.getElementsByClassName("answer_list_item")];
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("reset-button")
const finalScore = document.getElementById("score");

let availableIndices = Array.from(Array(questions.length).keys());
let score = 0;

let question = getQuestion(availableIndices, questions);

displayQuestion(question, questionTitle, choices);

nextButton.addEventListener("click", () => {
  const selectedCheckbox = document.querySelector(
    'input[type="radio"]:checked'
  );
  if (selectedCheckbox) {
    const answer = selectedCheckbox.nextElementSibling.innerText;
    const result = checkAnswer(answer, question, score);
    if (result) score++;
    showFeedback(result);
    const finished = checkFinish(availableIndices);
    if (!finished) {
      question = getQuestion(availableIndices, questions);
      displayQuestion(question, questionTitle, choices);
    } else {
      nextButton.disabled = true;
      finalScore.innerText = score === 10 ? "PERFECT SCORE!" : `SCORE ${score}/10`
    }
  } else {
    feedback.innerText = "Please select an answer.";
  }
});

resetButton.addEventListener("click", () => {
    score = 0
    availableIndices = Array.from(Array(questions.length).keys())
    question = getQuestion(availableIndices, questions)
    displayQuestion(question, questionTitle, choices)

    feedback.innerText = "";
    finalScore.innerText = "";

    nextButton.disabled = false;

    clearSelections();
})


