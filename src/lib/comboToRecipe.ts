import type { Recipe } from "../data/types";
import type { SavedCombo } from "../hooks/useSavedCombos";
import { computeDish } from "./cookingFormula";
import { findMatchingDishes, isJunkTemplate, pickDisplayDish } from "./matchRecipes";

const FALLBACK_NAME = {
  "pt-br": "Combinação sem nome catalogado",
  en: "Uncatalogued combination",
};

/**
 * Monta uma Recipe sintética a partir do resultado calculado de um combo
 * salvo (Minhas Combinações) — reaproveitada tanto pra exibir o card na
 * aba quanto pra alimentar a Calculadora de vantagem, já que não existe mais
 * nenhum catálogo estático de Recipe pra ela filtrar (ver
 * docs/cooking-formula.md e a reestruturação pra RecipeTemplate). Os
 * ingredientes viram slots fixos (1 material cada, sem grupo/label), já que
 * aqui é o que a pessoa realmente escolheu, não uma lista de opções
 * intercambiáveis.
 */
export function comboToRecipe(combo: SavedCombo): Recipe {
  const result = computeDish(combo.materialIds);
  const matches = findMatchingDishes(combo.materialIds);
  const dish = pickDisplayDish(combo.materialIds, matches);
  // Comida Duvidosa/Empedrada não têm efeito nem duração de verdade no jogo,
  // mesmo que a fórmula genérica calcule algo a partir dos materiais escolhidos.
  const isJunk = isJunkTemplate(dish?.id);

  return {
    id: combo.id,
    effect: isJunk ? undefined : result.effect,
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: dish?.name ?? FALLBACK_NAME,
    hearts: result.hearts,
    durationSeconds: isJunk ? null : result.durationSeconds,
    staminaWheels: result.staminaWheels,
    image: dish?.image,
    ingredients: combo.materialIds
      .filter((id): id is string => Boolean(id))
      .map((id) => ({ materialIds: [id] })),
  };
}
