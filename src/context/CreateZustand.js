import create from "zustand";

const useZustand = create((set) => ({
  time: "",
  setTime: (value) => set(() => ({ time: value })),
}));

export default useZustand;
