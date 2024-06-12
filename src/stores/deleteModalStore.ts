import { create } from "zustand";

interface State {
  application_id: number | null;
  isOpen: boolean;
  toggleModal: () => void;
  openModal: (id: number) => void;
  closeModal: () => void;
}

export const useDeleteModal = create<State>((set) => ({
  application_id: null,
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  openModal: (id) => set({ isOpen: true, application_id: id }),
  closeModal: () => set({ isOpen: false, application_id: null }),
}));
