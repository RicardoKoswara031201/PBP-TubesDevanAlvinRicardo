import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import "../style/AddProductPage.css";

export default function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  // FETCH PRODUCT DETAIL
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.get<any>(`/products`);

        // cari product dari list (karena kamu belum punya GET /products/:id)
        const product = data.find((p: any) => p.id === Number(id));

        if (!product) {
          alert("Produk tidak ditemukan");
          return;
        }

        setProductName(product.name);
        setPrice(String(product.price));
      } catch (error) {
        console.error(error);
        alert("Gagal load produk");
      }
    };

    fetchProduct();
  }, [id]);

  // UPDATE PRICE ONLY
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.put(`/products/${id}`, {
        price: Number(price),
      });

      alert("Harga berhasil diupdate!");
      navigate("/products");
    } catch (error) {
      console.error(error);
      alert("Gagal update harga");
    }
  };

  return (
    <div className="add-container">
      <h2>Edit Produk</h2>

      <form onSubmit={handleSubmit} className="add-form">
        {/* NAMA (READ ONLY) */}
        <input
          type="text"
          value={productName}
          disabled
        />

        {/* HARGA (EDITABLE) */}
        <input
          type="number"
          placeholder="Harga Baru"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Update Harga</button>
      </form>
    </div>
  );
}