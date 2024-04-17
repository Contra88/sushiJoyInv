import express from "express";
import cors from "cors";
import router from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";
import dotnenv from "dotenv";

const app = express();

//*SERVER CONFIG
dotnenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(router); //products
app.use(authRouter); //auth

export default app;
