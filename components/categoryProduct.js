function addCategoryProduct({ id, link, name, price }) {
    const categoriaProducto = document.createElement("div");
    categoriaProducto.setAttribute("id", id);
    categoriaProducto.setAttribute("class", "categoria__producto");
    const content = `
          <img
            class="categoria__producto__imagen"
            src=${link}
            alt=${name}
          />
          <h4 class="categoria__producto__titulo">${name}</h4>
          <p class="categoria__producto__precio">S/ ${price}</p>
          <a class="categoria__producto__enlace" href="/description-product.html?id=${id}">Ver producto</a>
        `;
    categoriaProducto.innerHTML = content;
    return categoriaProducto;
  }

export default addCategoryProduct