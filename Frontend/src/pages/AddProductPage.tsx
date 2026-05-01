import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import "../style/AddProductPage.css";

export default function AddProductPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    categoryId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/products", {
        name: form.name,
        price: Number(form.price),
        categoryId: Number(form.categoryId),
      });

      alert("Produk berhasil ditambahkan!");
      navigate("/products");
    } catch (error) {
      console.error(error);
      alert("Gagal tambah produk");
    }
  };

  return (
    <div className="add-container">
      <h2>Tambah Produk</h2>

      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="name"
          placeholder="Nama Produk"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Harga"
          value={form.price}
          onChange={handleChange}
          required
        />

        <select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Kategori</option>
          <option value="1">Burger</option>
          <option value="2">Minuman</option>
          <option value="3">Dessert</option>
          <option value="4">Snack</option>
        </select>

        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}