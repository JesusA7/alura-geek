import { productService } from "../service/productService.js";
import addCategoryProduct from "../components/categoryProduct.js";

window.addEventListener("load", (e) => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const descripcionIzquierda = document.querySelector(
    ".descripcion__izquierda"
  );
  const categoriaProductos = document.querySelector(".categoria__productos");
  descripcionIzquierda.textContent = "Cargando...";
  categoriaProductos.textContent = "Cargando...";
  productService
    .detailProduct(id)
    .then(({ link, name, price, description, category }) => {
      let numero = new Number(price);
      const descripcionContenedor = document.querySelector(
        ".descripcion__contenedor"
      );

      const descripcionImagen = document.createElement("img");
      const descripcionTitulo = document.createElement("h2");
      const descripcionPrecio = document.createElement("h3");
      const descripcionDescripcion = document.createElement("p");

      descripcionImagen.setAttribute("class", "descripcion__imagen");
      descripcionTitulo.setAttribute("class", "descripcion__titulo");
      descripcionPrecio.setAttribute("class", "descripcion__precio");
      descripcionDescripcion.setAttribute("class", "descripcion__descripcion");

      descripcionImagen.setAttribute("src", link);
      descripcionImagen.setAttribute("alt", name);
      descripcionTitulo.textContent = name;
      descripcionPrecio.textContent = "$ " + numero.toFixed(2);
      descripcionDescripcion.textContent = description;

      descripcionIzquierda.textContent = "";
      descripcionIzquierda.append(descripcionImagen);
      descripcionContenedor.appendChild(descripcionTitulo);
      descripcionContenedor.appendChild(descripcionPrecio);
      descripcionContenedor.appendChild(descripcionDescripcion);

      productService.listProductsForCategory(category).then((data) => {
        categoriaProductos.textContent = "";
        let nroProducts = 0;
        data.forEach((elem) => {
          if (nroProducts < 6) {
            if (elem.id != id) {
              const categoriaProducto = addCategoryProduct(elem);
              categoriaProductos.appendChild(categoriaProducto);
              nroProducts++;
            }
          }
        });
      });
    });
});
