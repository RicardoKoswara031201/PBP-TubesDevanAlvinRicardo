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
    image: null as File | null,
  });

  // HANDLE INPUT (SAFE VERSION)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;

    if (target.name === "image" && target.files) {
      setForm({
        ...form,
        image: target.files[0],
      });
      return;
    }

    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("categoryId", form.categoryId);

      if (form.image) {
        formData.append("image", form.image);
      }

      await api.postFormData("/products", formData);

      alert("Produk berhasil ditambahkan!");
      navigate("/products");
    } catch (error) {
      console.error("ERROR ADD PRODUCT:", error);
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

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}