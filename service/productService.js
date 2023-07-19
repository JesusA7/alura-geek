const URL = "https://alura-geek-red.vercel.app/products";

const listProducts = async () => {
  const res = await fetch(URL);

  return res.json();
};

const listProductsForCategory = async (category) => {
  const res = await fetch(URL + "?category=" + category);

  return res.json();
};
const detailProduct = async (id) => {
  const res = await fetch(URL + "/" + id);
  
  return res.json();
};

const createProduct = async (data) => {
  try {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (id) => {
  await fetch(URL + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const updateProduct = async (id, data) => {
  await fetch(URL + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const productService = {
  listProducts,
  listProductsForCategory,
  deleteProduct,
  createProduct,
  updateProduct,
  detailProduct,
};
