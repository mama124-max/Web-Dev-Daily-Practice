// 1. Grab HTML elements using document.getElementById
const passwordDisplay = document.getElementById('password-display');
const copyBtn = document.getElementById('copy-btn');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');

const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate-btn');

// Character Pool Sets
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Update length text label when slider is dragged
lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

// Password Generation Function
function generatePassword() {
  let characterPool = '';

  // Build pool based on checked boxes
  if (includeUppercase.checked) characterPool += UPPERCASE_CHARS;
  if (includeLowercase.checked) characterPool += LOWERCASE_CHARS;
  if (includeNumbers.checked) characterPool += NUMBER_CHARS;
  if (includeSymbols.checked) characterPool += SYMBOL_CHARS;

  // Edge case: If user unchecks all boxes
  if (characterPool === '') {
    alert('Please select at least one character type!');
    return;
  }

  let result = '';
  const passwordLength = Number(lengthSlider.value);

  // Loop through and pick a random character from the pool string
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    result += characterPool[randomIndex];
  }

  passwordDisplay.value = result;
}

// Copy to Clipboard Function
copyBtn.addEventListener('click', () => {
  if (!passwordDisplay.value) return;

  navigator.clipboard.writeText(passwordDisplay.value).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1500);
  });
});

// Event Listener for Generate Button
generateBtn.addEventListener('click', generatePassword);

// Generate initial password on page load
generatePassword();