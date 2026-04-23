async function loadPrices() {
    const res = await fetch("http://127.0.0.1:5000/api/prices");
    const data = await res.json();

    const container = document.getElementById("prices");
    container.innerHTML = "";

    for (let coin in data) {
        container.innerHTML += `
            <div>
                <h2>${coin.toUpperCase()}</h2>
                <p>$${data[coin].usd}</p>
            </div>
        `;
    }
}

loadPrices();
