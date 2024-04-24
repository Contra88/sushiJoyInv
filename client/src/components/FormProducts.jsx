import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../api/products.Api";
import { productSchema } from "../schemas/productsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../store/auth";
import ProtectedRoute from "../helpers/ProtectedRoute";

function FormProducts() {
  const { profile } = useAuthStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      console.log("Producto Agregado");
    },
  });

  const submit = handleSubmit(async (data) => {
    console.log(data);
    mutation.mutate(data);
    //const datos = await addProduct(data);

    alert("Producto Guardado");
    reset();
  });
  return (
    <>
      <ProtectedRoute />
      <p>Usuario: {profile}</p>
      <h3>Form Products</h3>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Nombre Art</label>
        <input type="text" name="" id="" {...register("nombre")} />
        <p>{errors.nombre?.message}</p>
        <label htmlFor="">Categoria</label>
        <input type="text" name="" id="" {...register("categoria")} />
        <p>{errors.categoria?.message}</p>
        <label htmlFor="">Descripcion</label>
        <input type="text" name="" id="" {...register("descripcion")} />
        <p>{errors.descripcion?.message}</p>
        <label htmlFor="">Precio</label>
        <input type="text" name="" id="" {...register("precio")} />
        <p>{errors.precio?.message}</p>
        <button>Guardar</button>
      </form>
    </>
  );
}

export default FormProducts;
