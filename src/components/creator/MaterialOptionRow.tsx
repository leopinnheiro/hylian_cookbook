import { Clock, Gauge } from "lucide-react";
import type { Material } from "../../data/types";
import { effects } from "../../data";
import type { IngredientContribution } from "../../lib/cookingFormula";
import { assetUrl, formatDuration } from "../../lib/format";

interface MaterialOptionRowProps {
  material: Material;
  preview: IngredientContribution;
  onSelect: () => void;
}

export function MaterialOptionRow({
  material,
  preview,
  onSelect,
}: MaterialOptionRowProps) {
  const effect = material.effect
    ? effects.find((entry) => entry.id === material.effect)
    : undefined;

  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full items-center gap-2 bg-panel px-2 py-1.5 text-left text-sm font-chrome transition-colors hover:bg-panel/70"
    >
      <img
        src={assetUrl(material.image)}
        alt=""
        className="h-6 w-6 object-contain"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between items-center gap-1">
          <span className="flex-1 text-rune-paper">
            {material.name["pt-br"]}
          </span>
          <span className="text-right text-xs text-ash-steel">
            {material.name.en}
          </span>
        </div>
        {(effect ||
          preview.potency !== null ||
          preview.durationSeconds !== null) && (
          <span className="flex items-center justify-end gap-3 font-mono text-[11px] text-sheikah">
            {effect && (
              <img
                src={assetUrl(effect.icon)}
                alt={effect.name["pt-br"]}
                title={effect.name["pt-br"]}
                className="h-3.5 w-3.5 shrink-0 object-contain mr-auto"
                loading="lazy"
              />
            )}
            {preview.potency !== null && (
              <span
                className="flex items-center gap-1"
                title="Potência total do ingrediente"
              >
                <Gauge className="h-3 w-3" />
                {preview.potency}
              </span>
            )}
            {preview.durationSeconds !== null && (
              <span
                className="flex items-center gap-1"
                title="Duração que essa cópia soma"
              >
                <Clock className="h-3 w-3" />
                {formatDuration(preview.durationSeconds)}
              </span>
            )}
          </span>
        )}
      </div>
    </button>
  );
}
