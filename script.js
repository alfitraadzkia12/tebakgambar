const questions = [
  {
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500",
    answer: "kucing",
    hint: "Clue: Hewan mamalia berkaki empat yang suka mengeong"
  },
  {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    answer: "kopi",
    hint: "Clue: Minuman berwarna hitam penahan kantuk"
  },
  {
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500",
    answer: "laboratorium",
    hint: "Clue: Tempat melakukan eksperimen dan pengujian ilmiah"
  }
];

let currentIndex = 0;
let score = 0;

const imageEl = document.getElementById("game-image");
const hintEl = document.getElementById("hint-text");
const inputEl = document.getElementById("user-input");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

function loadQuestion() {
  const currentQ = questions[currentIndex];
  imageEl.src = currentQ.image;
  hintEl.textContent = currentQ.hint;
  inputEl.value = "";
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  nextBtn.style.display = "none";
  submitBtn.disabled = false;
  inputEl.disabled = false;
  inputEl.focus();
}

function checkAnswer() {
  const userAnswer = inputEl.value.trim().toLowerCase();
  const correctAnswer = questions[currentIndex].answer.toLowerCase();

  if (userAnswer === "") return;

  if (userAnswer === correctAnswer) {
    score += 10;
    scoreEl.textContent = score;
    feedbackEl.textContent = "✓ Benar sekali!";
    feedbackEl.className = "feedback correct";
    submitBtn.disabled = true;
    inputEl.disabled = true;
    nextBtn.style.display = "block";
  } else {
    feedbackEl.textContent = "✕ Salah, coba lagi!";
    feedbackEl.className = "feedback wrong";
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".game-container").innerHTML = `
      <h2>🎉 Permainan Selesai!</h2>
      <p style="margin: 20px 0; font-size: 1.2rem;">Skor Akhir Kamu: <strong>${score}</strong></p>
      <button onclick="location.reload()">Main Lagi</button>
    `;
  }
}

inputEl.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

loadQuestion();
