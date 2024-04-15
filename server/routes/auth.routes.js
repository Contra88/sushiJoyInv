import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/authController.js";
import { profileHandler } from "../controllers/authController.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();

//*RUTAS AUTH
//!LOGIN
router.post("/login", loginCtrl);

//!Registrar Usuario
router.post("/register", registerCtrl);

router.get("/profile", requireAuth, profileHandler);

export default router;
