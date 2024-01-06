import { create } from "zustand";

const useModal = create((set) => ({
  isModalOpen: false,
  showModal: () => set(true),
  closeModal: () => set(false),
}));

export default useModal;
