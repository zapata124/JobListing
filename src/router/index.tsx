import { createBrowserRouter, RouteObject } from "react-router-dom";
import SignUpPage from "../pages/SignUp";
import App from "../App";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <div>sign in</div>,
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
