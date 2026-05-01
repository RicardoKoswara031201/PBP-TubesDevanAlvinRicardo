import { useEffect, useState } from "react";
import type { Category, Product, CartItem } from "../types";
import Menu from "../components/menu";
import Cart from "../components/carts";
import CategoryFilter from "../components/categoryFilter";

export default function CustomerPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
  fetch("http://localhost:3000/api/products")
  .then(res => res.json())
  .then(data => {
    console.log("PRODUCTS API:", data);

    setProducts(Array.isArray(data) ? data : data.products || data.data || []);
  });

  fetch("http://localhost:3000/api/categories")
    .then(res => res.json())
    .then(data => {
      console.log("CATEGORIES API:", data);

      setCategories(Array.isArray(data) ? data : data.categories || []);
    });
}, []);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.categoryId === selectedCategory)
    : products;

  const addToCart = (product: Product) => {
    const exist = cart.find(c => c.productId === product.id);

    if (exist) {
      setCart(cart.map(c =>
        c.productId === product.id
          ? { ...c, qty: c.qty + 1 }
          : c
      ));
    } else {
      setCart([
        ...cart,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          qty: 1
        }
      ]);
    }
  };

  return (
   <div style={{ padding: 20 }}>
      <h1 style={{ color: "#b64a4a" }}>My Menu</h1>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: 20
      }}>
        <Menu products={filteredProducts} addToCart={addToCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}