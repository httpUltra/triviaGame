let questions = [
  "What planet is known as the 'Red Planet'?",
  "Who painted the Mona Lisa?",
];
let choicesArr = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
];
let correctAnswers = ["Mars", "Da Vinci"];
let currentQuestionIndex = 0;
let score = 0;

function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    for (let i = 1; i < 5; i++) {
      document.getElementById('question').innerHTML = questions[currentQuestionIndex];
      const btn = document.getElementById(`choice${i}`);
      btn.innerHTML = choicesArr[currentQuestionIndex][i - 1];
      btn.value = choicesArr[currentQuestionIndex][i - 1];
    }
  } else {
    document.getElementById("result").innerHTML =
      `You got ${score} out of ${questions.length}`;
    document.getElementById(`choice`).disabled = true;
    document.getElementById(`choice`).innerHTML = "";
    document.getElementById("question").innerHTML = "";
  }
  return questions;
}

displayQuestion();
