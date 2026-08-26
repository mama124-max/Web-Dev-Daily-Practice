// Select filter buttons and cards
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    // 1. Update active styling on buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 2. Get selected category
    const filterValue = button.getAttribute('data-filter');

    // 3. Filter cards based on selection
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (filterValue === 'all' || filterValue === cardCategory) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});