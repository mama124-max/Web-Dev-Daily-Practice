// Mock Weather Data Store
const weatherData = {
  "banjul": { name: "Banjul", condition: "Sunny & Warm", temp: "31°C", icon: "☀️", humidity: "68%", wind: "14 km/h", uv: "8 (High)" },
  "london": { name: "London", condition: "Light Rain & Overcast", temp: "16°C", icon: "🌧️", humidity: "82%", wind: "22 km/h", uv: "3 (Low)" },
  "tokyo": { name: "Tokyo", condition: "Clear Sky", temp: "24°C", icon: "🌤️", humidity: "55%", wind: "10 km/h", uv: "6 (Moderate)" },
  "new york": { name: "New York", condition: "Partly Cloudy", temp: "22°C", icon: "⛅", humidity: "60%", wind: "18 km/h", uv: "5 (Moderate)" }
};

// DOM References
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const chips = document.querySelectorAll('.chip');

const cityNameEl = document.getElementById('city-name');
const weatherDateEl = document.getElementById('weather-date');
const tempEl = document.getElementById('temperature');
const iconEl = document.getElementById('weather-icon');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const uvIndexEl = document.getElementById('uv-index');

function updateWeather(query) {
  const key = query.toLowerCase().trim();
  const data = weatherData[key];

  if (data) {
    cityNameEl.textContent = data.name;
    weatherDateEl.textContent = data.condition;
    tempEl.textContent = data.temp;
    iconEl.textContent = data.icon;
    humidityEl.textContent = data.humidity;
    windSpeedEl.textContent = data.wind;
    uvIndexEl.textContent = data.uv;
  } else {
    alert(`No weather details found for "${query}". Try Banjul, London, Tokyo, or New York.`);
  }
}

// Search Button
searchBtn.addEventListener('click', () => {
  if (cityInput.value.trim()) {
    updateWeather(cityInput.value);
    cityInput.value = '';
  }
});

// Quick Chips
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    updateWeather(chip.dataset.city);
  });
});