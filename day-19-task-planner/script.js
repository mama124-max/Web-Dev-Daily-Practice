// State Management Array
let tasks = [
  { id: 1, text: "Review Java OOP Interfaces", category: "Study", completed: false },
  { id: 2, text: "Push Daily Web Dev Challenge", category: "Code", completed: true }
];

// DOM Element References
const taskInput = document.getElementById('task-input');
const categorySelect = document.getElementById('category-select');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const progressPercent = document.getElementById('progress-percent');

// Render Tasks to DOM
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    
    li.innerHTML = `
      <div class="task-left">
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
        <span class="task-text">${task.text}</span>
        <span class="task-badge">${task.category}</span>
      </div>
      <button class="delete-btn" onclick="deleteTask(${task.id})">&times;</button>
    `;

    taskList.appendChild(li);
  });

  updateProgress();
}

// Add New Task
addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  const category = categorySelect.value;

  if (text === '') {
    alert('Please enter a task description.');
    return;
  }

  const newTask = {
    id: Date.now(),
    text: text,
    category: category,
    completed: false
  };

  tasks.push(newTask);
  taskInput.value = '';
  renderTasks();
});

// Toggle Completion Status
window.toggleTask = function(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  renderTasks();
};

// Delete Task
window.deleteTask = function(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
};

// Update Progress Bar Indicator
function updateProgress() {
  const total = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completedCount / total) * 100);

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${completedCount} of ${total} tasks completed`;
  progressPercent.textContent = `${percentage}%`;
}

// Initial Render
renderTasks();