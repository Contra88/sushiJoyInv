import { encrypt, compare } from "../helpers/handleBcrypt.js";
import { pool } from "../database/dbConfig.js";

export const registerCtrl = async (req, res) => {
  try {
    const { password, user } = req.body;
    const passwordHash = await encrypt(password); //password co hash
    //TODO agregar a BD
    const [result] = await pool.query(
      "INSERT INTO usuarios(usuario,password)VALUES(?,?)",
      [user, passwordHash]
    );
    res.json(result[0]);
  } catch (error) {
    res.status(404).json({ mensaje: "Error al Registrarse" });
  }
};

export const loginCtrl = async (req, res) => {
  try {
    const { user, password } = req.body;
    //TODO SELECT USER BD
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE usuario=?", [
      user,
    ]);
    const bdPassword = rows[0].password;
    console.log(bdPassword);
    const checkPassword = await compare(password, bdPassword);
    if (checkPassword) {
      res.send({
        data: user,
        mensaje: "Password Valido",
      });
    } else if (!checkPassword) {
      res.status(404).send({
        error: "Invalid Password",
      });
    }
    //res.json(rows[0].password);
  } catch (error) {
    res.status(400).json({ mensaje: "Error de  Logueo" });
  }
};
