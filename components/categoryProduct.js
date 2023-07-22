function addCategoryProduct({ id, link, name, price }) {
    let numero = new Number(price)
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
          <p class="categoria__producto__precio">$ ${numero.toFixed(2)}</p>
          <a class="categoria__producto__enlace" href="/description-product.html?id=${id}">Ver producto</a>
        `;
    categoriaProducto.innerHTML = content;
    return categoriaProducto;
  }

function addProduct({ id, link, name, price }) {
  let numero = new Number(price)
  const Producto = document.createElement("div");
  Producto.setAttribute("id", id);
  categoriaProducto.setAttribute("class", "productos__producto");
  const content = `
        <img
          class="productos__producto__imagen"
          src=${link}
          alt=${name}
        />
        <h4 class="productos__producto__titulo">${name}</h4>
        <p class="productos__producto__precio">$ ${numero.toFixed(2)}</p>
        <a class="productos__producto__enlace" href="/description-product.html?id=${id}">Ver producto</a>
      `;
  Producto.innerHTML = content;
  return Producto;
}

export default addCategoryProduct