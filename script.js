
function showRegister() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
}

function showLogin() {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

function register() {
    const user = document.getElementById("new-username").value;
    const pass = document.getElementById("new-password").value;
    localStorage.setItem("user_" + user, pass);
    alert("Kayıt başarılı!");
    showLogin();
}

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const savedPass = localStorage.getItem("user_" + user);
    if (savedPass === pass) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-page").style.display = "block";
        loadGames();
    } else {
        alert("Hatalı giriş!");
    }
}

function loadGames() {
    const container = document.getElementById("games-container");
    container.innerHTML = "";
    const games = JSON.parse(localStorage.getItem("games") || "[]");
    games.forEach((g, i) => {
        const box = document.createElement("div");
        box.className = "game-box";
        box.innerHTML = `<img src="${g.image}" width="100%"><h3>${g.title}</h3><p>${g.price} TL</p>`;
        container.appendChild(box);
    });
}

function showAdminPanel() {
    const password = prompt("Admin şifresi?");
    if (password === "123456top") {
        document.getElementById("admin-panel").style.display = "block";
        loadAdminGames();
    } else {
        alert("Hatalı şifre!");
    }
}

function closeAdminPanel() {
    document.getElementById("admin-panel").style.display = "none";
}

function addGame() {
    const title = document.getElementById("game-title").value;
    const price = document.getElementById("game-price").value;
    const image = document.getElementById("game-image").value;
    let games = JSON.parse(localStorage.getItem("games") || "[]");
    games.push({ title, price, image });
    localStorage.setItem("games", JSON.stringify(games));
    alert("Oyun eklendi!");
    loadGames();
    loadAdminGames();
}

function loadAdminGames() {
    const games = JSON.parse(localStorage.getItem("games") || "[]");
    const list = document.getElementById("admin-games-list");
    list.innerHTML = "";
    games.forEach((g, i) => {
        const div = document.createElement("div");
        div.innerText = `${g.title} - ${g.price} TL`;
        list.appendChild(div);
    });
}
