// 1. Select elements from HTML using their IDs
var toggle = document.getElementById("pricing-toggle");
var priceStarter = document.getElementById("price-starter");
var pricePro = document.getElementById("price-pro");
var periodStarter = document.getElementById("period-starter");
var periodPro = document.getElementById("period-pro");

// 2. Listen for clicks on the toggle checkbox
toggle.addEventListener("change", function() {
  if (toggle.checked) {
    // If switch is ON -> Show Yearly Prices
    priceStarter.textContent = "120";
    pricePro.textContent = "290";
    periodStarter.textContent = "/year";
    periodPro.textContent = "/year";
  } else {
    // If switch is OFF -> Show Monthly Prices
    priceStarter.textContent = "12";
    pricePro.textContent = "29";
    periodStarter.textContent = "/month";
    periodPro.textContent = "/month";
  }
});