function scrollToSection(id) {
const section = document.getElementById(id);
if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
}
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
e.preventDefault();
alert('Message sent successfully!');
this.reset();
});

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const loginContainer = document.getElementById('login-container');
  const logoutBtn = document.getElementById('logout-btn');
  const mainContent = document.getElementById('main-content');
  const loginMessage = document.getElementById('login-message');

  const USER = 'ADMIN';
  const PASS = '030721';

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === USER && password === PASS) {
      loginContainer.style.display = 'none';
      mainContent.style.display = 'block';
      logoutBtn.style.display = 'block';
    } else {
      loginMessage.textContent = 'Invalid username or password';
      loginMessage.style.color = 'red';
    }
  });

 logoutBtn.addEventListener('click', function () {
  mainContent.style.display = 'none';
  logoutBtn.style.display = 'none';

  // Restore original flex layout and centering
  loginContainer.style.display = 'flex';
  loginContainer.style.justifyContent = 'center';
  loginContainer.style.alignItems = 'center';
  loginContainer.style.height = '100vh';

  loginForm.reset();
  loginMessage.textContent = '';
});

if (username === USER && password === PASS) {
  loginContainer.removeAttribute('style'); // reset styles
  loginContainer.style.display = 'none';
  mainContent.style.display = 'block';
  logoutBtn.style.display = 'block';
}
});
