import type { EffectId, IngredientSlot, RecipeTemplate } from "../data/types";
import { materialsById, recipeTemplates } from "../data";

// Pratos "lixo" (não têm efeito nem duração de verdade, sempre viram um
// resultado inválido/sem graça independente dos materiais escolhidos) — usado
// pra ordenar sempre por último nas listas e pra suprimir efeito/duração
// espúrios calculados pela fórmula genérica quando o prato reconhecido é um
// desses (ver App.tsx e RecipeCreatorView.tsx).
export const JUNK_TEMPLATE_IDS = new Set(["dubious-food", "rock-hard-food"]);

export function isJunkTemplate(templateId: string | undefined): boolean {
  return templateId !== undefined && JUNK_TEMPLATE_IDS.has(templateId);
}

/** Ordena uma lista de templates deixando sempre os "lixo" por último. */
export function sortJunkLast(templates: RecipeTemplate[]): RecipeTemplate[] {
  return [...templates].sort(
    (a, b) => Number(isJunkTemplate(a.id)) - Number(isJunkTemplate(b.id)),
  );
}

// "Comida Duvidosa" é um prato-lixo: o catálogo lista TODOS os bichos-com-
// efeito e partes-de-monstro juntos no mesmo slot só pra representar "esse
// combo não forma nada válido" — ela nunca herda o efeito de nenhum material
// específico (ao contrário de Bolo de Frutas, Espeto de Peixe etc., onde o
// ingrediente escolhido determina de verdade o efeito do prato). Por isso é
// excluída aqui, senão apareceria em todo grupo de efeito.
const NO_EFFECT_TEMPLATE_IDS = new Set(["dubious-food"]);

/** Efeitos que os slots de um template cobrem, dependendo de qual material
 * (com `effect`) a pessoa escolher em cada slot — um mesmo template pode
 * contar pra vários efeitos (ex: Bolo de Frutas cobre Hearty/Chilly/Spicy/
 * Electro conforme a fruta escolhida no slot de efeito). */
export function templateEffects(template: RecipeTemplate): EffectId[] {
  if (NO_EFFECT_TEMPLATE_IDS.has(template.id)) return [];
  const set = new Set<EffectId>();
  for (const slot of template.ingredients) {
    for (const materialId of slot.materialIds) {
      const effect = materialsById[materialId]?.effect;
      if (effect) set.add(effect);
    }
  }
  return [...set];
}

/** Tenta atribuir cada material escolhido a algum slot compativel do template.
 * Repeticao livre: varios materiais escolhidos podem ir pro mesmo slot (ex:
 * 3x Libelula Gelida no slot de efeito de um elixir, ou 2x Chifre de Koboblin
 * no slot de parte-de-monstro) -- o unico limite fisico e o tamanho da panela
 * (5 posicoes), que ja e garantido por quem monta a selecao. Retorna o slot
 * escolhido pra cada item (mesmo indice de `chosen`), ou null se nao encaixa. */
function tryAssign(chosen: string[], template: RecipeTemplate): number[] | null {
  const slots = template.ingredients;
  const assignment: number[] = new Array(chosen.length).fill(-1);

  function backtrack(index: number): boolean {
    if (index === chosen.length) return true;
    const materialId = chosen[index];
    for (let s = 0; s < slots.length; s++) {
      if (slots[s].materialIds.includes(materialId)) {
        assignment[index] = s;
        if (backtrack(index + 1)) return true;
      }
    }
    return false;
  }

  return backtrack(0) ? assignment : null;
}

function canMatch(chosen: string[], template: RecipeTemplate): boolean {
  return tryAssign(chosen, template) !== null;
}

/** Templates do catalogo compativeis com a selecao atual (parcial ou completa). */
export function findMatchingDishes(materialIds: (string | null)[]): RecipeTemplate[] {
  const chosen = materialIds.filter((id): id is string => Boolean(id));
  if (chosen.length === 0) return [];
  return recipeTemplates.filter((template) => canMatch(chosen, template));
}

/** Um template so esta "completo" quando todo slot NAO-opcional dele recebeu
 * pelo menos 1 material da selecao atual -- antes disso e so um match
 * parcial/possivel. Slots `optional: true` podem ficar vazios (ex: o slot de
 * parte-de-monstro do Tonico Feerico, que so entra quando a pessoa quer o
 * caminho "Fada + reagente" em vez de "so Fada"). */
export function isCompleteMatch(
  materialIds: (string | null)[],
  template: RecipeTemplate,
): boolean {
  const chosen = materialIds.filter((id): id is string => Boolean(id));
  const assignment = tryAssign(chosen, template);
  if (!assignment) return false;
  const usedSlots = new Set(assignment);
  return template.ingredients.every(
    (slot, index) => slot.optional || usedSlots.has(index),
  );
}

/** Dentre os templates compatíveis, escolhe o que representa melhor a seleção
 * atual pra exibir como "nome do prato": só quando todo slot do template já
 * tem pelo menos 1 material escolhido. Entre vários completos, prefere o mais
 * específico (mais slots) — ex: um elixir de 2 slots (efeito + parte de
 * monstro) vence "Comida Duvidosa", que tem 1 slot catch-all cobrindo tanto
 * bichos-com-efeito quanto partes de monstro neutras (pra sinalizar quando a
 * combinação NÃO forma elixir válido) e por isso bate com quase qualquer
 * seleção de elixir também. */
export function pickDisplayDish(
  materialIds: (string | null)[],
  matchingDishes: RecipeTemplate[],
): RecipeTemplate | undefined {
  const completeMatches = matchingDishes.filter((dish) =>
    isCompleteMatch(materialIds, dish),
  );
  return completeMatches.sort(
    (a, b) => b.ingredients.length - a.ingredients.length,
  )[0];
}

/** Converte uma lista de slots (de um RecipeTemplate ou de uma Recipe já
 * resolvida) numa seleção pro Creator (5 slots), do zero: slots fixos (1
 * única opção) já vêm preenchidos; slots com várias opções vêm com a primeira
 * opção como palpite inicial (senão um template de 1 slot só, tipo Espeto de
 * Peixe, abriria o Creator inteiramente vazio, sem nenhuma pista de que algo
 * aconteceu) — a pessoa troca depois se quiser outra opção. Só os slots
 * `optional: true` ficam vazios de propósito (ex: a parte de monstro do
 * Tônico Feérico — o padrão é "só Fada", não "Fada + monstro"). Usado pra
 * "enviar pro Creator" a partir da grade de Receitas, onde não há nada
 * selecionado ainda pra preservar. */
export function ingredientsToSelection(
  ingredients: IngredientSlot[],
  slotCount = 5,
): (string | null)[] {
  const filled = ingredients.map((slot) =>
    slot.optional ? null : (slot.materialIds[0] ?? null),
  );
  while (filled.length < slotCount) {
    filled.push(null);
  }
  return filled.slice(0, slotCount);
}

/** Igual a `ingredientsToSelection`, mas pensada pra quando a pessoa clica
 * numa "receita possível" de DENTRO do próprio Creator, já com alguns
 * ingredientes escolhidos: preserva qualquer material já selecionado que
 * ainda sirva em algum slot do novo template (ex: já tinha Libélula Gélida
 * escolhida e clicou em Elixir Gélido — mantém a Libélula em vez de trocar
 * pela Borboleta Invernal só porque essa é a primeira opção da lista), e só
 * usa o palpite padrão (1ª opção) pros slots que sobrarem sem nada
 * aproveitável. */
export function mergeSelectionIntoTemplate(
  currentSelection: (string | null)[],
  ingredients: IngredientSlot[],
  slotCount = 5,
): (string | null)[] {
  const chosen = currentSelection.filter((id): id is string => Boolean(id));
  const slotValues: (string | null)[] = ingredients.map(() => null);

  for (const materialId of chosen) {
    const slotIndex = ingredients.findIndex(
      (slot, index) =>
        slotValues[index] === null && slot.materialIds.includes(materialId),
    );
    if (slotIndex !== -1) {
      slotValues[slotIndex] = materialId;
    }
  }

  const filled = ingredients.map((slot, index) => {
    if (slotValues[index] !== null) return slotValues[index];
    return slot.optional ? null : (slot.materialIds[0] ?? null);
  });
  while (filled.length < slotCount) {
    filled.push(null);
  }
  return filled.slice(0, slotCount);
}

/** Remove os "lixo" (Comida Duvidosa/Empedrada) da lista de receitas possíveis
 * quando a seleção atual já forma um prato de verdade completo — ex: Libélula
 * Gélida sozinha ainda pode virar Comida Duvidosa (falta reagente), mas
 * assim que você junta uma parte de monstro o combo já fechou como Elixir
 * Gélido de verdade, e Comida Duvidosa deixa de ser um resultado possível
 * pra ESSA seleção exata (mesmo que o slot catch-all dela tecnicamente
 * aceite os mesmos materiais). */
export function visibleMatchingDishes(
  materialIds: (string | null)[],
  matchingDishes: RecipeTemplate[],
): RecipeTemplate[] {
  const hasRealCompleteMatch = matchingDishes.some(
    (dish) => !isJunkTemplate(dish.id) && isCompleteMatch(materialIds, dish),
  );
  if (!hasRealCompleteMatch) return matchingDishes;
  return matchingDishes.filter((dish) => !isJunkTemplate(dish.id));
}

/** Materiais que, colocados em `slotIndex`, ainda deixam pelo menos 1 template
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
