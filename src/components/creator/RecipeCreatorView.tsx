import { useMemo, useState } from "react";
import { Clock, Plus, X } from "lucide-react";
import { effects, materialsById } from "../../data";
import { computeDish } from "../../lib/cookingFormula";
import {
  findMatchingDishes,
  isJunkTemplate,
  mergeSelectionIntoTemplate,
  pickDisplayDish,
  sortJunkLast,
  templateEffects,
  visibleMatchingDishes,
} from "../../lib/matchRecipes";
import { assetUrl, formatDuration, getStaminaIcons } from "../../lib/format";
import { MaterialPickerModal } from "./MaterialPickerModal";
import { RecipeIcon } from "../RecipeIcon";
import { RecipeTemplateCard } from "../RecipeTemplateCard";
import { Button } from "../Button";

const SLOT_COUNT = 5;

interface RecipeCreatorViewProps {
  onSave: (materialIds: (string | null)[]) => void;
  initialSelection?: (string | null)[];
}

export function RecipeCreatorView({
  onSave,
  initialSelection,
}: RecipeCreatorViewProps) {
  const [selection, setSelection] = useState<(string | null)[]>(
    () => initialSelection ?? Array(SLOT_COUNT).fill(null),
  );
  const [openSlot, setOpenSlot] = useState<number | null>(null);

  const filledCount = selection.filter(Boolean).length;
  const result = useMemo(() => computeDish(selection), [selection]);
  const matchingDishes = useMemo(
    () => sortJunkLast(findMatchingDishes(selection)),
    [selection],
  );
  const displayableDishes = useMemo(
    () => visibleMatchingDishes(selection, matchingDishes),
    [selection, matchingDishes],
  );
  const dishName = pickDisplayDish(selection, matchingDishes);
  // Comida Duvidosa/Empedrada não têm efeito nem duração de verdade no jogo,
  // mesmo que a fórmula genérica calcule algo a partir dos materiais
  // escolhidos (ex: um bicho-com-efeito usado "errado" nesse combo).
  const isJunk = isJunkTemplate(dishName?.id);
  const displayEffect = isJunk ? undefined : result.effect;
  const displayDuration = isJunk ? null : result.durationSeconds;
  const effect = effects.find((entry) => entry.id === displayEffect);
  const staminaIcons = getStaminaIcons(displayEffect, result.staminaWheels);

  return (
    <main className="mx-auto flex h-full max-w-4xl flex-col">
      <div className="flex flex-none flex-col gap-3 border-b border-ash-steel/20 px-4 pb-3 pt-6">
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
                    <X className="h-4 w-4" />
                  </span>
                </>
              ) : (
                <Plus className="h-8 w-8 text-ash-steel" aria-hidden="true" />
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
                  effect={displayEffect}
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
                    {(displayDuration ?? 0) > 0 && (
                      <span
                        className="flex items-center gap-1"
                        title="Duração do efeito"
                      >
                        <Clock className="h-4 w-4 text-ash-steel" />
                        {formatDuration(displayDuration)}
                      </span>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <span className="font-chrome text-xs uppercase tracking-[0.15em] text-sheikah">
                {filledCount === 0
                  ? "Escolha os ingredientes"
                  : displayableDishes.length > 0
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

        <Button disabled={!dishName} onClick={() => onSave(selection)}>
          Salvar combinação
        </Button>
      </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-6">
        {filledCount > 0 && (
          <div className="flex flex-col gap-2 pt-3">
            <h3 className="font-chrome text-xs uppercase tracking-[0.15em] text-ash-steel">
              Receitas possíveis com essa combinação
            </h3>
            {displayableDishes.length === 0 ? (
              <p className="text-xs text-ash-steel">
                Nenhuma receita catalogada bate com essa combinação ainda.
              </p>
            ) : (
              <ul className="flex flex-col gap-2">
                {displayableDishes.map((dish) => (
                  <li key={dish.id}>
                    <RecipeTemplateCard
                      template={dish}
                      possibleEffectIds={templateEffects(dish)}
                      onOpenInCreator={
                        isJunkTemplate(dish.id)
                          ? undefined
                          : () =>
                              setSelection((current) =>
                                mergeSelectionIntoTemplate(
                                  current,
                                  dish.ingredients,
                                ),
                              )
                      }
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

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
          onClose={() => setOpenSlot(null)}
        />
      )}
    </main>
  );
}
