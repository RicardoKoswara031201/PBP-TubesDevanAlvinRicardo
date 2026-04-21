// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // pages
// import { LoginPage } from "../pages/Loginpage";
// import AdminHomePage from "../pages/HomepageAdmin";
// import CustomerHomePage from "../pages/HomePage";
// import ProductPage from "../pages/ProductPage";
// import CategoryPage from "../pages/CategoryPage";
// import OrderPage from "../pages/OrderPage";
// import UserPage from "../pages/UserPage";

// // private route
// import { PrivateRoute } from "./PrivateRoute";

// const router = createBrowserRouter([
//   // LOGIN
//   { path: "/", element: <LoginPage /> },
//   { path: "/login", element: <LoginPage /> },

//   // CUSTOMER HOME (PUBLIC)
//   { path: "/customer", element: <CustomerHomePage /> },

//   // ADMIN HOME
//   {
//     path: "/admin",
//     element: (
//       <PrivateRoute>
//         <AdminHomePage />
//       </PrivateRoute>
//     )
//   },

//   // ADMIN FEATURES
//   {
//     path: "/products",
//     element: (
//       <PrivateRoute>
//         <ProductPage />
//       </PrivateRoute>
//     )
//   },
//   {
//     path: "/categories",
//     element: (
//       <PrivateRoute>
//         <CategoryPage />
//       </PrivateRoute>
//     )
//   },
//   {
//     path: "/orders",
//     element: (
//       <PrivateRoute>
//         <OrderPage />
//       </PrivateRoute>
//     )
//   },
//   {
//     path: "/users",
//     element: (
//       <PrivateRoute>
//         <UserPage />
//       </PrivateRoute>
//     )
//   },
// ]);

// export default function Router() {
//   return <RouterProvider router={router} />;
// }

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminHomePage from "../pages/HomepageAdmin";

const router = createBrowserRouter([
  { path: "/", element: <AdminHomePage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}