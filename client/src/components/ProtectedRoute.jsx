import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ props, isAllow }) => {
  if (!isAllow) return <Navigate to="/login" />;
  return props ? <>{props}</> : <Outlet />;
};
