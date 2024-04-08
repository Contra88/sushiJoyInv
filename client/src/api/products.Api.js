import axios from "axios";

const products = axios.create({
  baseURL: "http://localhost:3000",
});

//*PETICION A RUTAS
export const getProducts = async () => {
  const res = await products.get("/products");
  console.log(res.data);
  return res.data;
};

export const addProduct = async (product) => {
  const res = await products.post("/addProduct", product);
  console.log(res.data);
  return res.data;
};
