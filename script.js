document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  if (username === 'admin' && password === '1234') {
    window.location.href = 'homepage.html';
  } else {
    errorMessage.classList.remove('hidden');
  }
});
