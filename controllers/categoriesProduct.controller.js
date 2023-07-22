import addCategoryProduct from "../components/categoryProduct.js";
import { productService } from "../service/productService.js";

const maxNroCategories = 3;
const maxNroProducts = 6;

function uniqueValues(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array.indexOf(array[i]) !== i) array.splice(i, 1);
  }
}

function addCategory(category) {
  const categoria = document.createElement("section");
  categoria.setAttribute("class", "categoria");
  const content = `
      <div class="contenedor">
        <div class="categoria__cabecera">
          <h3 class="categoria__titulo">${category}</h3>
          <a class="categoria__enlace" href="/search-products.html?category=${category}"
            ><h6>Ver todo</h6>
            <span class="material-symbols-outlined">
              arrow_forward
            </span></a
          >
        </div>
        <div class="categoria__productos">
          
        </div>
      </div>
  `;
  categoria.innerHTML = content;
  return categoria;
}

function modificarBotonLogin() {
  const btnLogin = document.querySelector(".menu__boton__login");
  if (window.sessionStorage.getItem("user") == null) {
    btnLogin.textContent = "Login";
    btnLogin.href = "/login.html";
  } else {
    btnLogin.textContent = "Productos";
    btnLogin.href = "/products.html";
  }
}
window.addEventListener("load", async () => {
  const categorias = document.querySelector(".categorias");
  const data = await productService.listProducts();
  categorias.textContent = "";
  let categories = [];
  modificarBotonLogin();
  data.forEach((elem) => {
    categories = [elem.category, ...categories];
  });
  uniqueValues(categories);
  for (const category of categories) {
    const categoria = addCategory(category);
    const categoriaProductos = categoria.querySelector(".categoria__productos");

    let nroProducts = 1;
    data.forEach((elem) => {
      if (nroProducts <= maxNroProducts)
        if (elem.category === category) {
          const categoriaProducto = addCategoryProduct(elem);
          categoriaProductos.appendChild(categoriaProducto);
          nroProducts++;
        }
    });
    categorias.appendChild(categoria);
  }
});
