const buscador = document.querySelector("[data-button-buscador = 'primario']");
const input = document.querySelector("[data-input-buscador = 'primario']");

const buscador2 = document.querySelector(
  "[data-button-buscador = 'secundario']"
);
const input2 = document.querySelector("[data-input-buscador = 'secundario']");

buscador.addEventListener("click", () => {
  if (input.value)
    window.location.href = "/search-products.html?criteria=" + input.value;
});

buscador2.addEventListener("click", () => {
  document.querySelector(".menu__buscador__modal").classList.toggle("hide");
  console.log(window.innerWidth);
});

input2.addEventListener("keyup", (e) => {
  if (e.keyCode === 13)
    window.location.href = "/search-products.html?criteria=" + e.target.value;
});

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13)
    window.location.href = "/search-products.html?criteria=" + e.target.value;
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 640)
    document.querySelector(".menu__buscador__modal").classList.add("hide");
});
