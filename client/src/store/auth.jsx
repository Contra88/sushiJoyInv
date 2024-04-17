import { create } from "zustand";
import { persist } from "zustand/middleware";

//TODO Esta funcion crea un global state
//*con el metodo persist guarda el estado en el localstorage
export const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      profile: null,
      setToken: (token) => {
        set(() => ({
          //state param
          token,
        }));
      },
      setProfile: (profile) => {
        set(() => ({ profile }));
      },
    }),
    { name: "auth" } //por defecto guarda en el localstorage
  )
);
