import { useAuthStore } from "../store/auth";
import { Navigate } from "react-router-dom";

function Logout() {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);

  setToken(null);
  setProfile(null);
  localStorage.clear();

  return <Navigate to="/" />;
}

export default Logout;
