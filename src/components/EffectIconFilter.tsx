import { effects } from "../data";
import type { EffectId } from "../data/types";
import { assetUrl, isHotEffect } from "../lib/format";

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
  const visibleEffects = effects.filter(
    (effect) => !excludeEffectIds.includes(effect.id),
  );
  const toggle = (effectId: EffectId) => {
    if (!multiple) {
      onChange(selected.includes(effectId) ? [] : [effectId]);
      return;
    }
    onChange(
      selected.includes(effectId)
        ? selected.filter((id) => id !== effectId)
        : [...selected, effectId],
    );
  };

  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="group"
      aria-label="Filtrar por efeito"
    >
      <button
        type="button"
        onClick={() => onChange([])}
        aria-pressed={selected.length === 0}
        className={`font-chrome text-xs uppercase tracking-wide px-2 py-1.5 border ${
          selected.length === 0
            ? "border-sheikah text-sheikah"
            : "border-ash-steel/30 text-ash-steel hover:border-sheikah hover:text-sheikah"
        }`}
      >
        Todos
      </button>
      {visibleEffects.map((effect) => {
        const active = selected.includes(effect.id);
        const accent = isHotEffect(effect.id)
          ? "var(--color-ember)"
          : "var(--color-sheikah)";
        return (
          <button
            key={effect.id}
            type="button"
            onClick={() => toggle(effect.id)}
            aria-pressed={active}
            aria-label={effect.name["pt-br"]}
            title={effect.name["pt-br"]}
            style={active ? { borderColor: accent } : undefined}
            className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors ${
              active
                ? "bg-panel"
                : "border-ash-steel/30 opacity-50 hover:border-ash-steel/60 hover:opacity-100"
            }`}
          >
            <img
              src={assetUrl(effect.icon)}
              alt=""
              className="h-5 w-5 object-contain"
            />
          </button>
        );
      })}
    </div>
  );
}
