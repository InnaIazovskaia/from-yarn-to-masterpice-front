import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { UserData, UserState } from "../types";

interface UserStore {
  userState: UserState;
  userLoginAction: (user: UserData) => void;
  userLogoutAction: () => void;
}

const initialUserState: UserState = {
  id: "",
  token: "",
  username: "",
  isLogged: false,
};

const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      userState: initialUserState,
      userLoginAction(user: UserData) {
        set({
          userState: {
            ...user,
            isLogged: true,
          },
        });
      },
      userLogoutAction() {
        set({
          userState: initialUserState,
        });
      },
    }),
    {
      name: "user-store",
    }
  )
);

export default useUserStore;
