import { useForm } from "react-hook-form";
import { loginUser } from "../api/userApi";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
//import { profileRequest } from "../api/userApi";
//import { zodResolver } from "@hookform/resolvers/zod";
//import { userSchema } from "../schemas/userSchema";

function Login() {
  const { register, reset, handleSubmit } = useForm();
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const submit2 = handleSubmit(async (data) => {
    //*capturas datos el form haces peticion al servidor y envia data form
    //*Guardar datos de respuesta del servidor
    const res = await loginUser(data);
    // const resProfile = await profileRequest();
    console.log(res.data);

    //*Guarda el token el localstorage
    setToken(res.tokenSession);
    setProfile(res.data.usuario);
    navigate("/table");
    alert("Usuario autorizado!!");
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
