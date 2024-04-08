import bcrypt from "bcrypt";

//TODO Encriptamos!!
export const encrypt = async (textplain) => {
  const hash = await bcrypt.hash(textplain, 10);
  return hash;
};

//TODO Comparamos!!
export const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword); //true or false
};
