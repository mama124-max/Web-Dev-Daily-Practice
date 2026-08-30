// State Array
let expenses = [
  { id: 1, title: "Course Textbook", amount: 45.00, category: "Utilities" },
  { id: 2, title: "Campus Lunch", amount: 12.50, category: "Food" }
];

// DOM Elements
const titleInput = document.getElementById('expense-title');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const addExpenseBtn = document.getElementById('add-expense-btn');
const expenseList = document.getElementById('expense-list');

const totalDisplay = document.getElementById('total-display');
const entryCountDisplay = document.getElementById('entry-count');

// Render Function
function renderExpenses() {
  expenseList.innerHTML = '';

  expenses.forEach(item => {
    const li = document.createElement('li');
    li.className = 'expense-item';

    li.innerHTML = `
      <div class="expense-info">
        <h4>${item.title}</h4>
        <span class="category-badge">${item.category}</span>
      </div>
      <div class="expense-meta">
        <span class="expense-amount">$${item.amount.toFixed(2)}</span>
        <button class="delete-btn" onclick="deleteExpense(${item.id})">&times;</button>
      </div>
    `;

    expenseList.appendChild(li);
  });

  updateTotal();
}

// Add Expense Listener
addExpenseBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (!title || isNaN(amount) || amount <= 0 || !category) {
    alert('Please enter a valid title, positive amount, and category.');
    return;
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount,
    category
  };

  expenses.push(newExpense);

  // Clear Inputs
  titleInput.value = '';
  amountInput.value = '';
  categoryInput.selectedIndex = 0;

  renderExpenses();
});

// Delete Item Function
window.deleteExpense = function(id) {
  expenses = expenses.filter(item => item.id !== id);
  renderExpenses();
};

// Calculate Total Spending
function updateTotal() {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  totalDisplay.textContent = `$${total.toFixed(2)}`;
  entryCountDisplay.textContent = `${expenses.length} Transaction${expenses.length === 1 ? '' : 's'}`;
}

// Initial Render
renderExpenses();