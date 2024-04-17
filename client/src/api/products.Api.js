import axios from "axios";
//import { useAuthStore } from "../store/auth";

const products = axios.create({
  baseURL: "http://localhost:3000",
  //withCredentials: true,
});

//*Confih Header Authorization
/*products.interceptors.request.use((config) => {
  const token = useAuthStore().getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
});*/

//*PETICION A RUTAS
export const getProducts = async () => {
  const res = await products.get("/products");
  return res.data;
};

export const addProduct = async (product) => {
  const res = await products.post("/addProduct", product);
  console.log(res.data);
  return res.data;
};
