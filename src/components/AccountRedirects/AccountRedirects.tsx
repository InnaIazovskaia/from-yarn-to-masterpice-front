import { Navigate } from "react-router-dom";
import useUserStore from "../../stores/useUserStore";

const AccountRedirects = (): JSX.Element => {
  const { isLogged } = useUserStore((state) => state.userState);

  return isLogged ? (
    <Navigate to={"/home"} replace={true} />
  ) : (
    <Navigate to={"/account/login"} replace={true} />
  );
};

export default AccountRedirects;
