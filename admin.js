const adminPassword = "123456top";

function isAdminAuthorized() {
  return localStorage.getItem("admin_authorized") === "true";
}

function showAdminPanel() {
  const panel = document.createElement("div");
  panel.style.position = "fixed";
  panel.style.top = "60px";
  panel.style.right = "20px";
  panel.style.background = "#222";
  panel.style.padding = "20px";
  panel.style.borderRadius = "10px";
  panel.style.zIndex = 9999;
  panel.style.color = "white";
  panel.innerHTML = `
    <h3>Admin Panel</h3>
    <input type="text" id="game-title" placeholder="Oyun Adı"/><br><br>
    <input type="text" id="game-price" placeholder="Fiyat"/><br><br>
    <input type="text" id="game-image" placeholder="Görsel URL"/><br><br>
    <button id="add-game">Ekle</button>
  `;
  document.body.appendChild(panel);

  document.getElementById("add-game").addEventListener("click", () => {
    const title = document.getElementById("game-title").value.trim();
    const price = document.getElementById("game-price").value.trim();
    const image = document.getElementById("game-image").value.trim();

    if (title && price && image) {
      let games = JSON.parse(localStorage.getItem("gamejet_games")) || [];
      games.push({ title, price, image });
      localStorage.setItem("gamejet_games", JSON.stringify(games));
      alert("Oyun eklendi!");
      location.reload();
    } else {
      alert("Tüm alanları doldurun!");
    }
  });
}

function requestPassword() {
  const pass = prompt("Admin Panel Şifresi:");
  if (pass === adminPassword) {
    localStorage.setItem("admin_authorized", "true");
    showAdminPanel();
  } else {
    alert("Şifre yanlış!");
  }
}

document.getElementById("adminBtn").addEventListener("click", () => {
  if (isAdminAuthorized()) {
    showAdminPanel();
  } else {
    requestPassword();
  }
});
