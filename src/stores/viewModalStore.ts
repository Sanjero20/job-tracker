import { IApplication } from "@/types";
import { create } from "zustand";

interface State {
  data: IApplication | null;
  isOpen: boolean;
  toggleModal: () => void;
  openModal: (data: IApplication) => void;
  closeModal: () => void;
}

export const useViewModal = create<State>((set) => ({
  data: null,
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  openModal: (data) => set({ isOpen: true, data }),
  closeModal: () => set({ isOpen: false, data: null }),
}));
