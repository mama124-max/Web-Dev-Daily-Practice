// Select Steps and Buttons
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const stepSuccess = document.getElementById('step-success');

const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const submitBtn = document.getElementById('submit-btn');

const stepBadge = document.getElementById('step-badge');

// 1. Advance from Step 1 to Step 2
nextBtn.addEventListener('click', () => {
  const fullname = document.getElementById('fullname').value.trim();
  const umid = document.getElementById('umid').value.trim();

  // Basic validation check
  if (!fullname || !umid) {
    alert('Please enter your Name and UMID to continue.');
    return;
  }

  step1.classList.remove('active');
  step2.classList.add('active');
  stepBadge.textContent = 'Step 2 of 2';
});

// 2. Go back from Step 2 to Step 1
backBtn.addEventListener('click', () => {
  step2.classList.remove('active');
  step1.classList.add('active');
  stepBadge.textContent = 'Step 1 of 2';
});

// 3. Complete Registration
submitBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Please complete your login credentials.');
    return;
  }

  step2.classList.remove('active');
  stepSuccess.classList.add('active');
  stepBadge.textContent = 'Verified';
});