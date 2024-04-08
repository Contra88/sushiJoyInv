import React from "react";
import DataTable from "react-data-table-component";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products.Api.js";

function TableProducts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "NOMBRE",
      selector: (row) => row.nombre,
    },
    {
      name: "CATEGORIA",
      selector: (row) => row.categoria,
    },
    {
      name: "DESCRIPCION",
      selector: (row) => row.descripcion,
    },
    {
      name: "PRECIO",
      selector: (row) => row.precio,
    },
    {
      name: "ACTIONS",
      selector: (row) => <button>Editar</button>,
    },
  ];
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error.message}</div>;
  return (
    <>
      <h3>Table Products</h3>
      <DataTable columns={columns} data={data} pagination={10} />
    </>
  );
}

export default TableProducts;
