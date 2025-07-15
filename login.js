function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  if (username && password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Kayıt başarılı! Giriş yapabilirsiniz.");
    window.location.href = "index.html";
  } else {
    alert("Lütfen tüm alanları doldurun.");
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (username === savedUsername && password === savedPassword) {
    alert("Giriş başarılı!");
    window.location.href = "home.html";
  } else {
    alert("Hatalı kullanıcı adı veya şifre!");
  }
}
