import axios from "axios";

const user = axios.create({
  baseURL: "http://localhost:3000",
});

export const registerUser = async (registerUser) => {
  const res = await user.get("/register", registerUser);
  console.log(res.data);
  return res.data;
};
