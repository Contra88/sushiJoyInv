import axios from "axios";
import { useAuthStore } from "../store/auth";

const user = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

//*func para añadir la header en cada peticion con axios
user.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export const registerUser = async (registerUser) => {
  const res = await user.post("/register", registerUser);
  console.log(res.data);
  return await res.data;
};

export const loginUser = async (loginUser) => {
  const res = await user.post("/login", loginUser);
  const results = await res.data;
  //console.log(results);
  return results;
};

export const profileRequest = async () => {
  return await user.get("/profile");
};
