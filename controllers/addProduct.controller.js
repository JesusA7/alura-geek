import { productService } from "../service/productService.js";

const form = document.querySelector("[data-form-product]");

window.addEventListener("load", (e) => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) return console.log(id);
  productService
    .detailProduct(id)
    .then(({ link, category, name, price, description }) => {
      document.querySelector(".formproducto__titulo").textContent =
        "Editar Producto";
      document.querySelector(".formproducto__boton").textContent =
        "Editar Producto";
      document.getElementById("link").value = link;
      document.getElementById("category").value = category;
      document.getElementById("name").value = name;
      document.getElementById("price").value = price;
      document.getElementById("description").value = description;
    })
    .catch((err) => console.log(err));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const data = Object.fromEntries(new FormData(e.target));
  if (id === null) {
    data.id = crypto.randomUUID();
    productService.createProduct(data);
    window.location.href = "/products.html";
  } else {
    productService.updateProduct(id,data)
    window.location.href = "/products.html"
  }
});
