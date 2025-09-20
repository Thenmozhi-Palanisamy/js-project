const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "High Tech Markup Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Python"],
    answer: 3
  },
  {
    question: "Which is used for connecting database?",
    options: ["PHP", "HTML", "CSS", "JS"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

function loadQuestion() {
  let q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.forEach((btn, i) => {
    btn.innerText = q.options[i];
    btn.disabled = false;
    btn.style.background = "#eee";
  });
}

function selectAnswer(index) {
  let q = quizData[currentQuestion];
  if (index === q.answer) {
    score++;
    optionsEl[index].style.background = "lightgreen";
  } else {
    optionsEl[index].style.background = "salmon";
  }

  // disable all buttons after answer
  optionsEl.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.innerText = `${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizEl.classList.remove("hidden");
  resultEl.classList.add("hidden");
  loadQuestion();
}

// Load first question
loadQuestion();

