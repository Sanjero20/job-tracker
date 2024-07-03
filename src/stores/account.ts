import { create } from "zustand";

interface States {
  name: string;
  email: string;
  setInfo: (name: string, email: "") => void;
  clearInfo: () => void;
}

export const useAccount = create<States>((set) => ({
  name: "",
  email: "",
  setInfo: (name, email) => set({ name, email }),
  clearInfo: () => set({ name: "", email: "" }),
}));
