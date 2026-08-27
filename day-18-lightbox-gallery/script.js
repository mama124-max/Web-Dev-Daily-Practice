// Select DOM Elements
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('lightbox-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.getElementById('close-btn');

// Open Modal on Image Click
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const fullSizeSrc = img.getAttribute('data-full');
    const captionText = img.getAttribute('data-caption');

    modalImg.src = fullSizeSrc;
    modalCaption.textContent = captionText;
    modal.classList.add('active');
  });
});

// Close Modal Function
const closeModal = () => {
  modal.classList.remove('active');
  modalImg.src = '';
};

// Event Listeners to Close
closeBtn.addEventListener('click', closeModal);

// Close when clicking background outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});