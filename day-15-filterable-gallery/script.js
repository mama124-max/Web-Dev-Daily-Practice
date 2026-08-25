// Select all filter buttons and gallery items
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Attach click listener to each filter button
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    // 1. Manage Active Button Highlight
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. Get Selected Category Filter Value
    const selectedFilter = btn.getAttribute('data-filter');

    // 3. Loop through images and toggle visibility
    galleryItems.forEach(item => {
      if (selectedFilter === 'all' || item.classList.contains(selectedFilter)) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});