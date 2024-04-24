import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";

function Navigation() {
  const { token } = useAuthStore();
  return (
    <div className="bg-yellow-400">
      <nav className="flex justify-between items-center ">
        <ul className="flex space-x-4">
          <li className="hover:text-red-500">
            <Link to={"/"}>Landing Page</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to={"/register"}>Register</Link>
          </li>
          <li className="hover:text-red-500">
            {!token ? (
              <Link to={"/login"}>Login</Link>
            ) : (
              <Link to={"/logout"}>Logout</Link>
            )}
          </li>
          <li className="hover:text-red-500">
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to={"/table"}>Productos</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to={"/form"}>Agregar Producto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
