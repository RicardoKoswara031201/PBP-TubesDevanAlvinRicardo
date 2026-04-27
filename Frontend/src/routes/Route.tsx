import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
// PAGES 
import AdminHomePage from "../pages/HomepageAdmin";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";
import OrderPage from "../pages/OrderPage";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([ 
// HOME ADMIN 
{ path: "/", element: <AdminHomePage />, }, 
// PRODUK LIST 
{ path: "/products", element: <ProductCategoryPage />, }, 
// TAMBAH PRODUK 
{ path: "/add-product", element: <AddProductPage />, }, 
// EDIT PRODUK 
{ path: "/edit-product/:id", element: <EditProductPage />, }, 

{ path: "/orders", element: <OrderPage/> },

{ path: "/users", element: <UserPage/> }, 

]);

export default function Router() { return <RouterProvider router={router} />; }