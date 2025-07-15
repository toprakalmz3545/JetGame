
const PASSWORD = "123456top";

function checkPassword() {
  const input = document.getElementById("adminPass").value;
  if (input === PASSWORD) {
    localStorage.setItem("isAdmin", "true");
    document.getElementById("loginPanel").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    loadGames();
  } else {
    alert("Hatalı şifre!");
  }
}

function addGame() {
  const name = document.getElementById("gameName").value;
  const category = document.getElementById("gameCategory").value;
  const price = document.getElementById("gamePrice").value;
  const image = document.getElementById("gameImage").value;

  let games = JSON.parse(localStorage.getItem("games")) || [];
  games.push({ name, category, price, image });
  localStorage.setItem("games", JSON.stringify(games));
  loadGames();
}

function loadGames() {
  const gameList = document.getElementById("gameList");
  gameList.innerHTML = "";
  const games = JSON.parse(localStorage.getItem("games")) || [];
  games.forEach((game, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${game.name}</strong> - ${game.category} - ${game.price} TL
    <button onclick="deleteGame(${index})">Sil</button>`;
    gameList.appendChild(div);
  });
}

function deleteGame(index) {
  let games = JSON.parse(localStorage.getItem("games")) || [];
  games.splice(index, 1);
  localStorage.setItem("games", JSON.stringify(games));
  loadGames();
}

// Sayfa yüklendiğinde admin girişi varsa göster
window.onload = function () {
  if (localStorage.getItem("isAdmin") === "true") {
    document.getElementById("loginPanel").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    loadGames();
  }
}
