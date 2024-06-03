export const getQuestion = (availableIndices, questions) => {
  if (availableIndices.length === 30) {
    return null
  }  
  const randomIndex = Math.floor(Math.random() * availableIndices.length);
  const questionIndex = availableIndices[randomIndex];
  availableIndices.splice(randomIndex, 1);
  return questions[questionIndex];
};

export const displayQuestion = (question, questionTitle, choices) => {
  if (question === null) {
    return null;
  }
  questionTitle.innerHTML = question.question;

  choices.forEach((choice, index) => {
    const label = choice.querySelector("label");
    label.textContent = question.choices[index];
  });
}

export const showFeedback = (result) => {
  if (result) {
    feedback.innerText = `You got it correct`;
  } else {
    feedback.innerText = `You got it wrong`;
  }
};

export const checkAnswer = (answer, question, score) => {
  if (answer === question.choices[question.correct]) {
    return true;
  } else return false;
};

export const checkFinish = (availableIndices) => {
  return availableIndices.length === 30 ? true : false;
};

export const clearSelections = () => {
    const selectedRadios = document.querySelectorAll('input[type="radio"]:checked');
    selectedRadios.forEach(radio => radio.checked = false);
}
