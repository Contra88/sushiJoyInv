import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      setToken: (token) => {
        set(() => ({
          //state param
          token,
        }));
      },
    }),
    { name: "auth" }
  )
);

//TODO HACER PRIMERO!! RECIBIR TOKEN DEL BACK Y GUARDARLO EN UN STATE GLOBAL EN ZUSTAND!!
