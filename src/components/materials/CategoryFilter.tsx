import { useMemo } from "react";
import { materials } from "../../data";
import { FilterBar } from "../FilterBar";
import { CATEGORY_COLORS, CATEGORY_LABELS } from "./categoryLabels";

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

  const items = categories.map((category) => ({
    id: category,
    label: CATEGORY_LABELS[category] ?? category,
    accent: CATEGORY_COLORS[category],
  }));

  return (
    <FilterBar
      items={items}
      selected={selected ? [selected] : []}
      onChange={(ids) => onSelect(ids[0] ?? null)}
      multiple={false}
      ariaLabel="Filtrar por categoria"
    />
  );
}
