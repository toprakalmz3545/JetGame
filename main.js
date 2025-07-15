// Kullanıcı verileri
let users = JSON.parse(localStorage.getItem('users')) || [];

// Kayıt olma
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Kayıt başarılı! Giriş yapabilirsin.');
    } else {
        alert('Kullanıcı adı ve şifre girin!');
    }
}

// Giriş yapma
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'store.html';
    } else {
        alert('Hatalı giriş!');
    }
}

// Mağazada kullanıcı bilgisini göster
if (window.location.pathname.includes('store.html')) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        document.getElementById('userInfo').innerHTML = `Hoş geldin, ${currentUser}!`;
    } else {
        window.location.href = 'index.html';
    }
}