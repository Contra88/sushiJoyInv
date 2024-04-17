import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  getProductsById,
} from "../controllers/productsController.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

//*RUTAS
router.get("/products", getProducts);
router.post("/addProduct", addProduct);
router.get("/products/:id", getProductsById);
router.delete("/deleteProduct/:id", deleteProduct);
export default router;
