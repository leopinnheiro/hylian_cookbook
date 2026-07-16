import type { RecommendedCombo } from "../../data/recommended";
import type { Recipe } from "../../data/types";
import { comboToRecipe } from "../../lib/comboToRecipe";
import { RecipeCard } from "../RecipeCard";

interface RecommendedViewProps {
  combos: RecommendedCombo[];
  onOpenInCreator?: (recipe: Recipe) => void;
}

export function RecommendedView({
  combos,
  onOpenInCreator,
}: RecommendedViewProps) {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6">
      <p className="font-chrome text-xs uppercase tracking-[0.15em] text-ash-steel">
        Combos priorizando facilidade de obtenção — não é dado auditado
        contra o jogo como o resto do catálogo, ver notas de cada receita.
      </p>
      {combos.map((combo) => {
        const recipe: Recipe = {
          ...comboToRecipe({ id: combo.id, materialIds: combo.materialIds }),
          notes: combo.tip["pt-br"],
        };
        return (
          <RecipeCard
            key={combo.id}
            recipe={recipe}
            onOpenInCreator={
              onOpenInCreator ? () => onOpenInCreator(recipe) : undefined
            }
          />
        );
      })}
    </main>
  );
}
