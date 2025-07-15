
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const stored = localStorage.getItem("gamejetUsers");
  if (stored) {
    const users = JSON.parse(stored);
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("gamejetLoggedIn", "true");
      window.location.href = "home.html";
    } else {
      alert("Kullanıcı adı veya şifre yanlış!");
    }
  } else {
    alert("Hiç kullanıcı bulunamadı. Lütfen kayıt olun.");
  }
}

function register() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  let users = [];
  const stored = localStorage.getItem("gamejetUsers");
  if (stored) {
    users = JSON.parse(stored);
  }

  if (users.find((u) => u.username === username)) {
    alert("Bu kullanıcı adı zaten mevcut.");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("gamejetUsers", JSON.stringify(users));
  alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
  window.location.href = "index.html";
}
