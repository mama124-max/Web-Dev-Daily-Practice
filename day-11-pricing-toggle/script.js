function togglePricing() {
  const toggle = document.getElementById('pricing-toggle');
  const labelSolo = document.getElementById('label-solo');
  const labelDuo = document.getElementById('label-duo');

  const priceEssential = document.getElementById('price-essential');
  const priceSignature = document.getElementById('price-signature');
  const priceUltimate = document.getElementById('price-ultimate');

  if (toggle.checked) {
    // Duo / Group Rates
    labelDuo.classList.add('active');
    labelSolo.classList.remove('active');

    priceEssential.textContent = '1,200';
    priceSignature.textContent = '1,800';
    priceUltimate.textContent = '2,800';
  } else {
    // Solo Rates
    labelSolo.classList.add('active');
    labelDuo.classList.remove('active');

    priceEssential.textContent = '800';
    priceSignature.textContent = '1,200';
    priceUltimate.textContent = '2,000';
  }
}