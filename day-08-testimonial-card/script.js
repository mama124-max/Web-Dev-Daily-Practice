const streak = 8;
const projectTopic = "JavaScript interactivity";

// 1. Insert text dynamically using template literals (backticks)
const quoteElement = document.getElementById("quote-text");
quoteElement.textContent = `Daily coding Day ${streak} is going great! Today I learned how to handle ${projectTopic} seamlessly.`;

// 2. Interactive like counter
let likes = 0;
const likeBtn = document.getElementById("like-btn");
const likeCountSpan = document.getElementById("like-count");

likeBtn.addEventListener("click", () => {
  likes++;
  likeCountSpan.textContent = likes;
});