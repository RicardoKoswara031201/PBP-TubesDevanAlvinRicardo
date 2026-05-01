import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import type { Category, Product } from "../types";
import "../style/ProductCategoryPage.css";

export default function ProductCategoryPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  //FETCH CATEGORIES
  const fetchCategories = async () => {
    try {
      const data = await api.get<any>("/categories");

      const categoryData = Array.isArray(data)
        ? data
        : data.categories || data.data || [];

      setCategories(categoryData);
    } catch (error) {
      console.error("Error fetch categories:", error);
    }
  };

  //FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const data = await api.get<any>("/products");

      console.log("PRODUCTS API:", data);

      const productData = Array.isArray(data)
        ? data
        : data.products || data.data || [];

      setProducts(productData);
      setAllProducts(productData);
    } catch (error) {
      console.error("Error fetch products:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  //FILTER
  const handleCategoryClick = (id: number) => {
    setSelectedCategory(id);

    const filtered = allProducts.filter(
      (product) => product.categoryId === id
    );

    setProducts(filtered);
  };

  const showAllProducts = () => {
    setSelectedCategory(null);
    setProducts(allProducts);
  };

  //DELETE
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Yakin hapus produk?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);
      await fetchProducts();
      alert("Produk berhasil dihapus");
    } catch (error) {
      console.error(error);
      alert("Gagal hapus produk");
    }
  };

  return (
    <div className="pc-container">

      {/* SIDEBAR */}
      <div className="pc-sidebar">
        <h3>Kategori</h3>

        <button
          className={!selectedCategory ? "active" : ""}
          onClick={showAllProducts}
        >
          Semua
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={selectedCategory === category.id ? "active" : ""}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="pc-content">

        <div className="pc-header">
          <h2>Produk</h2>

          <button onClick={() => navigate("/add-product")}>
            + Tambah Produk
          </button>
        </div>

        {/* GRID */}
        <div className="pc-grid">
          {products.map((product) => (
            <div key={product.id} className="pc-card">

              <img
                src={`http://localhost:3000${product.imageUrl}`}
                alt={product.name}
                className="pc-image"
              />

              <h4>{product.name}</h4>
              <p>Rp {product.price.toLocaleString("id-ID")}</p>

              <div className="pc-actions">
                <button
                  onClick={() => navigate(`/edit-product/${product.id}`)}
                >
                  Edit
                </button>

                <button onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}