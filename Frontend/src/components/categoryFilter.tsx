import type { Category } from "../types";

interface Props {
  categories: Category[];
  selected: number | null;
  setSelected: (id: number | null) => void;
}

export default function CategoryFilter({ categories, selected, setSelected }: Props) {
  return (
    <div>
      <button onClick={() => setSelected(null)}>Semua</button>

      {categories.map(c => (
        <button
          key={c.id}
          onClick={() => setSelected(c.id)}
          style={{
            margin: 5,
            backgroundColor: selected === c.id ? "yellow" : "white"
          }}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}