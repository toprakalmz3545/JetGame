
document.addEventListener("DOMContentLoaded", function() {
    const isAdmin = localStorage.getItem("admin") === "true";
    const adminPanel = document.getElementById("adminPanel");
    const toggleButton = document.getElementById("adminToggle");
    const gameContainer = document.getElementById("gameContainer");

    toggleButton.addEventListener("click", () => {
        if (!isAdmin) {
            const password = prompt("Admin şifresini girin:");
            if (password === "123456top") {
                localStorage.setItem("admin", "true");
                location.reload();
            } else {
                alert("Yanlış şifre!");
                return;
            }
        }
        adminPanel.style.display = adminPanel.style.display === "block" ? "none" : "block";
    });

    function renderGames() {
        const games = JSON.parse(localStorage.getItem("games") || "[]");
        gameContainer.innerHTML = "";
        games.forEach((game, index) => {
            const div = document.createElement("div");
            div.className = "gameBox";
            div.innerHTML = \`
                <img src="\${game.image}" alt="">
                <h3>\${game.name}</h3>
                <p>\${game.price} TL</p>
                \${isAdmin ? '<button onclick="removeGame(' + index + ')">Sil</button>' : '<button>Satın Al</button>'}
            \`;
            gameContainer.appendChild(div);
        });
    }

    renderGames();
    window.removeGame = function(index) {
        const games = JSON.parse(localStorage.getItem("games") || "[]");
        games.splice(index, 1);
        localStorage.setItem("games", JSON.stringify(games));
        renderGames();
    };

    window.addGame = function() {
        const name = document.getElementById("gameName").value;
        const price = document.getElementById("gamePrice").value;
        const image = document.getElementById("gameImage").value;
        if (name && price && image) {
            const games = JSON.parse(localStorage.getItem("games") || "[]");
            games.push({ name, price, image });
            localStorage.setItem("games", JSON.stringify(games));
            renderGames();
        }
    };
});
