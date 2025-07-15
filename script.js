document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('errorMessage');

  const savedUser = JSON.parse(localStorage.getItem('user'));

  if ((savedUser && username === savedUser.username && password === savedUser.password) ||
      (username === 'admin' && password === '1234')) {
    window.location.href = 'homepage.html';
  } else {
    errorMessage.classList.remove('hidden');
  }
});
