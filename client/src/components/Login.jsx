import { useForm } from "react-hook-form";
import { loginUser } from "../api/userApi";
import { useAuthStore } from "../store/auth";
//import { zodResolver } from "@hookform/resolvers/zod";
//import { userSchema } from "../schemas/userSchema";

function Login() {
  const setToken = useAuthStore((state) => state.setToken);
  const { register, reset, handleSubmit } = useForm();

  const submit2 = handleSubmit(async (data) => {
    const res = await loginUser(data);
    console.log(res.tokenSession);
    //*Guarda el token el localstorage
    setToken(res.tokenSession); //si funciona!!
    reset();
  });
  return (
    <>
      <h3>Login</h3>
      <form action="" onSubmit={submit2}>
        <label htmlFor="">Usuario</label>
        <input type="text" name="" id="" {...register("user")} />
        <label htmlFor="">Contraseña</label>
        <input type="text" name="" id="" {...register("password")} />
        <button>Entrar</button>
      </form>
      <p></p>
    </>
  );
}

export default Login;
