import { effects } from "../data";
import type { EffectId } from "../data/types";
import { isHotEffect } from "../lib/format";

interface EffectFilterProps {
  selected: EffectId | null;
  onSelect: (effect: EffectId | null) => void;
}

export function EffectFilter({ selected, onSelect }: EffectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por efeito">
      <Chip label="Todos" active={selected === null} hot={false} onClick={() => onSelect(null)} />
      {effects.map((effect) => (
        <Chip
          key={effect.id}
          label={effect.name["pt-br"]}
          active={selected === effect.id}
          hot={isHotEffect(effect.id)}
          onClick={() => onSelect(effect.id)}
        />
      ))}
    </div>
  );
}

function Chip({
  label,
  active,
  hot,
  onClick,
}: {
  label: string;
  active: boolean;
  hot: boolean;
  onClick: () => void;
}) {
  const accent = hot ? "var(--color-ember)" : "var(--color-sheikah)";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="border px-3 py-1.5 font-chrome text-xs uppercase tracking-wide transition-colors"
      style={{
        backgroundColor: active ? accent : "var(--color-panel)",
        color: active ? "var(--color-obsidian)" : "var(--color-rune-paper)",
        borderColor: accent,
      }}
    >
      {label}
    </button>
  );
}
