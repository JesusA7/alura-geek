import { productService } from "../service/productService.js";
import addCategoryProduct from "../components/categoryProduct.js";

window.addEventListener('load',(e)=>{
    const url = new URL(window.location)
    const id = url.searchParams.get("id")
    console.log(id)
    productService.detailProduct(id).then(({link,name,price,description,category})=>{
        const descripcionImagen = document.querySelector(".descripcion__imagen")
        const descripcionTitulo = document.querySelector(".descripcion__titulo")
        const descripcionPrecio = document.querySelector(".descripcion__precio")
        const descripcionDescripcion = document.querySelector(".descripcion__descripcion")
        descripcionImagen.setAttribute("src",link)
        descripcionImagen.setAttribute("alt",name)
        descripcionTitulo.textContent = name
        descripcionPrecio.textContent = "S/ " + price
        descripcionDescripcion.textContent = description
        
        productService.listProductsForCategory(category).then((data)=>{
            const categoriaProductos = document.querySelector(".categoria__productos")
            data.forEach((elem)=>{
                if(elem.id!=id)
                {const categoriaProducto = addCategoryProduct(elem)
                categoriaProductos.appendChild(categoriaProducto)}
            })
        })
    })
})