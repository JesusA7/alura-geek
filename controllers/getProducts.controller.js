import { productService } from "../service/productService.js";

function addProduct(id, name, price, category, link) {
  const producto = document.createElement("div");
  const number = new Number(price);
  producto.setAttribute("id", id);
  producto.classList.add("productos__producto");
  const contenido = `
        <img
        class="productos__producto__imagen"
        src=${link}
        alt=${name}
        />
        <h4 class="productos__producto__titulo">${name}</h4>
        <p class="productos__producto__precio">$ ${number.toFixed(2)}</p>
        <p class="productos__producto__categoria">${category}</p>
        <a href="#" class="productos__producto--eliminar icono" data-product-delete>
        <img src="assets/delete_black_24dp.svg" alt="icono eliminar"
        /></a>
        <a href="/form-product.html?id=${id}" class="productos__producto--editar icono"
        ><img src="assets/edit_black_24dp.svg" alt="icono editar"
        /></a>
    `;
  producto.innerHTML = contenido;
  const eliminar = producto.querySelector("[data-product-delete]");
  eliminar.addEventListener("click", (e) => {
    e.preventDefault();
    productService.deleteProduct(id);
    producto.remove();
  });

  return producto;
}

async function listProducts() {
  if (window.sessionStorage.getItem("user") !== null) {
    const data = await productService.listProducts();
    const productos = document.querySelector(".productos__productos");
    productos.textContent = "";
    data.forEach(({ id, name, price, category, link }) => {
      productos.appendChild(addProduct(id, name, price, category, link));
    });
  } else {
    window.location.href = "/login.html";
  }
}

listProducts();
