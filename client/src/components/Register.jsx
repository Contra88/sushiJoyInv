import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: registerUser,
  });
  const submit = handleSubmit(async (data) => {
    mutation.mutate(data);
    alert("Usuario Registrado");
    reset();
    navigate("/login"); //redirecciona al login
  });
  return (
    <>
      <h2>Registrarse</h2>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Usuario</label>
        <input type="text" name="" id="" {...register("user")} />
        <label htmlFor="">Contraseña</label>
        <input type="text" name="" id="" {...register("password")} />
        <button>Registrarse</button>
      </form>
    </>
  );
}

export default Register;
