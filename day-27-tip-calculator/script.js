// Grab DOM elements
const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');

const tipPerPersonDisplay = document.getElementById('tip-per-person');
const totalPerPersonDisplay = document.getElementById('total-per-person');
const resetBtn = document.getElementById('reset-btn');

let currentTipPercent = 15; // Default tip percentage

// Function to calculate and render totals
function calculateTip() {
  const billValue = parseFloat(billInput.value) || 0;
  const peopleCount = parseInt(peopleInput.value) || 1;

  if (billValue <= 0 || peopleCount <= 0) {
    tipPerPersonDisplay.textContent = '$0.00';
    totalPerPersonDisplay.textContent = '$0.00';
    return;
  }

  const totalTip = billValue * (currentTipPercent / 100);
  const totalAmount = billValue + totalTip;

  const tipPerPerson = totalTip / peopleCount;
  const totalPerPerson = totalAmount / peopleCount;

  tipPerPersonDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}

// Handle preset tip button clicks
tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    tipButtons.forEach(btn => btn.classList.remove('active'));

    // Highlight clicked button
    button.classList.add('active');
    customTipInput.value = '';

    // Update tip percent and recalculate
    currentTipPercent = parseFloat(button.dataset.tip);
    calculateTip();
  });
});

// Handle custom tip input
customTipInput.addEventListener('input', () => {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  currentTipPercent = parseFloat(customTipInput.value) || 0;
  calculateTip();
});

// Handle input changes for bill total and people count
billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

// Handle Reset Button
resetBtn.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '1';
  customTipInput.value = '';
  
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipButtons[2].classList.add('active'); // Reset to default 15%
  currentTipPercent = 15;

  calculateTip();
});