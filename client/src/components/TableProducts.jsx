import DataTable from "react-data-table-component";
//import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products.Api";
import { useAuthStore } from "../store/auth";
import { useEffect, useState } from "react";

//import ProtectedRoute from "../helpers/ProtectedRoute.jsx";

function TableProducts() {
  const { profile } = useAuthStore();
  //const [total, setTotal] = useState(0);
  const [datos, setData] = useState([]);

  /*const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });*/
  //console.log(data);
  useEffect(() => {
    const res = getProducts();
    setData(res);
  }, []);
  //const [records, setRecords] = useState(data);

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
  /* if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error:{error.message}</div>;
  console.log(error);*/
  //*FUNC sumaTotal
  /*const sumaTotal = () => {
    let suma = 0;
    data.forEach((e) => {
      let precioNum = parseFloat(e.precio);
      suma += precioNum;
      return setTotal(suma);
    });
  };*/

  //*FUNC FILTER
  /*const handleChange = (e) => {
    console.log(e.target.value);
    const filterRecord = data.filter((record) => {
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filterRecord);
  };*/

  return (
    <>
      <h3>Table Products</h3>
      <p>Usuario:{profile}</p>
      <p>Total:</p>
      <button>Total</button>
      <input type="text" />
      <DataTable
        columns={columns}
        data={datos}
        pagination={10}
        fixedHeader
        selectableRows
        //onSelectedRowsChange={(records) => console.log(records)}
      />
    </>
  );
}

export default TableProducts;
