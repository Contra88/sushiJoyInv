import DataTable from "react-data-table-component";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products.Api.js";
import { useAuthStore } from "../store/auth.jsx";
import { useState } from "react";

function TableProducts() {
  const { profile } = useAuthStore();
  const [total, setTotal] = useState(0);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [records, setRecords] = useState(data);

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
      cell: () => <button>Borrar</button>,
    },
  ];
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error.message}</div>;

  //*FUNC sumaTotal
  const sumaTotal = () => {
    let suma = 0;
    data.forEach((e) => {
      let precioNum = parseFloat(e.precio);
      suma += precioNum;
      return setTotal(suma);
    });
  };

  //*FUNC FILTER
  const handleChange = (e) => {
    console.log(e.target.value);
    const filterRecord = data.filter((record) => {
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filterRecord);
  };

  return (
    <>
      <h3>Table Products</h3>
      <p>Usuario: {profile}</p>
      <p>Total: {total}</p>
      <button onClick={sumaTotal}>Total</button>
      <input type="text" onChange={handleChange} />
      <DataTable
        title="Inventario Sushi Joy"
        columns={columns}
        data={records}
        pagination={10}
        fixedHeader
        selectableRows
        onSelectedRowsChange={(records) => console.log(records)}
      />
    </>
  );
}

export default TableProducts;
