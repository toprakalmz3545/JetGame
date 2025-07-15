// Kullanıcı veritabanı
const users = {
    "admin": "1234",
    "toprak": "almaz"
};

// Giriş fonksiyonu
document.getElementById('loginBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(users[username] && users[username] === password) {
        // Giriş başarılı animasyonu
        document.querySelector('.auth-glass').classList.add('login-success');
        setTimeout(() => {
            window.location.href = "store.html";
        }, 1500);
    } else {
        // Hata animasyonu
        document.querySelector('.auth-glass').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.auth-glass').classList.remove('shake');
        }, 500);
    }
});

// Kayıt fonksiyonu
document.getElementById('registerBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username.length < 4 || password.length < 4) {
        alert("En az 4 karakter girin!");
        return;
    }
    
    users[username] = password;
    alert("Kayıt başarılı! Giriş yapabilirsin.");
    console.log("Yeni kullanıcı:", username); // Debug
});
// auth.js'e ekle
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') {
        document.querySelector('.console-effect').innerHTML += '> Cheat Code Activated! +1000 VP<br>';
    }
});

// RGB Klavye aydınlatması efekti
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        document.documentElement.style.setProperty('--primary', `hsl(${Math.random()*360}, 100%, 50%)`);
    });
});
// auth.js'i güncelle
const gameDB = {
    users: JSON.parse(localStorage.getItem('gamejet-users')) || {},
    games: {
        "VALORANT 1000VP": { price: 239.90, discount: 15, category: "fps" },
        "FIFA 25": { price: 499.90, discount: 0, category: "sports" }
    },
    save() {
        localStorage.setItem('gamejet-users', JSON.stringify(this.users));
    }
};

// Gelişmiş kayıt fonksiyonu
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username in gameDB.users) {
        showError("Bu kullanıcı zaten var!");
        return;
    }
    
    gameDB.users[username] = {
        password: btoa(password), // Basit şifreleme
        vp: 0, // Başlangıç Valorant Points
        joinDate: new Date().toISOString()
    };
    gameDB.save();
    showSuccess("Kayıt başarılı! 100 VP bonus kazandın!");
    gameDB.users[username].vp += 100;
}