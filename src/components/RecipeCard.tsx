import { useState } from "react";
import { Clock, Info } from "lucide-react";
import type { IngredientSlot, Recipe } from "../data/types";
import { effects, materialsById } from "../data";
import {
  assetUrl,
  formatDuration,
  groupIngredientSlots,
  tierCount,
} from "../lib/format";
import { FavoriteButton } from "./FavoriteButton";
import { IngredientSlotModal } from "./IngredientSlotModal";

interface RecipeCardProps {
  recipe: Recipe;
  favorite: boolean;
  onToggleFavorite: () => void;
}

export function RecipeCard({
  recipe,
  favorite,
  onToggleFavorite,
}: RecipeCardProps) {
  const effect = effects.find((entry) => entry.id === recipe.effect);
  const repeats = tierCount(recipe);
  const [openSlot, setOpenSlot] = useState<IngredientSlot | null>(null);

  return (
    <article className="flex flex-col overflow-hidden border border-ash-steel/30 bg-deep-steel">
      <header className="relative flex items-stretch gap-3 border-b border-ash-steel/20 p-3">
        {recipe.image && (
          <img
            src={assetUrl(recipe.image)}
            alt=""
            className="aspect-square h-22 border-ash-steel/30 object-cover"
            loading="lazy"
          />
        )}
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
            <FavoriteButton active={favorite} onToggle={onToggleFavorite} />
          </div>

          {effect && (
            <div className="flex w-full items-center justify-between">
              <span className="flex items-center" title={effect.name["pt-br"]}>
                {Array.from({ length: repeats }).map((_, index) => (
                  <img
                    key={`${recipe.id}-effect-${index}`}
                    src={assetUrl(effect.icon)}
                    alt=""
                    className="h-5 w-5 object-contain"
                    loading="lazy"
                  />
                ))}
              </span>
              <span className="font-chrome text-[11px] uppercase tracking-[0.15em] text-sheikah">
                {effect?.name["pt-br"]}
              </span>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-col gap-3 p-4 justify-between flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-rune-paper">
            <span
              className="flex items-center gap-1"
              title="Corações restaurados"
            >
              <img
                src={assetUrl("icons/heart.svg")}
                alt=""
                className="h-5 w-5 object-contain"
              />
              {recipe.hearts}
            </span>
            {recipe.durationSeconds > 0 && (
              <span
                className="flex items-center gap-1"
                title="Duração do efeito"
              >
                <Clock className="h-4 w-4 text-ash-steel" />
                {formatDuration(recipe.durationSeconds)}
              </span>
            )}
          </div>

          <ul className="flex flex-wrap gap-2">
            {groupIngredientSlots(recipe.ingredients).map(
              ({ slot, count }, index) => {
                const primary = materialsById[slot.materialIds[0]];
                const isFillerSlot =
                  slot.materialIds.length > 1 || Boolean(slot.label);
                const content = (
                  <>
                    {primary && (
                      <img
                        src={assetUrl(primary.image)}
                        alt={primary.name["pt-br"]}
                        className="h-5 w-5 object-contain"
                        loading="lazy"
                      />
                    )}
                    <span className="text-ash-steel">
                      {slot.label?.["pt-br"] ?? primary?.name["pt-br"]}
                      {count > 1 && (
                        <strong className="font-bold text-rune-paper">
                          {" "}
                          ×{count}
                        </strong>
                      )}
                    </span>
                    {isFillerSlot && (
                      <Info
                        className="h-3.5 w-3.5 text-ash-steel"
                        aria-hidden="true"
                      />
                    )}
                  </>
                );
                if (isFillerSlot) {
                  return (
                    <li key={`${recipe.id}-slot-${index}`}>
                      <button
                        type="button"
                        onClick={() => setOpenSlot(slot)}
                        aria-label="Ver ingredientes compatíveis"
                        className="flex items-center gap-1.5 border border-dashed border-ash-steel/60 bg-panel px-2 py-1 text-xs font-chrome transition-colors hover:border-sheikah hover:bg-panel/70"
                      >
                        {content}
                      </button>
                    </li>
                  );
                }
                return (
                  <li
                    key={`${recipe.id}-slot-${index}`}
                    className="flex items-center gap-1.5 border border-transparent bg-panel px-2 py-1 text-xs font-chrome"
                  >
                    {content}
                  </li>
                );
              },
            )}
          </ul>
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
