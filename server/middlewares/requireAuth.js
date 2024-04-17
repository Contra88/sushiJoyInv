import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  //*Esta funcion captura y valida la authenticacion del usuario
  //Capturar header authorization
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    //valida si hay algo el la header authorization
    res.status(401).json({ error: "no Autorizado1" });
  }

  const token = authHeader.split(" ")[1]; //divider token bearer

  if (!token) return res.status(401).json({ error: "no Autorizado2" });

  //*Esta funcion verifica si el token que viene en el header coincide
  //*con el token generado en el backend
  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return res.status(401).json({ error: "no Autorizado3" });

    //Anadir variable al request
    req.user = user;
    console.log(req.user);
  });

  next();
};
