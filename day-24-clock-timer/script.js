// 1. Grab references to our HTML elements using their IDs
const clockDisplay = document.getElementById('clock-display');
const dateDisplay = document.getElementById('date-display');

// 2. Define the function that calculates and displays current time
function updateClock() {
  // Get the current snapshot of time
  const now = new Date();

  // Extract hours, minutes, and seconds, then pad them with a leading zero if needed
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Combine them into a string: "HH:MM:SS"
  clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;

  // Format today's full date string (e.g., "Wednesday, Sep 2, 2026")
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// 3. Call updateClock once immediately so the user doesn't see "00:00:00" while waiting 1 second
updateClock();

// 4. Tell JavaScript to run updateClock every 1000ms (1 second)
setInterval(updateClock, 1000);