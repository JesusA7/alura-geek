import { productService } from "../service/productService.js";

function addProduct(id, name, price, category, link) {
  const producto = document.createElement("div");
  producto.setAttribute("id", id);
  producto.classList.add("productos__producto");
  const contenido = `
        <img
        class="productos__producto__imagen"
        src=${link}
        alt=${name}
        />
        <h4 class="productos__producto__titulo">${name}</h4>
        <p class="productos__producto__precio">S/ ${price}</p>
        <a class="productos__producto__categoria" href="#">${category}</a>
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
    // e.preventDefault();
    productService.deleteProduct(id);
  });

  return producto;
}

async function listProducts() {
  const data = await productService.listProducts();
  const productos = document.querySelector(".productos__productos");
  data.forEach(({ id, name, price, category, link }) => {
    console.log("añadir");
    productos.appendChild(addProduct(id, name, price, category, link));
  });
}

listProducts();
