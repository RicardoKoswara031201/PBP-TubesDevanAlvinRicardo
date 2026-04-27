import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { api } from "../api/api"; // ⬅️ nanti aktifkan backend

export default function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    price: "",
    categoryId: "",
    image: null as File | null,
  });

  // ================= BACKEND (SIAP DIPAKAI) =================
  /*
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await api.get(`/products/${id}`);
      setForm({
        name: data.name,
        price: data.price,
        categoryId: data.categoryId,
        image: null
      });
    };

    fetchProduct();
  }, [id]);
  */

  // ================= DUMMY =================
  useEffect(() => {
    const dummyProducts = [
      { id: 1, name: "Nasi Goreng", price: 20000, categoryId: 1 },
      { id: 2, name: "Ayam Bakar", price: 25000, categoryId: 1 },
      { id: 3, name: "Es Teh", price: 5000, categoryId: 2 },
    ];

    const product = dummyProducts.find(
      (p) => p.id === Number(id)
    );

    if (product) {
      setForm({
        name: product.name,
        price: String(product.price),
        categoryId: String(product.categoryId),
        image: null,
      });
    }
  }, [id]);

  // ================= HANDLE =================
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

    console.log("UPDATED DATA:", form);

    alert("Produk berhasil diupdate!");
    navigate("/");
  };

  return (
    <div className="add-container">
      <h2>Edit Produk</h2>

      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Nama Produk"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          value={form.price}
          placeholder="Harga"
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

        <button type="submit">Update</button>
      </form>
    </div>
  );
}