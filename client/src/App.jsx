import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormProducts from "./components/FormProducts";
import TableProducts from "./components/TableProducts";
import Landing from "./components/Landing";
import Register from "./components/Register";

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
  ]);
  return (
    <>
      <h3>Hello World</h3>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
