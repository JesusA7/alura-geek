import { productService } from "../service/productService.js";
import addProduct from "../components/categoryProduct.js";

function getSearchCategory() {
  const url = new URL(window.location);
  const category = url.searchParams.get("category");
  const productos = document.querySelector(".productos__productos");
  const titulo = document.querySelector(".productos__titulo");
  const subtitulo = document.querySelector(".productos__subtitulo");
  console.log(category);
  category &&
    productService
      .listProductsForCategory(category)
      .then((res) => {
        const Products = res;
        let contentSubtitulo = "";
        productos.textContent = "";
        titulo.textContent = `Categoría: ${category}`;
        subtitulo.textContent = contentSubtitulo;
        Products.forEach((product) => {
          productos.appendChild(addProduct(product));
        });
      })
      .catch((error) => console.error(error));
}

function getSearchCriteria() {
  const url = new URL(window.location);
  const criteria = url.searchParams.get("criteria");
  const productos = document.querySelector(".productos__productos");
  const titulo = document.querySelector(".productos__titulo");
  const subtitulo = document.querySelector(".productos__subtitulo");
  console.log(criteria);
  criteria &&
    productService
      .listProducts()
      .then((res) => {
        const Products = res;
        let ProductsFiltered = [];
        Products.forEach((product) => {
          if (product.name.toUpperCase().indexOf(criteria.toUpperCase()) > -1) {
            ProductsFiltered.push(product);
          }
        });
        let contentSubtitulo = "";
        switch (ProductsFiltered.length) {
          case 0:
            contentSubtitulo = "No se encontró ningún producto";
            break;
          case 1:
            contentSubtitulo = "Se encontró 1 producto";
            break;
          default:
            contentSubtitulo = `Se encontró ${ProductsFiltered.length} productos`;
        }
        productos.textContent = "";
        titulo.textContent = `Resultados de búsqueda para: ${criteria}`;
        subtitulo.textContent = contentSubtitulo;
        ProductsFiltered.forEach((product) => {
          productos.appendChild(addProduct(product));
        });
      })
      .catch((error) => console.error(error));
}
getSearchCriteria();
getSearchCategory();
