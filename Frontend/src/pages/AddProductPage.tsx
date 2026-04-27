import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/AddProductPage.css";

export default function AddProductPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    categoryId: "",
    image: null as File | null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("DATA PRODUK:", form);

    alert("Produk berhasil ditambahkan!");
    navigate("products");
  };

  return (
    <div className="add-container">
      <h2>Tambah Produk</h2>

      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="name"
          placeholder="Nama Produk"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Harga"
          onChange={handleChange}
          required
        />

        <select name="categoryId" onChange={handleChange} required>
          <option value="">Pilih Kategori</option>
          <option value="1">Makanan</option>
          <option value="2">Minuman</option>
          <option value="3">Dessert</option>
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}