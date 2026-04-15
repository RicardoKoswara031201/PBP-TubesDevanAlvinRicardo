import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../page/Loginpage";
import RegisterPage from "../page/Registerpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}