import { createBrowserRouter, RouteObject } from "react-router-dom";
import SignUpPage from "../pages/SignUp";
import App from "../App";
import SignInPage from "../pages/SingIn";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
