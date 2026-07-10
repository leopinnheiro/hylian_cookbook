import { effects } from "../data";
import type { EffectId } from "../data/types";
import { isHotEffect } from "../lib/format";
import { FilterChip } from "./FilterChip";

interface EffectFilterProps {
  selected: EffectId | null;
  onSelect: (effect: EffectId | null) => void;
}

export function EffectFilter({ selected, onSelect }: EffectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por efeito">
      <FilterChip
        label="Todos"
        active={selected === null}
        accent="var(--color-sheikah)"
        onClick={() => onSelect(null)}
      />
      {effects.map((effect) => (
        <FilterChip
          key={effect.id}
          label={effect.name["pt-br"]}
          active={selected === effect.id}
          accent={isHotEffect(effect.id) ? "var(--color-ember)" : "var(--color-sheikah)"}
          onClick={() => onSelect(effect.id)}
        />
      ))}
    </div>
  );
}
