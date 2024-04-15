import jwt from "jsonwebtoken";

const SECRET_KEY = "12345";

export const tokenSign = async (user) => {
  //TODO Genera el Token
  return jwt.sign(
    user,
    SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
};

export const verifyToken = (user) => {};

export const decodeSign = () => {};
