import type { Recipe } from "../../data/types";
import { computeDish } from "../../lib/cookingFormula";
import {
  findMatchingDishes,
  isJunkTemplate,
  pickDisplayDish,
} from "../../lib/matchRecipes";
import type { SavedCombo } from "../../hooks/useSavedCombos";
import { RecipeCard } from "../RecipeCard";

interface SavedComboCardProps {
  combo: SavedCombo;
  onRemove: () => void;
}

const FALLBACK_NAME = {
  "pt-br": "Combinação sem nome catalogado",
  en: "Uncatalogued combination",
};

/**
 * Monta uma Recipe sintetica a partir do resultado calculado da combinacao
 * salva, pra reaproveitar o RecipeCard tal e qual -- mesma visao na grade e
 * nos favoritos, como pedido. Os ingredientes viram slots fixos (1 material
 * cada, sem grupo/label), ja que aqui e o que a pessoa realmente escolheu,
 * nao uma lista de opcoes intercambiaveis.
 */
export function SavedComboCard({ combo, onRemove }: SavedComboCardProps) {
  const result = computeDish(combo.materialIds);
  const matches = findMatchingDishes(combo.materialIds);
  const dish = pickDisplayDish(combo.materialIds, matches);
  // Comida Duvidosa/Empedrada não têm efeito nem duração de verdade no jogo,
  // mesmo que a fórmula genérica calcule algo a partir dos materiais escolhidos.
  const isJunk = isJunkTemplate(dish?.id);

  const recipe: Recipe = {
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

  return <RecipeCard recipe={recipe} onRemove={onRemove} />;
}
