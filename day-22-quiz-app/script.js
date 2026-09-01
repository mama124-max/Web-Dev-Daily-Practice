const questions = [
  {
    question: "Which data structure uses LIFO (Last In, First Out) ordering?",
    options: ["Queue", "Stack", "Array List", "Linked List"],
    answer: 1
  },
  {
    question: "In Web Development, what does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets"],
    answer: 2
  },
  {
    question: "Which Git command records changes permanently in the repository?",
    options: ["git push", "git commit", "git add", "git status"],
    answer: 1
  },
  {
    question: "What is the standard port used for HTTP communication?",
    options: ["Port 443", "Port 21", "Port 80", "Port 22"],
    answer: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');
const nextBtn = document.getElementById('next-btn');
const quizBody = document.getElementById('quiz-body');
const resultsScreen = document.getElementById('results-screen');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');
const cardFooter = document.getElementById('card-footer');

function loadQuestion() {
  const currentQ = questions[currentQuestionIndex];
  
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionText.textContent = currentQ.question;
  optionsContainer.innerHTML = '';
  nextBtn.disabled = true;

  currentQ.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(index, currentQ.answer));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedIndex, correctIndex) {
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  
  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === correctIndex) {
    buttons[selectedIndex].classList.add('correct');
    score++;
    scoreText.textContent = `Score: ${score}`;
  } else {
    buttons[selectedIndex].classList.add('incorrect');
    buttons[correctIndex].classList.add('correct');
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  quizBody.classList.add('hidden');
  cardFooter.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  finalScore.textContent = `You scored ${score} out of ${questions.length}!`;
}

restartBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreText.textContent = `Score: 0`;
  resultsScreen.classList.add('hidden');
  quizBody.classList.remove('hidden');
  cardFooter.classList.remove('hidden');
  loadQuestion();
});

// Initial Load
loadQuestion();