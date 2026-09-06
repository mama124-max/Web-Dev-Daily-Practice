// Select all accordion item headers
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const titleButton = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');

  titleButton.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // 1. Close all currently active items first (Single-accordion mode)
    accordionItems.forEach(otherItem => {
      otherItem.classList.remove('active');
      otherItem.querySelector('.accordion-content').style.maxHeight = null;
    });

    // 2. If the clicked item was not active, open it
    if (!isActive) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});