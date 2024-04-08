import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/authController.js";

const router = Router();

//*RUTAS AUTH
//!LOGIN
router.post("/login", loginCtrl);

//!Registrar Usuario
router.post("/register", registerCtrl);

export default router;
