import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { UserCredentials, UserData } from "../../types/userTypes";
import useUserStore from "../../stores/useUserStore";
import { CustomTokenPayload, LoginResponse, ErrorResponse } from "./types";
import useUiStore from "../../stores/useUiStore";
import userEndpoints from "./userEndpoints";

interface UseUserStructure {
  userLogin: (userCredentials: UserCredentials) => Promise<void>;
}

const apiUrl: string =
  import.meta.env.VITE_URL_API ?? import.meta.env.VITE_LOCALHOST_BACK;

const useUser = (): UseUserStructure => {
  const { userLoginAction } = useUserStore();
  const {
    setIsLoadingAction,
    unsetIsLoadingAction,
    showFeedbakcMessageAction,
    hideFeedbakcMessageAction,
  } = useUiStore();
  const navigate = useNavigate();

  const userLogin = async (userCredentials: UserCredentials) => {
    const response = await fetch(
      `${apiUrl}${userEndpoints.userEndpoint}${userEndpoints.loginEndpoint}`,
      {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      }
    );

    setIsLoadingAction();
    let errorMessage = "";

    try {
      if (response.ok) {
        const { token } = (await response.json()) as LoginResponse;

        const userData: CustomTokenPayload = await jwtDecode(token);

        const loggedUser: UserData = {
          ...userData,
          token,
        };

        unsetIsLoadingAction();
        hideFeedbakcMessageAction();
        userLoginAction(loggedUser);

        localStorage.setItem("token", token);
        navigate("/home");

        return;
      }

      const { message } = (await response.json()) as ErrorResponse;
      errorMessage = message;
      throw new Error();
    } catch (error) {
      showFeedbakcMessageAction(errorMessage);
      unsetIsLoadingAction();
    }
  };

  return { userLogin };
};

export default useUser;
