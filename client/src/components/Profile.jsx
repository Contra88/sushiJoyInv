import { useAuthStore } from "../store/auth";
function Profile() {
  const { profile } = useAuthStore();
  return (
    <>
      <h3>Usuario: {profile}</h3>
    </>
  );
}

export default Profile;
