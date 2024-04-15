import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  //Capturar header authorization
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "no Autorizado1" });
  }
  const token = authHeader.split(" ")[1]; //divider token bearer

  if (!token) return res.status(401).json({ error: "no Autorizado2" });

  //Verificar Token
  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return res.status(401).json({ error: "no Autorizado3" });

    //Anadir variable al request
    req.user = user;
    console.log(req.user);
  });

  next();
};
