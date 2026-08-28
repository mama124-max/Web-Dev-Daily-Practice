// State Array
let courses = [
  { id: 1, name: "Java Programming II", credits: 3, grade: 4.0, gradeLabel: "A" },
  { id: 2, name: "Data Structures & Algorithms", credits: 4, grade: 3.5, gradeLabel: "B+" }
];

// DOM References
const courseNameInput = document.getElementById('course-name');
const courseCreditsInput = document.getElementById('course-credits');
const courseGradeInput = document.getElementById('course-grade');
const addCourseBtn = document.getElementById('add-course-btn');
const courseList = document.getElementById('course-list');

const gpaDisplay = document.getElementById('gpa-display');
const totalCreditsDisplay = document.getElementById('total-credits');

// Render Function
function renderCourses() {
  courseList.innerHTML = '';

  courses.forEach(course => {
    const li = document.createElement('li');
    li.className = 'course-item';

    li.innerHTML = `
      <div class="course-info">
        <h4>${course.name}</h4>
        <span>${course.credits} Credit Hours</span>
      </div>
      <div class="course-meta">
        <span class="grade-pill">${course.gradeLabel} (${course.grade.toFixed(1)})</span>
        <button class="delete-btn" onclick="deleteCourse(${course.id})">&times;</button>
      </div>
    `;

    courseList.appendChild(li);
  });

  calculateGPA();
}

// Add Course Listener
addCourseBtn.addEventListener('click', () => {
  const name = courseNameInput.value.trim();
  const credits = parseFloat(courseCreditsInput.value);
  const grade = parseFloat(courseGradeInput.value);

  const selectedOption = courseGradeInput.options[courseGradeInput.selectedIndex];
  const gradeLabel = selectedOption ? selectedOption.text.split(' ')[0] : '';

  if (!name || isNaN(credits) || isNaN(grade)) {
    alert('Please complete all course fields.');
    return;
  }

  const newCourse = {
    id: Date.now(),
    name,
    credits,
    grade,
    gradeLabel
  };

  courses.push(newCourse);
  
  // Reset Inputs
  courseNameInput.value = '';
  courseCreditsInput.selectedIndex = 0;
  courseGradeInput.selectedIndex = 0;

  renderCourses();
});

// Delete Course
window.deleteCourse = function(id) {
  courses = courses.filter(course => course.id !== id);
  renderCourses();
};

// Calculate GPA Formula
function calculateGPA() {
  let totalPoints = 0;
  let totalCredits = 0;

  courses.forEach(course => {
    totalPoints += course.credits * course.grade;
    totalCredits += course.credits;
  });

  const gpa = totalCredits === 0 ? 0 : (totalPoints / totalCredits);

  gpaDisplay.textContent = gpa.toFixed(2);
  totalCreditsDisplay.textContent = `${totalCredits} Total Credits`;
}

// Initial Render
renderCourses();