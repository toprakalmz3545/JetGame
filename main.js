// Kullanıcı giriş fonksiyonu
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Basit kontrol
    if(username === "" || password === "") {
        alert("Kullanıcı adı ve şifre girin!");
        return;
    }
    
    // LocalStorage'a kaydet
    localStorage.setItem("currentUser", username);
    window.location.href = "store.html";
}

// Çıkış fonksiyonu
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

// Sayfa yüklendiğinde kullanıcı kontrolü
document.addEventListener("DOMContentLoaded", function() {
    const loggedInUser = localStorage.getItem("currentUser");
    if(loggedInUser) {
        document.getElementById("loggedInUser").textContent = loggedInUser;
    }
});