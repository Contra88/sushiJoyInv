import express from "express";
import cors from "cors";
import router from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

//*SERVER CONFIG
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);
app.use(router); //products
app.use(authRouter); //auth

export default app;
