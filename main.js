const productList = document.getElementById("product-list");

function renderGames() {
  let games = JSON.parse(localStorage.getItem("gamejet_games")) || [];
  productList.innerHTML = "";

  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" />
      <h3>${game.title}</h3>
      <div class="price">${game.price}₺</div>
      <button class="buy-btn">Satın Al</button>
    `;
    productList.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderGames);
