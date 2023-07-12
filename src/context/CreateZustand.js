import create from "zustand";

const useZustand = create((set) => ({
  roles: localStorage.getItem("role"),
  setRoles: (value) => set(() => ({ roles: value })),
}));

export default useZustand;
