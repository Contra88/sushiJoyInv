import DataTable from "react-data-table-component";
import { useState } from "react";
import { getProducts } from "../api/products.Api";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../store/auth";
import ProtectedRoute from "../helpers/ProtectedRoute";

function Table2() {
  const { profile } = useAuthStore();
  const [total, setTotal] = useState(0);
  const { data, isLoading, error } = useQuery({
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

  {
    if (isLoading) return console.log("loading");
    if (error) return console.log(error.message);
  }

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
      <ProtectedRoute />
      <h3>table</h3>
      <p>Usuario:{profile}</p>
      <p>Total:{total}</p>
      <button onClick={sumaTotal}>Totala</button>
      <input type="text" onChange={handleChange} />
      <DataTable
        title="Productos"
        columns={columns}
        data={records}
        pagination={10}
        fixedHeader
        selectableRows
      />
    </>
  );
}

export default Table2;
