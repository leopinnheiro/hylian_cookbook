import { effects } from "../data";
import type { EffectId } from "../data/types";
import { isHotEffect } from "../lib/format";
import { FilterBar } from "./FilterBar";

interface EffectIconFilterProps {
  selected: EffectId[];
  onChange: (effects: EffectId[]) => void;
  /** true = pode selecionar vários efeitos ao mesmo tempo; false = só 1 por vez. */
  multiple?: boolean;
  /** efeitos que não fazem sentido nesse contexto (ex: extra-hearts/extra-stamina na calculadora) — ficam de fora dos ícones. */
  excludeEffectIds?: EffectId[];
}

export function EffectIconFilter({
  selected,
  onChange,
  multiple = true,
  excludeEffectIds = [],
}: EffectIconFilterProps) {
  const items = effects
    .filter((effect) => !excludeEffectIds.includes(effect.id))
    .map((effect) => ({
      id: effect.id,
      label: effect.name["pt-br"],
      icon: effect.icon,
      accent: isHotEffect(effect.id)
        ? "var(--color-ember)"
        : "var(--color-sheikah)",
    }));

  return (
    <FilterBar
      items={items}
      selected={selected}
      onChange={(ids) => onChange(ids as EffectId[])}
      multiple={multiple}
      ariaLabel="Filtrar por efeito"
    />
  );
}
