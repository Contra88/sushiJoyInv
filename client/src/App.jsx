import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormProducts from "./components/FormProducts";
//import TableProducts from "./components/TableProducts";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ErrorRoute from "./components/ErrorRoute";
import Logout from "./components/Logout";
import Table2 from "./components/Table2";
import CardVenta from "./components/cardVenta";

function App() {
  const router = createBrowserRouter([
    {
      path: "/form",
      element: <FormProducts />,
    },
    {
      path: "/table",
      element: <Table2 />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/",
      element: <Landing />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/ventas",
      element: <CardVenta />,
    },
  ]);
  return (
    <div className="bg-slate-800 text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
