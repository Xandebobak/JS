function finishForm() {
  const form = document.querySelector(".login-form");
  const loginInput = document.createElement("input");
  loginInput.setAttribute("type", "text");
  loginInput.setAttribute("name", "login");
  form.insertBefore(loginInput, form.firstChild);
  const passwordInput = document.querySelector('input[name="password"]');
  passwordInput.setAttribute("type", "password");
}

export { finishForm };
