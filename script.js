document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "login.html") {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      const saved = JSON.parse(localStorage.getItem("users") || "[]");
      const found = saved.find(user => user.username === username && user.password === password);
      if (found) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Hatalı giriş.");
      }
    });
  }

  if (currentPage === "register.html") {
    document.getElementById("registerForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("registerUsername").value;
      const password = document.getElementById("registerPassword").value;
      const saved = JSON.parse(localStorage.getItem("users") || "[]");
      saved.push({ username, password });
      localStorage.setItem("users", JSON.stringify(saved));
      alert("Kayıt başarılı!");
      window.location.href = "index.html";
    });
  }

  if (currentPage === "index.html") {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "login.html";
    }

    const adminBtn = document.getElementById("adminBtn");
    adminBtn.addEventListener("click", () => {
      const pass = prompt("Admin şifresi?");
      if (pass === "123456top") {
        alert("Admin paneli aktif!");
        // Burada admin paneli açılacak
      } else {
        alert("Şifre yanlış.");
      }
    });

    const footer = document.getElementById("footer");
    footer.innerText = "Bir Toprak Almaz Ürünüdür";
  }
});
