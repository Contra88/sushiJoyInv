import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

function ProtectedRoute() {
  const { token } = useAuthStore();
  if (!token) {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
