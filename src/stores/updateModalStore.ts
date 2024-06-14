import { create } from "zustand";
import { IApplication } from "@/types";

interface State {
  data: IApplication | null;
  isOpen: boolean;
  toggleModal: () => void;
  openModal: (values: IApplication) => void;
  closeModal: () => void;
}

export const useUpdateModal = create<State>((set) => ({
  data: null,
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  openModal: (values) => set({ isOpen: true, data: values }),
  closeModal: () => set({ isOpen: false, data: null }),
}));
