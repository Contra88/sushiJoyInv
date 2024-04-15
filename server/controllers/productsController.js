import { pool } from "../database/dbConfig.js";
import jwt from "jsonwebtoken";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
    ///console.log(rows);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al traer lo datos" });
  }
};
export const addProduct = async (req, res) => {
  try {
    const { nombre, categoria, descripcion, precio } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO productos(nombre,categoria,descripcion,precio)VALUES(?,?,?,?)",
      [nombre, categoria, descripcion, precio]
    );
    let token = "";

    //*traer lo que hay en el header authorization
    const authorization = req.get("authorization");
    console.log(authorization);

    //*validar que la cabecera empieza con bearer y traer el token despues del bearer
    if (authorization && authorization.toLowerCase().startsWith("Bearer")) {
      token = authorization.split(" ");
    }

    //secret de prueba// utilizar variables de entorno
    console.log("antes del error");

    //decodificar token
    const decodeToken = {};
    try {
      //TODO CONFIG VARIABLES DE ENTORNO!! PRIMERO QUE NADA
      decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      console.log(e);
    }
    //*verificar token
    if (!decodeToken || !decodeToken.id) {
      return res.status(401).json({ error: "token missing or invalid" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al Agregar lo datos" });
  }
};
export const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM productos WHERE id=?", [id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al Traer Producto" });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM productos WHERE id=?", [id]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al Borrar Producto" });
  }
};

//TODO UPDATE PRODUCT
export const updateProduct = (req, res) => {};
