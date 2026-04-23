const coinsGrid = document.getElementById("coinsGrid");
const searchInput = document.getElementById("searchInput");

let coins = [];

async function fetchCoins() {
  try {
    const response = await fetch("http://localhost:3000/api/prices");
    const data = await response.json();
    coins = data;
    renderCoins(coins);
  } catch (error) {
    coinsGrid.innerHTML = `<p>Failed to load data.</p>`;
    console.error(error);
  }
}

function renderCoins(items) {
  coinsGrid.innerHTML = "";

  if (!items.length) {
    coinsGrid.innerHTML = `<p>No coins found.</p>`;
    return;
  }

  items.forEach((coin) => {
    const changeClass = coin.change24h >= 0 ? "positive" : "negative";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${coin.name}</h2>
      <div class="symbol">${coin.symbol}</div>
      <div class="price">$${coin.priceUsd}</div>
      <div class="change ${changeClass}">
        24h: ${coin.change24h}%
      </div>
    `;

    coinsGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

  const filtered = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(query) ||
      coin.symbol.toLowerCase().includes(query)
    );
  });

  renderCoins(filtered);
});

fetchCoins();
