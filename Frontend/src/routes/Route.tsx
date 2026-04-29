import { createBrowserRouter, RouterProvider } from "react-router-dom";

// LOGIN
import LoginPage from "../pages/Loginpage";

// CUSTOMER
import CustomerPage from "../pages/customerPages";

// ADMIN
import AdminHomePage from "../pages/HomepageAdmin";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";
import OrderPage from "../pages/OrderPage";
import UserPage from "../pages/UserPage";

// KASIR
import KasirHomePage from "../pages/HomepageKasir";
import OrderPageKasir from "../pages/OrderPageKasir";
import IncomePage from "../pages/PenghasilanPage";

const router = createBrowserRouter([
  // LOGIN
  { path: "/", element: <LoginPage /> },

  // CUSTOMER
  { path: "/menu", element: <CustomerPage /> },

  // ADMIN
  { path: "/admin", element: <AdminHomePage /> },
  { path: "/products", element: <ProductCategoryPage /> },
  { path: "/add-product", element: <AddProductPage /> },
  { path: "/edit-product/:id", element: <EditProductPage /> },
  { path: "/orders", element: <OrderPage /> },
  { path: "/users", element: <UserPage /> },

  // KASIR
  { path: "/kasir", element: <KasirHomePage /> },
  { path: "/kasir-orders", element: <OrderPageKasir /> },
  { path: "/income", element: <IncomePage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}