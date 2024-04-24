import { useAuthStore } from "../store/auth";
import { profileRequest } from "../api/userApi";
import { useEffect } from "react";
import Navigation from "./Navigation";
import ProtectedRoute from "../helpers/ProtectedRoute";
import { Navigate } from "react-router-dom";

function Profile() {
  const { profile } = useAuthStore();

  useEffect(() => {
    //traer data del perfil
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await profileRequest();
      console.log(res);
    } catch (error) {
      const axiosError = JSON.parse(error.request.response);
      //console.log(axiosError.error);
      //alert(axiosError.error);
      axiosError ? <Navigate to="/" /> : <Navigate to="/profile" />;
    }
  };

  return (
    <>
      <ProtectedRoute />
      <Navigation />
      <h3>Usuario: {profile}</h3>
    </>
  );
}
export default Profile;
