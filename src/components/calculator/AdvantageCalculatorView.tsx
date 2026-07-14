import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import type { EffectId, Recipe } from "../../data/types";
import {
  bucketRecipesByHearts,
  bucketRecipesByStamina,
  type RecipeBucket,
} from "../../lib/advantageCalculator";
import { useCalculatorInputs } from "../../hooks/useCalculatorInputs";
import { RecipeCard } from "../RecipeCard";
import { EmptyState } from "../EmptyState";
import { HeartsInput } from "./HeartsInput";
import { StaminaInput } from "./StaminaInput";
import { CalculatorInfoModal } from "./CalculatorInfoModal";
import { EffectIconFilter } from "../EffectIconFilter";

interface AdvantageCalculatorViewProps {
  recipes: Recipe[];
  onOpenInCreator: (recipe: Recipe) => void;
}

// Piso/teto reais do jogo: 3 corações base (sem recipiente) até 3 + 20 recipientes = 30.
const MIN_HEARTS = 3;
const MAX_HEARTS = 30;
// Piso/teto reais do jogo: 1 roda base (sem upgrade) até 1 + 2 upgrades = 3 rodas cheias.
const MIN_STAMINA_WHEELS = 1;
const MAX_STAMINA_WHEELS = 3;

function BucketSection({
  title,
  unitLabel,
  buckets,
  onOpenInCreator,
}: {
  title: string;
  unitLabel: (value: number) => string;
  buckets: RecipeBucket[];
  onOpenInCreator: (recipe: Recipe) => void;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-chrome text-sm uppercase tracking-[0.25em] text-ash-steel">
        {title}
      </h2>
      {buckets.length === 0 ? (
        <EmptyState
          title="Nenhuma receita disponível"
          description="Nenhuma receita cabe no valor informado sem estourar. Tente um número maior."
        />
      ) : (
        buckets.map(({ value, items }) => (
          <div key={value} className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-sheikah">
              {unitLabel(value)}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onOpenInCreator={() => onOpenInCreator(recipe)}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export function AdvantageCalculatorView({
  recipes,
  onOpenInCreator,
}: AdvantageCalculatorViewProps) {
  const {
    currentHearts,
    currentStaminaWheels,
    setCurrentHearts,
    setCurrentStaminaWheels,
  } = useCalculatorInputs();
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedEffects, setSelectedEffects] = useState<EffectId[]>([]);

  const effectFilteredRecipes = useMemo(
    () =>
      selectedEffects.length > 0
        ? recipes.filter(
            (recipe) =>
              recipe.effect !== undefined &&
              selectedEffects.includes(recipe.effect),
          )
        : recipes,
    [recipes, selectedEffects],
  );

  const heartsBuckets = useMemo(
    () => bucketRecipesByHearts(effectFilteredRecipes, currentHearts),
    [effectFilteredRecipes, currentHearts],
  );

  const staminaBuckets = useMemo(
    () =>
      bucketRecipesByStamina(
        effectFilteredRecipes,
        Math.round(currentStaminaWheels * 5),
      ),
    [effectFilteredRecipes, currentStaminaWheels],
  );

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setInfoOpen(true)}
          aria-label="Como funciona a calculadora"
          className="flex items-center gap-1 font-chrome text-xs uppercase tracking-wide text-ash-steel hover:text-sheikah"
        >
          <Info className="h-4 w-4" />
          Como funciona
        </button>
      </div>

      {infoOpen && <CalculatorInfoModal onClose={() => setInfoOpen(false)} />}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <HeartsInput
          label="Corações atuais"
          value={currentHearts}
          min={MIN_HEARTS}
          max={MAX_HEARTS}
          onChange={setCurrentHearts}
        />

        <StaminaInput
          label="Vigor atual"
          value={currentStaminaWheels}
          min={MIN_STAMINA_WHEELS}
          max={MAX_STAMINA_WHEELS}
          onChange={setCurrentStaminaWheels}
        />
      </div>

      <EffectIconFilter
        selected={selectedEffects}
        onChange={setSelectedEffects}
        multiple={false}
        excludeEffectIds={["extra-hearts", "extra-stamina"]}
      />

      <BucketSection
        title="Corações"
        unitLabel={(value) => `${value} corações`}
        buckets={heartsBuckets}
        onOpenInCreator={onOpenInCreator}
      />

      <BucketSection
        title="Vigor"
        unitLabel={(value) => `${(value / 5).toFixed(1)} rodas`}
        buckets={staminaBuckets}
        onOpenInCreator={onOpenInCreator}
      />
    </main>
  );
}
