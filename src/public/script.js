const API_URL = 'http://localhost:3000/api/sessions';

// Registrar usuario
async function register() {
  const firstName = document.getElementById('register-firstname').value;
  const lastName = document.getElementById('register-lastname').value;
  const email = document.getElementById('register-email').value;
  const age = document.getElementById('register-age').value;
  const password = document.getElementById('register-password').value;

  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ first_name: firstName, last_name: lastName, email, age, password })
  });

  const data = await response.json();
  alert(data.message);
}

// Iniciar sesión
async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  if (data.message === 'Login exitoso') {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('current-user').style.display = 'block';
    alert(data.message);
  } else {
    alert(data.message);
  }
}

// Ver usuario actual
async function getCurrentUser() {
  const response = await fetch(`${API_URL}/current`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${document.cookie.split('=')[1]}` }
  });

  const data = await response.json();
  document.getElementById('user-info').textContent = JSON.stringify(data, null, 2);
}
