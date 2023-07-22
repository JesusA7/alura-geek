import { validateUser } from "../service/userService.js";

const formLogin = document.querySelector("[data-form-login]");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = Object.fromEntries(new FormData(e.target));
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  validateUser(user).then((res) => {
    if (res === true) {
      window.location.href = "/products.html";
      window.sessionStorage.setItem("user", user.email);
    } else {
      const mensaje = "correo electrónico o contraseña errónea";
      email.setCustomValidity(mensaje);
      password.setCustomValidity(mensaje);
      let Elements = [email, password];
      Elements.forEach((element) => {
        element.parentElement.classList.add("entrada__mensaje--invalido");
        element.parentElement.querySelector(
          ".entrada__mensaje__error"
        ).innerHTML = mensaje;
      });
      email.setCustomValidity("");
      password.setCustomValidity("");
    }
  });
});
