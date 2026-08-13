// 1. Select DOM elements
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// 2. Initialize count state
let count = 0;

// 3. Update UI function
function updateDisplay() {
  counterDisplay.textContent = count;
  
  // Optional: Change color if negative or positive!
  if (count > 0) {
    counterDisplay.style.color = '#059669'; // Emerald
  } else if (count < 0) {
    counterDisplay.style.color = '#f43f5e'; // Coral
  } else {
    counterDisplay.style.color = '#1e1b4b'; // Dark Indigo
  }
}

// 4. Add Event Listeners
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
