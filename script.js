let questions = ["What planet is known as the 'Red Planet'?", "Who painted the Mona Lisa?"];
let choices = ["Earth", "Mars", "Jupiter", "Saturn"];

let choicesAr = [];
let correctAnswers = ["Mars", "Leonardo da Vinci"];
let currentQuestionIndex = 0;

function checkAnswer(button) {
    if (button.value === correctAnswers) {
        document.getElementById("result").innerHTML = "CORRECT!!!";
    } else {
        document.getElementById("result").innerHTML = "WRONG!!!";
    }
    for (let i = 1; i < 5; i++) {
        document.getElementById(`choice${i}`).disabled = true;
    }
}

function displayQuestion() {
    for (let i = 1; i < 5; i++) {
        const btn = document.getElementById(`choice${i}`);
        btn.innerHTML = choicesAr[currentQuestionIndex[i]];
        btn.value = choicesAr[currentQuestionIndex[i]];
    }
    let edit = document.getElementById("question").innerHTML = questions[currentQuestionIndex];
    edit.innerHTML = questions;
    return questions;
}