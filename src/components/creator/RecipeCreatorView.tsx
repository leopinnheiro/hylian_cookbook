import { useMemo, useState } from "react";
import { Clock, Plus, X } from "lucide-react";
import { effects, materialsById } from "../../data";
import { computeDish } from "../../lib/cookingFormula";
import { findMatchingDishes, pickDisplayDish } from "../../lib/matchRecipes";
import {
  assetUrl,
  formatDuration,
  getStaminaIcons,
  groupIngredientSlots,
} from "../../lib/format";
import { MaterialPickerModal } from "./MaterialPickerModal";
import { RecipeIcon } from "../RecipeIcon";
import { Button } from "../Button";
import {
  IngredientChipList,
  type IngredientChipData,
} from "../IngredientChipList";

const SLOT_COUNT = 5;

interface RecipeCreatorViewProps {
  onSave: (materialIds: (string | null)[]) => void;
}

export function RecipeCreatorView({ onSave }: RecipeCreatorViewProps) {
  const [selection, setSelection] = useState<(string | null)[]>(
    Array(SLOT_COUNT).fill(null),
  );
  const [openSlot, setOpenSlot] = useState<number | null>(null);

  const filledCount = selection.filter(Boolean).length;
  const result = useMemo(() => computeDish(selection), [selection]);
  const matchingDishes = useMemo(
    () => findMatchingDishes(selection),
    [selection],
  );
  const effect = effects.find((entry) => entry.id === result.effect);
  const staminaIcons = getStaminaIcons(result.effect, result.staminaWheels);

  const dishName = pickDisplayDish(selection, matchingDishes);

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-6">
      <div className="grid grid-cols-5 justify-items-center gap-2">
        {selection.map((materialId, index) => {
          const material = materialId ? materialsById[materialId] : undefined;
          return (
            <button
              key={index}
              type="button"
              title={material?.name["pt-br"]}
              onClick={() => setOpenSlot(index)}
              className="relative flex aspect-square w-full max-w-24 items-center justify-center border border-dashed border-ash-steel/60 bg-panel p-2 transition-colors hover:border-sheikah"
            >
              {material ? (
                <>
                  <img
                    src={assetUrl(material.image)}
                    alt={material.name["pt-br"]}
                    className="h-full w-full object-contain"
                  />
                  <span
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelection((current) => {
                        const next = [...current];
                        next[index] = null;
                        return next;
                      });
                    }}
                    className="absolute right-0.5 top-0.5 text-ash-steel hover:text-sheikah"
                    aria-label="Remover ingrediente"
                  >
                    <X className="h-3.5 w-3.5" />
                  </span>
                </>
              ) : (
                <Plus
                  className="h-1/3 w-1/3 text-ash-steel"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 border border-ash-steel/30 bg-deep-steel p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-start gap-3">
            {dishName ? (
              <>
                <RecipeIcon
                  image={dishName.image}
                  effect={dishName.effect}
                  hearts={result.hearts}
                  size="sm"
                />
                <div className="flex min-w-0 flex-col gap-1">
                  <div className="flex flex-col">
                    <span className="font-dish text-lg leading-none text-rune-paper">
                      {dishName.name["pt-br"]}
                    </span>
                    <span className="font-chrome text-[11px] text-ash-steel">
                      {dishName.name.en}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-rune-paper">
                    {result.hearts > 0 && (
                      <span
                        className="flex items-center gap-1"
                        title="Corações restaurados"
                      >
                        <img
                          src={assetUrl("icons/heart.svg")}
                          alt=""
                          className="h-5 w-5 object-contain"
                        />
                        {result.hearts}
                      </span>
                    )}
                    {staminaIcons.length > 0 && (
                      <span
                        className="flex items-center gap-0.5"
                        title="Vigor restaurado"
                      >
                        {staminaIcons.map((icon, index) => (
                          <img
                            key={index}
                            src={assetUrl(icon)}
                            alt=""
                            className="h-5 w-5 object-contain"
                          />
                        ))}
                      </span>
                    )}
                    {result.durationSeconds > 0 && (
                      <span
                        className="flex items-center gap-1"
                        title="Duração do efeito"
                      >
                        <Clock className="h-4 w-4 text-ash-steel" />
                        {formatDuration(result.durationSeconds)}
                      </span>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <span className="font-chrome text-xs uppercase tracking-[0.15em] text-sheikah">
                {filledCount === 0
                  ? "Escolha os ingredientes"
                  : matchingDishes.length > 0
                    ? "Prato incompleto — veja as receitas possíveis abaixo"
                    : "Nenhuma receita catalogada bate com isso"}
              </span>
            )}
          </div>
          {!dishName && effect && (
            <img
              src={assetUrl(effect.icon)}
              alt=""
              className="h-6 w-6 shrink-0 object-contain"
            />
          )}
        </div>

        <Button disabled={filledCount === 0} onClick={() => onSave(selection)}>
          Salvar combinação
        </Button>
      </div>

      {filledCount > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="font-chrome text-xs uppercase tracking-[0.15em] text-ash-steel">
            Receitas possíveis com essa combinação
          </h3>
          {matchingDishes.length === 0 ? (
            <p className="text-xs text-ash-steel">
              Nenhuma receita catalogada bate com essa combinação ainda.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {matchingDishes.map((dish) => (
                <li
                  key={dish.id}
                  className="flex flex-col gap-2 border border-ash-steel/20 bg-panel px-3 py-2"
                >
                  <div className="flex items-center gap-3">
                    <RecipeIcon
                      image={dish.image}
                      effect={dish.effect}
                      hearts={dish.hearts}
                      size="sm"
                    />
                    <div className="flex min-w-0 flex-col">
                      <span className="font-dish text-sm text-rune-paper">
                        {dish.name["pt-br"]}
                      </span>
                      <span className="font-chrome text-[10px] text-ash-steel">
                        {dish.name.en}
                      </span>
                    </div>
                  </div>
                  <IngredientChipList
                    items={groupIngredientSlots(dish.ingredients).map(
                      ({ slot, count }, index): IngredientChipData => {
                        const primary = materialsById[slot.materialIds[0]];
                        return {
                          key: `${dish.id}-slot-${index}`,
                          image: primary?.image,
                          label: slot.label?.["pt-br"] ?? primary?.name["pt-br"] ?? "",
                          count,
                        };
                      },
                    )}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {openSlot !== null && (
        <MaterialPickerModal
          slotIndex={openSlot}
          selection={selection}
          onSelect={(materialId) =>
            setSelection((current) => {
              const next = [...current];
              next[openSlot] = materialId;
              return next;
            })
          }
          onClear={() =>
            setSelection((current) => {
              const next = [...current];
              next[openSlot] = null;
              return next;
            })
          }
          onClose={() => setOpenSlot(null)}
        />
      )}
    </main>
  );
}
