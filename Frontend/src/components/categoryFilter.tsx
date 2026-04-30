import type { Category } from "../types";

interface Props {
  categories: Category[];
  selected: number | null;
  setSelected: (id: number | null) => void;
}

export default function CategoryFilter({ categories, selected, setSelected }: Props) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
  <button onClick={() => setSelected(null)}>Semua</button>

  {categories.map(c => (
    <button
      key={c.id}
      onClick={() => setSelected(c.id)}
      style={{
        background: selected === c.id ? "#9d9d9c" : "#eee"
      }}
    >
      {c.name}
    </button>
  ))}
</div>
  ); 
}
