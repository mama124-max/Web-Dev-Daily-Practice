const slider = document.getElementById('slider-input');
const beforeWrapper = document.getElementById('before-wrapper');
const handle = document.getElementById('slider-handle');
const beforeImg = beforeWrapper.querySelector('img');
const container = document.getElementById('comparison-slider');

function updateSlider() {
  const value = slider.value;
  
  // Update width of the "before" image wrapper
  beforeWrapper.style.width = `${value}%`;
  
  // Move the handle
  handle.style.left = `${value}%`;
  
  // Keep the inner image size matched to full container width
  beforeImg.style.width = `${container.offsetWidth}px`;
}

// Update on slider movement
slider.addEventListener('input', updateSlider);

// Keep image properly sized on window resize
window.addEventListener('resize', updateSlider);

// Run initial alignment
updateSlider();