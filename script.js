
let games = [];

function addGame() {
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    if (!title || !category || !price || !image) {
        alert("Tüm alanları doldur!");
        return;
    }

    const game = { title, category, price, image };
    games.push(game);
    renderGames();
    clearInputs();
}

function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('category').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
}

function renderGames() {
    const list = document.getElementById('gameList');
    list.innerHTML = '';
    games.forEach((game, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${game.title} - ${game.category} - ${game.price} TL</span>
            <button onclick="removeGame(${index})">Sil</button>
        `;
        list.appendChild(li);
    });
}

function removeGame(index) {
    games.splice(index, 1);
    renderGames();
}
