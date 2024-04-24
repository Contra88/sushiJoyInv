import { useForm } from "react-hook-form";
import { loginUser } from "../api/userApi";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../schemas/userSchema";
//import { profileRequest } from "../api/userApi";

function Login() {
  //TODO MANEJAR ERR DE VALID Y MOSTRAR AL USER
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
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
    alert("Usuario autorizado!!");
    reset();
    navigate("/profile");
  });
  return (
    <>
      <h3>Login</h3>
      <div className="max-w-md mx-auto mt-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action=""
          onSubmit={submit2}
        >
          <label
            htmlFor=""
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Usuario
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name=""
            id=""
            {...register("user")}
          />
          <p className=" text-gray-700 text-sm font-bold">
            {errors.user?.message}
          </p>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor=""
          >
            Contraseña
          </label>
          <input
            type="text"
            name=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            {...register("password")}
          />
          <p className=" text-gray-700 text-sm font-bold">
            {errors.password?.message}
          </p>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-between">
            Entrar
          </button>
        </form>
      </div>
      <p></p>
    </>
  );
}

export default Login;
