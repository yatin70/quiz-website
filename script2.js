// Category screen and quiz container
const categoryScreen = document.getElementById('category-screen');
const quizContainer = document.querySelector('.quiz-container');

// Variables
let quiz = []; // will hold questions of selected category
let currentQ = 0;
let score = 0;

// DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

// Category buttons click
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    loadCategory(category); // load questions
    categoryScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
  });
});

// Load questions based on selected category
function loadCategory(category)
{
  if(category === 'tech') {
    quiz = [
      {question: "Who developed the Python programming language?", options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"], answer: "Guido van Rossum"},
      {question: "Which company created TypeScript?", options: ["Google", "Microsoft", "Oracle", "Facebook"], answer: "Microsoft"},
      {question: "Primary language for Android development today?", options: ["C++", "Java", "Kotlin", "Swift"], answer: "Kotlin"},
      {question: "In Git, which command uploads changes to remote?", options: ["git save", "git commit", "git push", "git upload"], answer: "git push"},
      {question: "What does API stand for?", options: ["Automated Program Interface", "Application Programming Interface", "Applied Process Integration", "Advanced Programming Input"], answer: "Application Programming Interface"}
      // add more tech questions if needed
    ];
  } else if(category === 'science') {
    quiz = [
      {question: "In databases, what does ACID stand for?", options: ["Atomicity, Clarity, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Data", "Access, Control, Integration, Design"], answer: "Atomicity, Consistency, Isolation, Durability"},
      {question: "Time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(log n)"},
      {question: "In cloud, SaaS means?", options: ["Software as a Service", "System as a Service", "Storage and Security", "Standardized Application Solution"], answer: "Software as a Service"},
      {question: "Difference between TCP & UDP?", options: ["TCP is faster than UDP", "UDP guarantees delivery", "TCP is connection-oriented, UDP is connectionless", "Both are same"], answer: "TCP is connection-oriented, UDP is connectionless"},
      {question: "Most common encryption for online security?", options: ["DES", "AES", "MD5", "Blowfish"], answer: "AES"}
      // more science questions
    ];
  } else if(category === 'facts') {
    quiz = [
      {question: "Who invented the World Wide Web?", options: ["Charles Babbage", "Tim Berners-Lee", "Alan Turing", "Vinton Cerf"], answer: "Tim Berners-Lee"},
      {question: "What is “phishing”?", options: ["Malware attack", "Fake email/website to steal data", "Data encryption", "Password cracking method"], answer: "Fake email/website to steal data"},
      {question: "CRUD operations in DB?", options: ["Create, Remove, Update, Drop", "Create, Read, Update, Delete", "Copy, Run, Undo, Delete", "Compile, Reset, Use, Debug"], answer: "Create, Read, Update, Delete"},
      {question: "Big-O notation is used to describe?", options: ["Size of database", "Speed of hardware", "Algorithm complexity", "Program length"], answer: "Algorithm complexity"},
      {question: "In AI, NLP means?", options: ["Neural Learning Process", "Natural Language Processing", "Numerical Logic Programming", "Network Level Protocol"], answer: "Natural Language Processing"}
    ];
  } else if(category === 'capitals') {
    quiz = [
      {question: "Capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris"},
      {question: "Capital of Japan?", options: ["Tokyo", "Seoul", "Beijing", "Bangkok"], answer: "Tokyo"},
      {question: "Capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: "Ottawa"},
      {question: "Capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra"},
      {question: "Capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi"}
    ];
  }
}

// Show question function
function showQuestion() {
  const q = quiz[currentQ];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, btn);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

// Check answer function
function checkAnswer(selected, btn) {
  // permanently highlight selected button
  Array.from(optionsEl.children).forEach(b => b.disabled = true);
  btn.style.backgroundColor = selected === quiz[currentQ].answer ? "lightgreen" : "grey";

  if(selected === quiz[currentQ].answer) score++;
  nextBtn.style.display = "block";
}

// Next button click
nextBtn.onclick = () => {
  currentQ++;
  if(currentQ < quiz.length) {
    showQuestion();
  } else {
    resultEl.textContent = `You scored ${score} out of ${quiz.length}`;
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
  }
};
