import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import AccountRedirects from "../components/AccountRedirects/AccountRedirects";
import paths from "./paths";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: paths.home,
        element: <></>,
      },
      {
        path: paths.patterns,
        element: <></>,
      },
      {
        path: paths.about,
      },
      {
        path: paths.contact,
      },
      {
        path: paths.account,
        element: <AccountRedirects />,
      },
      {
        path: paths.login,
        element: <LoginPage />,
      },
      {
        path: paths.register,
        element: <RegisterPage />,
      },
      {
        path: paths.cart,
        element: <></>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
