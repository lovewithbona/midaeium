type FilterChipsProps = {
  label: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
  tone?: "region" | "type";
};

export default function FilterChips({ label, items, value, onChange, tone = "region" }: FilterChipsProps) {
  return (
    <div className={`chip-row chip-row-${tone}`}>
      <span className="chip-label">{label}</span>
      <div className="chip-options">
        {items.map((item) => (
          <button key={item} className={`chip ${value === item ? "active" : ""}`} onClick={() => onChange(item)} type="button">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
