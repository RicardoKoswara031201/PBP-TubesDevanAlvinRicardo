import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
// import AdminHomePage from "../pages/HomepageAdmin";
// import ProductCategoryPage from "../pages/ProductCategoryPage";
// import AddProductPage from "../pages/AddProductPage";
// import EditProductPage from "../pages/EditProductPage";
// import OrderPage from "../pages/OrderPage";
// import UserPage from "../pages/UserPage";
import KasirHomePage from "../pages/HomepageKasir";
import OrderPage from "../pages/OrderPageKasir";
import IncomePage from "../pages/PenghasilanPage";

const router = createBrowserRouter([
//   // ADMIN
//   { path: "/", element: <AdminHomePage /> },

//   // PRODUCT
//   { path: "/products", element: <ProductCategoryPage /> },
//   { path: "/add-product", element: <AddProductPage /> },
//   { path: "/edit-product/:id", element: <EditProductPage /> },

//   // ORDER & USER
//   { path: "/orders", element: <OrderPage /> },
//   { path: "/users", element: <UserPage /> },

  // KASIR
  { path: "/", element: <KasirHomePage /> },
  { path: "/orders", element: <OrderPage /> },
  { path: "/income", element: <IncomePage /> },

]);

export default function Router() {
  return <RouterProvider router={router} />;
}