import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../api/products.Api";
import { productSchema } from "../schemas/productsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../store/auth";

function FormProducts() {
  const { profile } = useAuthStore();
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(productSchema),
  });
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      console.log("Producto Agregado");
    },
  });
  const submit = handleSubmit((data) => {
    console.log(data);
    mutation.mutate(data);
    alert("Producto Guardado");
    reset();
  });
  return (
    <>
      <p>Usuario: {profile}</p>
      <h3>Form Products</h3>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Nombre Art</label>
        <input type="text" name="" id="" {...register("nombre")} />
        <label htmlFor="">Categoria</label>
        <input type="text" name="" id="" {...register("categoria")} />
        <label htmlFor="">Descripcion</label>
        <input type="text" name="" id="" {...register("descripcion")} />
        <label htmlFor="">Precio</label>
        <input type="text" name="" id="" {...register("precio")} />
        <button>Guardar</button>
      </form>
    </>
  );
}

export default FormProducts;
