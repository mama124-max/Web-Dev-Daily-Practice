const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');

  questionBtn.addEventListener('click', () => {
    // Close other open accordions
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Toggle current accordion
    item.classList.toggle('active');
  });
});