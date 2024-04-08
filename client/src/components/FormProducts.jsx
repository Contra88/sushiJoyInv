import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../api/products.Api";

function FormProducts() {
  const { register, handleSubmit } = useForm();
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      console.log("Producto Agregado");
    },
  });
  const submit = handleSubmit((data) => {
    console.log(data);
    mutation.mutate(data);
  });
  return (
    <>
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
