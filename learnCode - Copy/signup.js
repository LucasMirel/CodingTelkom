const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
const msg = document.getElementById('msg');

function setError(id, text) {
  document.getElementById(id).textContent = text;
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === '') {
    setError('emailError', 'Email is required.');
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    setError('emailError', 'Enter a valid email, like name@example.com.');
    return false;
  }
  setError('emailError', '');
  return true;
}

function validateUsername() {
  const value = usernameInput.value.trim();
  if (value === '') {
    setError('usernameError', 'Username is required.');
    return false;
  } else if (value.length < 4) {
    setError('usernameError', 'Username must be at least 4 characters.');
    return false;
  } else if (!/^[A-Za-z0-9_]+$/.test(value)) {
    setError('usernameError', 'Use only letters, numbers and underscore.');
    return false;
  }
  setError('usernameError', '');
  return true;
}

function validatePassword() {
  const value = passwordInput.value;
  if (value === '') {
    setError('passwordError', 'Password is required.');
    return false;
  } else if (value.length < 8) {
    setError('passwordError', 'Password must be at least 8 characters.');
    return false;
  } else if (!/[A-Z]/.test(value)) {
    setError('passwordError', 'Add at least one capital letter.');
    return false;
  } else if (!/[0-9]/.test(value)) {
    setError('passwordError', 'Add at least one number.');
    return false;
  } else if (!/[^A-Za-z0-9]/.test(value)) {
    setError('passwordError', 'Add at least one special symbol, like ! or @.');
    return false;
  }
  setError('passwordError', '');
  return true;
}

function validateConfirm() {
  if (confirmInput.value === '') {
    setError('confirmError', 'Please confirm your password.');
    return false;
  } else if (confirmInput.value !== passwordInput.value) {
    setError('confirmError', 'Passwords do not match.');
    return false;
  }
  setError('confirmError', '');
  return true;
}

emailInput.addEventListener('blur', validateEmail);
usernameInput.addEventListener('blur', validateUsername);
passwordInput.addEventListener('blur', validatePassword);
confirmInput.addEventListener('blur', validateConfirm);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailOk = validateEmail();
  const usernameOk = validateUsername();
  const passwordOk = validatePassword();
  const confirmOk = validateConfirm();

  if (emailOk && usernameOk && passwordOk && confirmOk) {
    msg.textContent = 'Welcome, ' + usernameInput.value.trim() + '! Your account is ready.';
    msg.className = 'ok';
    setTimeout(() => { location.href = 'homePage.html'; }, 900);
  } else {
    msg.textContent = 'Please fix the errors above.';
    msg.className = 'bad';
  }
});