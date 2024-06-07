import { create } from "zustand";

interface State {
  isOpen: boolean;
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useAddModalStore = create<State>((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
