import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/userApi";

function Register() {
  const { register, reset, handleSubmit } = useForm();
  const mutation = useMutation({
    mutationFn: registerUser,
  });
  const submit = handleSubmit((data) => {
    mutation.mutate(data);
    reset();
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
