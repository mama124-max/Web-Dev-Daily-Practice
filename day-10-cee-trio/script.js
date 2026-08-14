// Modal Functionality for Full Booking Policy
const openRulesBtn = document.getElementById('open-rules-btn');
const closeRulesBtn = document.getElementById('close-rules-btn');
const rulesModal = document.getElementById('rules-modal');

openRulesBtn.addEventListener('click', () => {
  rulesModal.classList.remove('hidden');
});

closeRulesBtn.addEventListener('click', () => {
  rulesModal.classList.add('hidden');
});

// Close modal if user clicks outside content box
window.addEventListener('click', (e) => {
  if (e.target === rulesModal) {
    rulesModal.classList.add('hidden');
  }
});

// Booking Form Submission Handling
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const selectedPackage = document.getElementById('package').value;
  const statusBox = document.getElementById('status-box');

  statusBox.classList.remove('hidden');
  statusBox.innerHTML = `<strong>Booking Request Received!</strong><br>Thank you, ${name}. We have logged your request for <em>${selectedPackage}</em>. Our team will contact you on WhatsApp (<strong>${phone}</strong>) to complete your 50% deposit.`;

  this.reset();
});