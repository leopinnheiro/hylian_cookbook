import type { Recipe } from "../data/types";
import { recipes } from "../data";

/** Tenta uma atribuicao injetiva: cada material escolhido preenche 1 slot
 * distinto do prato, e precisa estar entre as opcoes desse slot. Excecao:
 * prato de 1 slot so (ex: Cozido de Frutas, Espeto de Cogumelo) aceita
 * qualquer quantidade do mesmo slot -- categoria unica nao tem limite de
 * repeticao, so ganha mais coracoes por ingrediente. Mas a partir de 5
 * unidades vira "Fartura de X" (isGeneric) em vez do prato normal -- a
 * variante normal fica limitada a ate 4.*/
function canMatch(materialIds: string[], recipe: Recipe): boolean {
  const slots = recipe.ingredients;

  if (slots.length === 1) {
    if (!recipe.isGeneric && materialIds.length > 4) return false;
    return materialIds.every((mid) => slots[0].materialIds.includes(mid));
  }

  const usedSlots = new Array(slots.length).fill(false);

  function backtrack(index: number): boolean {
    if (index === materialIds.length) return true;
    const materialId = materialIds[index];
    for (let s = 0; s < slots.length; s++) {
      if (!usedSlots[s] && slots[s].materialIds.includes(materialId)) {
        usedSlots[s] = true;
        if (backtrack(index + 1)) return true;
        usedSlots[s] = false;
      }
    }
    return false;
  }

  return backtrack(0);
}

/** Receitas do catalogo compativeis com a selecao atual (parcial ou completa). */
export function findMatchingDishes(materialIds: (string | null)[]): Recipe[] {
  const chosen = materialIds.filter((id): id is string => Boolean(id));
  if (chosen.length === 0) return [];
  return recipes.filter((recipe) => {
    const withinSize =
      recipe.ingredients.length === 1 || chosen.length <= recipe.ingredients.length;
    return withinSize && canMatch(chosen, recipe);
  });
}

/** Dentre as receitas compatíveis, escolhe a que representa melhor a seleção
 * atual pra exibir como "nome do prato": um prato de 1 slot so ja esta
 * completo com qualquer quantidade; um prato de varios slots so fica
 * completo quando todos eles foram preenchidos. Prefere a variante
 * não-genérica quando houver mais de uma completa. */
export function pickDisplayDish(
  materialIds: (string | null)[],
  matchingDishes: Recipe[],
): Recipe | undefined {
  const filledCount = materialIds.filter(Boolean).length;
  const completeMatches = matchingDishes.filter(
    (dish) => dish.ingredients.length === 1 || dish.ingredients.length === filledCount,
  );
  return completeMatches.find((dish) => !dish.isGeneric) ?? completeMatches[0];
}

/** Converte uma Recipe do catalogo numa selecao pro Creator (5 slots): slots
 * fixos (1 unica opcao) ja vem preenchidos, slots "Any X" (varias opcoes)
 * ficam vazios pra pessoa escolher. Usado tanto pra "enviar pro Creator" a
 * partir da grade quanto pra clicar numa receita possivel dentro do proprio
 * Creator e completar o resto sozinho. */
export function recipeToSelection(
  recipe: Recipe,
  slotCount = 5,
): (string | null)[] {
  const filled = recipe.ingredients.map((slot) =>
    slot.materialIds.length === 1 ? slot.materialIds[0] : null,
  );
  while (filled.length < slotCount) {
    filled.push(null);
  }
  return filled.slice(0, slotCount);
}

/** Materiais que, colocados em `slotIndex`, ainda deixam pelo menos 1 receita
 * do catalogo possivel dado o resto da selecao atual. */
export function getViableMaterials(
  currentSelection: (string | null)[],
  slotIndex: number,
  candidateIds: string[],
): string[] {
  return candidateIds.filter((candidate) => {
    const trial = [...currentSelection];
    trial[slotIndex] = candidate;
    return findMatchingDishes(trial).length > 0;
  });
}
