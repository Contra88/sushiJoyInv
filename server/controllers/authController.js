import { encrypt, compare } from "../helpers/handleBcrypt.js";
import { pool } from "../database/dbConfig.js";
import { tokenSign } from "../helpers/generateToken.js";

export const registerCtrl = async (req, res) => {
  //*Capturar datos body
  const { password, user } = req.body;
  try {
    //*VALIDAR E UMPEDIR USUARIOS DUPLICADOS
    const [rows] = await pool.query(
      "SELECT usuario FROM usuarios WHERE usuario=?",
      [user]
    );
    const bdUser = rows[0];

    if (bdUser == undefined) {
      try {
        //*SI EL USUARIO ES VALIDO CREA USUARIO
        const passwordHash = await encrypt(password); //password co hash
        const [result] = await pool.query(
          "INSERT INTO usuarios(usuario,password)VALUES(?,?)",
          [user, passwordHash]
        );

        res.json(result[0]);
      } catch (error) {
        res.status(404).json({ mensaje: "Error al Registrarse" });
      }
    } else if (user == bdUser.usuario) {
      res.status(409).json({ message: "El usuario ya existe!" });
    }
  } catch (error) {
    res.status(409).json({ message: `Error ${error}` });
  }
};

export const loginCtrl = async (req, res) => {
  try {
    //*Esta func valida los datos con la dbb y genera el token
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
