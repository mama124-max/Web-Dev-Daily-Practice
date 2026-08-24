// Select DOM Elements
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.getElementById('modal-close');

// 1. Loop through cards and attach click events
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Extract custom attributes stored in data-full and data-caption
    const fullImgSrc = card.getAttribute('data-full');
    const captionText = card.getAttribute('data-caption');

    // Update modal elements
    modalImg.src = fullImgSrc;
    modalCaption.textContent = captionText;

    // Show modal
    modal.classList.add('active');
  });
});

// 2. Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// 3. Close modal when clicking anywhere outside the image content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});