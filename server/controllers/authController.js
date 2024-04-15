import { encrypt, compare } from "../helpers/handleBcrypt.js";
import { pool } from "../database/dbConfig.js";
import { tokenSign } from "../helpers/generateToken.js";

export const registerCtrl = async (req, res) => {
  try {
    const { password, user } = req.body;
    const passwordHash = await encrypt(password); //password co hash
    //TODO agregar a BD
    const [result] = await pool.query(
      "INSERT INTO usuarios(usuario,password)VALUES(?,?)",
      [user, passwordHash]
    );
    console.log(result);
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

    console.log(rows[0]);
    //comparar password
    const checkPassword = await compare(password, bdPassword); //return boolean

    //Generar Token
    const usuario = rows[0];
    const tokenSession = await tokenSign(usuario);
    //console.log(usuario);
    console.log(tokenSession);
    if (checkPassword) {
      res.json({
        data: rows[0],
        tokenSession,
        mensaje: "Password Valido",
      });
      return;
    } else if (!checkPassword) {
      res.status(404).send({
        error: "Invalid Password",
      });
    }
    //res.json(rows[0].password);
  } catch (error) {
    res.status(400).json({ mensaje: "Error de  Logueo..." });
  }
};

export const profileHandler = (req, res) => {
  return res.json({
    profile: {
      username: req.user,
    },
    mensaje: "Profile data",
  });
};
