import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../page/Loginpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}