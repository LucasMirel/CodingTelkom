document.getElementById('createBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('msg');

  if (email === '' || user === '' || pass === '') {
    msg.textContent = 'Please fill in every field.';
    msg.style.color = 'red';
  } else if (pass.length < 8) {
    msg.textContent = 'Password must be at least 8 characters.';
    msg.style.color = 'red';
  } else if (!/[A-Z]/.test(pass)) {
    msg.textContent = 'Password needs at least one capital letter.';
    msg.style.color = 'red';
  } else if (!/[0-9]/.test(pass)) {
    msg.textContent = 'Password needs at least one number.';
    msg.style.color = 'red';
  } else if (!/[^A-Za-z0-9]/.test(pass)) {
    msg.textContent = 'Password needs at least one special symbol.';
    msg.style.color = 'red';
  } else {
    msg.textContent = 'Welcome, ' + user + '! Your account is ready.';
    msg.style.color = 'green';
    setTimeout(() => { location.href = 'home.html'; }, 900);
  }
});