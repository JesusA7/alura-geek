import addCategoryProduct from "../components/categoryProduct.js";
import { productService } from "../service/productService.js";

const maxNroCategories = 3;

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
          <a class="categoria__enlace" href="#"
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

window.addEventListener("load", async () => {
  const data = await productService.listProducts();
  let categories = [];
  data.forEach((elem) => {
    categories = [elem.category, ...categories];
  });
  uniqueValues(categories);
  for (const category of categories) {
    const categorias = document.querySelector(".categorias");
    const categoria = addCategory(category);
    const categoriaProductos = categoria.querySelector(".categoria__productos");
    data.forEach((elem) => {
      if (elem.category === category) {
        const categoriaProducto = addCategoryProduct(elem);
        categoriaProductos.appendChild(categoriaProducto);
      }
    });
    categorias.appendChild(categoria);
  }
});
