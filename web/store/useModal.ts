import { create } from "zustand";

interface ModalProp {
  title: string;
  description?: string;
}

interface ModalState {
  modalType: string | null;
  modalProps: ModalProp | null;
  openModal: (props: ModalProp) => void;
  closeModal: () => void;
}

export const useModal = create<ModalState>((set) => ({
  modalType: null,
  modalProps: null,
  openModal: (props: ModalProp) => set({ modalProps: props }),
  closeModal: () => set({ modalProps: null }),
}));
