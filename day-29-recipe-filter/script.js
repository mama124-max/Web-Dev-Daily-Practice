// Sample Recipe Dataset
const recipes = [
  { id: 1, title: 'Avocado Toast & Egg', category: 'breakfast', time: '10 mins', desc: 'Crispy sourdough topped with mashed avocado and poached egg.' },
  { id: 2, title: 'Classic Fluffy Pancakes', category: 'breakfast', time: '15 mins', desc: 'Golden pancakes served with fresh berries and warm maple syrup.' },
  { id: 3, title: 'Grilled Salmon Bowl', category: 'main', time: '25 mins', desc: 'Seasoned salmon served over quinoa with roasted vegetables.' },
  { id: 4, title: 'Garlic Butter Pasta', category: 'main', time: '20 mins', desc: 'Al dente spaghetti tossed in parmesan cheese and herbs.' },
  { id: 5, title: 'Dark Chocolate Lava Cake', category: 'dessert', time: '30 mins', desc: 'Rich chocolate cake with a molten center served warm.' },
  { id: 6, title: 'Berry Acai Smoothie Bowl', category: 'dessert', time: '10 mins', desc: 'Blended acai topped with chia seeds, granola, and sliced banana.' }
];

// DOM Elements
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const recipeGrid = document.getElementById('recipe-grid');

let currentCategory = 'all';

// Function to filter and render recipes
function renderRecipes() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = currentCategory === 'all' || recipe.category === currentCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  recipeGrid.innerHTML = '';

  if (filteredRecipes.length === 0) {
    recipeGrid.innerHTML = `<p style="color: #64748b; font-size: 0.9rem; grid-column: 1/-1;">No recipes match your search.</p>`;
    return;
  }

  filteredRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    card.innerHTML = `
      <div>
        <span class="recipe-tag">${recipe.category}</span>
        <h3 style="margin-top: 8px;">${recipe.title}</h3>
        <p style="margin-top: 6px;">${recipe.desc}</p>
      </div>
      <div class="recipe-time">⏱ ${recipe.time}</div>
    `;

    recipeGrid.appendChild(card);
  });
}

// Category Button Click Listeners
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentCategory = btn.dataset.category;
    renderRecipes();
  });
});

// Search Input Listener
searchInput.addEventListener('input', renderRecipes);

// Initial Page Render
renderRecipes();