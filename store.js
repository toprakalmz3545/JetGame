// Sepet işlemleri
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(game) {
    const games = {
        'GTA5': { name: 'GTA 5 Premium', price: 499.90 },
        'RDR2': { name: 'RDR2 Gold', price: 399.90 },
        'FC25': { name: 'EA FC 25 Ultimate', price: 599.90 }
    };

    cart.push(games[game]);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Bildirim göster
    showNotification(`${games[game].name} sepete eklendi!`);
}

// Kullanıcı bilgilerini yükle
function loadUser() {
    const user = localStorage.getItem('currentUser');
    if(user) {
        document.getElementById('usernameDisplay').textContent = user;
    } else {
        window.location.href = 'index.html';
    }
}

// Çıkış yap
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    loadUser();
});