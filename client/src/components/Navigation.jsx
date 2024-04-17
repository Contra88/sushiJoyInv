import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Landing Page</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;