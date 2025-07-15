// Basit giriş/kayıt fonksiyonları
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username === "" || password === "") {
        alert("Kullanıcı adı ve şifre girin!");
        return;
    }
    
    alert("Giriş başarılı! Yönlendiriliyorsunuz...");
    // Mağaza sayfasına yönlendirme:
    // window.location.href = "store.html";
}

function register() {
    alert("Kayıt işlemi başlatıldı!");
    // Kayıt işlemleri buraya
}