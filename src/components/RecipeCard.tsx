import { useState } from "react";
import { Clock, X } from "lucide-react";
import type { IngredientSlot, Recipe } from "../data/types";
import { effects, materialsById } from "../data";
import {
  assetUrl,
  formatDuration,
  getStaminaIcons,
  groupIngredientSlots,
  tierCount,
} from "../lib/format";
import {
  IngredientChipList,
  type IngredientChipData,
} from "./IngredientChipList";
import { IngredientSlotModal } from "./IngredientSlotModal";
import { RecipeIcon } from "./RecipeIcon";

interface RecipeCardProps {
  recipe: Recipe;
  onRemove?: () => void;
}

export function RecipeCard({ recipe, onRemove }: RecipeCardProps) {
  const effect = effects.find((entry) => entry.id === recipe.effect);
  const repeats = tierCount(recipe);
  const [openSlot, setOpenSlot] = useState<IngredientSlot | null>(null);

  const staminaIcons = getStaminaIcons(recipe.effect, recipe.staminaWheels);

  return (
    <article className="flex flex-col overflow-hidden border border-ash-steel/30 bg-deep-steel">
      <header className="relative flex items-stretch gap-3 border-b border-ash-steel/20 p-3">
        <RecipeIcon
          image={recipe.image}
          effect={recipe.effect}
          hearts={recipe.hearts}
        />
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-1">
          <div className="flex items-start gap-1">
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="font-dish text-lg leading-none text-rune-paper">
                {recipe.name["pt-br"]}
              </h3>
              <p className="font-chrome text-[11px] text-ash-steel">
                {recipe.name.en}
              </p>
            </div>
            {onRemove && (
              <button
                type="button"
                onClick={onRemove}
                aria-label="Remover combinação salva"
                className="shrink-0 text-ash-steel hover:text-sheikah"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {effect && (
            <div className="flex w-full items-center justify-between">
              {staminaIcons.length > 0 ? (
                <span
                  className="flex items-center gap-0.5"
                  title="Vigor restaurado"
                >
                  {staminaIcons.map((icon, index) => (
                    <img
                      key={`${recipe.id}-stamina-${index}`}
                      src={assetUrl(icon)}
                      alt=""
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                    />
                  ))}
                </span>
              ) : repeats > 1 ? (
                <span className="font-mono text-[11px] text-ash-steel">
                  NV. {repeats}
                </span>
              ) : (
                <span />
              )}
              <span className="font-chrome text-[11px] uppercase tracking-[0.15em] text-sheikah">
                {effect?.name["pt-br"]}
              </span>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-col gap-3 p-4 justify-between flex-1">
        <div className="flex flex-col gap-3">
          {recipe.durationSeconds > 0 && (
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-rune-paper">
              <span
                className="flex items-center gap-1"
                title="Duração do efeito"
              >
                <Clock className="h-4 w-4 text-ash-steel" />
                {formatDuration(recipe.durationSeconds)}
              </span>
            </div>
          )}

          <IngredientChipList
            items={groupIngredientSlots(recipe.ingredients).map(
              ({ slot, count }, index): IngredientChipData => {
                const primary = materialsById[slot.materialIds[0]];
                const isFillerSlot =
                  slot.materialIds.length > 1 || Boolean(slot.label);
                return {
                  key: `${recipe.id}-slot-${index}`,
                  image: primary?.image,
                  label: slot.label?.["pt-br"] ?? primary?.name["pt-br"] ?? "",
                  count,
                  onClick: isFillerSlot ? () => setOpenSlot(slot) : undefined,
                };
              },
            )}
          />
        </div>
        {recipe.notes && (
          <p className="text-xs italic text-ash-steel">{recipe.notes}</p>
        )}
      </div>

      {openSlot && (
        <IngredientSlotModal
          slot={openSlot}
          materials={openSlot.materialIds
            .map((id) => materialsById[id])
            .filter((material): material is NonNullable<typeof material> =>
              Boolean(material),
            )}
          onClose={() => setOpenSlot(null)}
        />
      )}
    </article>
  );
}
