const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const forgotForm = document.getElementById("forgot-form");

document.getElementById("show-register").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  forgotForm.classList.remove("active");
});

document.getElementById("show-login").addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
  forgotForm.classList.remove("active");
});

document.getElementById("forgot-pass").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  registerForm.classList.remove("active");
  forgotForm.classList.add("active");
});

document.getElementById("back-to-login").addEventListener("click", (e) => {
  e.preventDefault();
  forgotForm.classList.remove("active");
  loginForm.classList.add("active");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("reg-email").value.trim();
  const pass = document.getElementById("reg-password").value;
  const confirm = document.getElementById("reg-confirm").value;
  const error = document.getElementById("register-error");

  error.textContent = "";

  if (pass !== confirm) {
    error.textContent = "Passwords do not match!";
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPass", pass);


  registerForm.reset();
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const pass = document.getElementById("login-password").value;
  const error = document.getElementById("login-error");

  const savedEmail = localStorage.getItem("userEmail");
  const savedPass = localStorage.getItem("userPass");

  error.textContent = "";

  if (email === savedEmail && pass === savedPass) {

    window.location.href = "home.html";

  } else {
    error.textContent = "Invalid email or password!";
  }
});


forgotForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("forgot-email").value.trim();
  const pass = document.getElementById("new-pass").value;
  const confirm = document.getElementById("confirm-new-pass").value;
  const error = document.getElementById("forgot-error");

  error.textContent = "";

  const savedEmail = localStorage.getItem("userEmail");

  if (email !== savedEmail) {
    error.textContent = "Email not registered!";
    return;
  }

  if (pass !== confirm) {
    error.textContent = "Passwords do not match!";
    return;
  }

  localStorage.setItem("userPass", pass);

  forgotForm.reset();
  forgotForm.classList.remove("active");
  loginForm.classList.add("active");
});
