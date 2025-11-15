import { create } from "zustand";

type AuthModalState = {
  isAuthModalOpen: boolean;
};

interface AuthModalAction {
  setIsAuthModalOpen: (
    isAuthModalOpen: AuthModalState["isAuthModalOpen"]
  ) => void;
}

export const useAuthModalStore = create<AuthModalState & AuthModalAction>(
  (set) => ({
    isAuthModalOpen: false,
    setIsAuthModalOpen: (isModalOpen: boolean) =>
      set({ isAuthModalOpen: isModalOpen }),
  })
);
