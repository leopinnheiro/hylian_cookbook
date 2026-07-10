import { useMemo } from "react";
import { materials } from "../../data";
import { FilterChip } from "../FilterChip";
import { CATEGORY_LABELS } from "./categoryLabels";

interface CategoryFilterProps {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    materials.forEach((m) => m.category && set.add(m.category));
    return Array.from(set).sort();
  }, []);

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filtrar por categoria"
    >
      <FilterChip
        label="Todos"
        active={selected === null}
        accent="var(--color-sheikah)"
        onClick={() => onSelect(null)}
      />
      {categories.map((category) => (
        <FilterChip
          key={category}
          label={CATEGORY_LABELS[category] ?? category}
          active={selected === category}
          accent="var(--color-sheikah)"
          onClick={() => onSelect(category)}
        />
      ))}
    </div>
  );
}
