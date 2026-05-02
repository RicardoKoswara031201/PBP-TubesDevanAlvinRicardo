import { useEffect, useState } from "react";
import { api } from "../api/api";
import "../style/UserPage.css";

const USE_BACKEND = false;

export default function UserPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (USE_BACKEND) {
      // BACKEND
      const fetchUsers = async () => {
        try {
          const data = await api.get("/users");
          setUsers(data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchUsers();
    } else {
      // DUMMY
      const dummyUsers = [
        { id: 1, name: "Admin 1", role: "admin" },
        { id: 2, name: "Kasir 1", role: "kasir" },
      ];
      setUsers(dummyUsers);
    }
  }, []);

  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Hapus user?");
    if (!confirmDelete) return;

    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="user-container">
      <h2>Manage Users</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => handleDelete(u.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}