/*const authForm = document.getElementById("auth-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const toggleLink = document.getElementById("toggle-link");
const toggleText = document.getElementById("toggle-text");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submitBtn");

const authContainer = document.getElementById("auth-container");
const welcomeContainer = document.getElementById("welcome-container");
const welcomeName = document.getElementById("welcome-name");
const logoutBtn = document.getElementById("logoutBtn");

let isLogin = true;

toggleLink.addEventListener("click", () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Кіру" : "Тіркелу";
  submitBtn.textContent = isLogin ? "Кіру" : "Тіркелу";
  toggleText.innerHTML = isLogin
    ? 'Тіркелгіңіз жоқ па? <a href="#" id="toggle-link">Тіркелу</a>'
    : 'Тіркелгіңіз бар ма? <a href="#" id="toggle-link">Кіру</a>';
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!username || !password) return alert("Барлық өрісті толтырыңыз");

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (isLogin) {
    // Вход
    if (!users[username]) return alert("Пайдаланушы табылмады");
    if (users[username] !== password) return alert("Құпия сөз қате");
    localStorage.setItem("loggedInUser", username);
    showWelcome(username);
  } else {
    // Регистрация
    if (users[username]) return alert("Бұл ат тіркелген");
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", username);
    showWelcome(username);
  }
});

function showWelcome(name) {
  authContainer.classList.add("hidden");
  welcomeContainer.classList.remove("hidden");
  welcomeName.textContent = name;
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  welcomeContainer.classList.add("hidden");
  authContainer.classList.remove("hidden");
});

// При загрузке
window.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("loggedInUser");
  if (user) showWelcome(user);
});
*/
const form = document.getElementById("auth-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submitBtn");
const toggleLink = document.getElementById("toggle-link");
const toggleText = document.getElementById("toggle-text");

let isLogin = true;

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Кіру" : "Тіркелу";
  submitBtn.textContent = isLogin ? "Кіру" : "Тіркелу";
  toggleText.innerHTML = isLogin
    ? 'Тіркелгіңіз жоқ па? <a href="#" id="toggle-link">Тіркелу</a>'
    : 'Тіркелгіңіз бар ма? <a href="#" id="toggle-link">Кіру</a>';
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!username || !password) {
    alert("Барлық жолдарды толтырыңыз!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (isLogin) {
    if (!users[username] || users[username] !== password) {
      alert("Қате логин немесе құпия сөз!");
    } else {
      alert("Сәтті кірдіңіз!");
      localStorage.setItem("loggedInUser", username);
      window.location.href = "index.html";
    }
  } else {
    if (users[username]) {
      alert("Бұл пайдаланушы аты бар!");
    } else {
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", username);
      alert("Сәтті тіркелдіңіз!");
      window.location.href = "auth.html";
    }
  }
}); 