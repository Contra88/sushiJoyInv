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
      <div className="relative">
        <img src="./public/usuario.png" className="w-16 h-auto" alt="" />
        <h3 className="bold text-left text-2xl"> {profile}</h3>
      </div>
      <h3>Form Products</h3>
      <div className="flex justify-center items-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action=""
          onSubmit={submit}
        >
          <label
            htmlFor=""
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre Art
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            {...register("nombre")}
          />
          <p className="text-gray-700 text-sm font-bold">
            {errors.nombre?.message}
          </p>
          <label
            htmlFor=""
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Categoria
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            {...register("categoria")}
          />
          <p className="text-gray-700 text-sm font-bold">
            {errors.categoria?.message}
          </p>
          <label
            htmlFor=""
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descripcion
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            {...register("descripcion")}
          />
          <p className="text-gray-700 text-sm font-bold">
            {errors.descripcion?.message}
          </p>
          <label
            htmlFor=""
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Precio
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            {...register("precio")}
          />
          <p className="text-gray-700 text-sm font-bold">
            {errors.precio?.message}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-between mt-3">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

export default FormProducts;
