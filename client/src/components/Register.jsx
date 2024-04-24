import { useForm } from "react-hook-form";
//import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/registerApi";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema } from "../schemas/userSchema";

function Register() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userRegisterSchema),
  });
  const navigate = useNavigate();

  const submit = handleSubmit(async (data) => {
    try {
      const res = await registerUser(data);
      console.log(res);
      alert("Usuario Registrado");
      reset();
      navigate("/login"); //redirecciona al login
    } catch (error) {
      //este error es de axios
      alert(error.response.data.message);
      reset();
    }
  });
  return (
    <>
      <h2>Registrarse</h2>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Usuario</label>
        <input type="text" name="" id="" {...register("user")} />
        <p>{errors.user?.message}</p>
        <label htmlFor="">Contraseña</label>
        <input type="text" name="" id="" {...register("password")} />
        <p>{errors.password?.message}</p>
        <button>Registrarse</button>
      </form>
    </>
  );
}

export default Register;
