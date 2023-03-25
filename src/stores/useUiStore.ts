import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UiState {
  isLoading: boolean;
  feedbackMessage: string;
}

interface UiActions {
  setIsLoadingAction: () => void;
  unsetIsLoadingAction: () => void;
  showFeedbakcMessageAction: (message: string) => void;
  hideFeedbakcMessageAction: () => void;
}

const useUiStore = create<UiState & UiActions>()(
  devtools(
    (set) => ({
      isLoading: true,
      feedbackMessage: "",
      setIsLoadingAction() {
        set(() => ({ isLoading: true }));
      },
      unsetIsLoadingAction() {
        set(() => ({ isLoading: false }));
      },
      showFeedbakcMessageAction(message: string) {
        set(() => ({ feedbackMessage: message }));
      },
      hideFeedbakcMessageAction() {
        set(() => ({ feedbackMessage: "" }));
      },
    }),
    {
      name: "ui-store",
    }
  )
);

export default useUiStore;
