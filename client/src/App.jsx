import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormProducts from "./components/FormProducts";
import TableProducts from "./components/TableProducts";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/form",
      element: <FormProducts />,
    },
    {
      path: "/table",
      element: <TableProducts />,
    },
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
