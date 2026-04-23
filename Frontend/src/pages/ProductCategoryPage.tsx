import { useEffect, useState } from "react";
// import { api } from "../api/api"; // aktifkan nanti kalau pakai backend
import { useNavigate } from "react-router-dom";
import "../style/ProductCategoryPage.css";

export default function ProductCategoryPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // ================= BACKEND (SIAP DIPAKAI) =================
  /*
  const fetchCategories = async () => {
    const data = await api.get("/categories");
    setCategories(data);
  };

  const fetchProducts = async (categoryId?: number) => {
    let url = "/products";
    if (categoryId) url += `?categoryId=${categoryId}`;

    const data = await api.get(url);
    setProducts(data);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);
  */

  // ================= DUMMY =================
  useEffect(() => {
    const dummyCategories = [
      { id: 1, name: "Makanan" },
      { id: 2, name: "Minuman" },
      { id: 3, name: "Dessert" },
    ];

    const dummyProducts = [
      { id: 1, name: "Nasi Goreng", price: 20000, categoryId: 1 },
      { id: 2, name: "Ayam Bakar", price: 25000, categoryId: 1 },
      { id: 3, name: "Es Teh", price: 5000, categoryId: 2 },
      { id: 4, name: "Jus Alpukat", price: 15000, categoryId: 2 },
      { id: 5, name: "Ice Cream", price: 12000, categoryId: 3 },
    ];

    setCategories(dummyCategories);
    setAllProducts(dummyProducts);
    setProducts(dummyProducts);
  }, []);

  // ================= FILTER =================
  const handleCategoryClick = (id: number) => {
    setSelectedCategory(id);

    const filtered = allProducts.filter(
      (p) => p.categoryId === id
    );

    setProducts(filtered);
  };

  // ================= DELETE =================
  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Yakin hapus produk?");
    if (!confirmDelete) return;

    const updated = allProducts.filter((p) => p.id !== id);
    setAllProducts(updated);
    setProducts(updated);
  };

  return (
    <div className="pc-container">

      {/* SIDEBAR */}
      <div className="pc-sidebar">
        <h3>Kategori</h3>

        <button
          className={!selectedCategory ? "active" : ""}
          onClick={() => {
            setSelectedCategory(null);
            setProducts(allProducts);
          }}
        >
          Semua
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            className={selectedCategory === cat.id ? "active" : ""}
            onClick={() => handleCategoryClick(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="pc-content">

        {/* HEADER */}
        <div className="pc-header">
          <h2>Produk</h2>
          <button onClick={() => navigate("/add-product")}>
            + Tambah Produk
          </button>
        </div>

        {/* GRID */}
        <div className="pc-grid">
          {products.map((p) => (
            <div key={p.id} className="pc-card">
              <h4>{p.name}</h4>
              <p>Rp {p.price}</p>

              <div className="pc-actions">
                <button onClick={() => navigate(`/edit-product/${p.id}`)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(p.id)}>
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