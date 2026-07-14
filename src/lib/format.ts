import type { EffectId, IngredientSlot, Recipe } from "../data/types";

// Monta a lista de icones <prefix>-N.svg pra representar uma quantidade de
// vigor em quintos de roda (N cheios + 1 parcial no resto), ver
// docs/cooking-formula.md secao 9.
export function getWheelIcons(prefix: string, fifths: number): string[] {
  const fullWheels = Math.floor(fifths / 5);
  const remainder = fifths % 5;
  const icons: string[] = [];
  for (let i = 0; i < fullWheels; i++) {
    icons.push(`icons/${prefix}-5.svg`);
  }
  if (remainder > 0 || fullWheels === 0) {
    icons.push(`icons/${prefix}-${remainder}.svg`);
  }
  return icons;
}

export function getStaminaIcons(
  effect: EffectId,
  staminaWheels: number | undefined,
): string[] {
  if (staminaWheels === undefined) return [];
  const prefix = effect === "extra-stamina" ? "enduring" : "energizing";
  return getWheelIcons(prefix, staminaWheels);
}

export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}assets/${path}`;
}

export function formatDuration(totalSeconds: number): string {
  if (totalSeconds <= 0) return "—";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Categoria de cor por efeito (identidade visual, ver docs/spec.md):
// âmbar = quente/ofensivo/vital, ciano = frio/defensivo/técnico.
const HOT_EFFECTS: EffectId[] = ["heal", "extra-hearts", "attack"];

export function isHotEffect(effect: EffectId): boolean {
  return HOT_EFFECTS.includes(effect);
}

// Nível/tier do combo, extraído de variantLabel.en (ex: "Tier 3" -> 3), usado
// pra repetir o ícone de efeito na mesma quantidade na UI. Sem match, assume 1.
export function tierCount(recipe: Recipe): number {
  const match = recipe.variantLabel.en.match(/Tier (\d+)/);
  return match ? Number(match[1]) : 1;
}

// Agrupa materialIds repetidos (ex: 5x "apple") numa entrada só + contagem --
// mesmo padrão de groupIngredientSlots, usado nos favoritos (SavedComboCard)
// pra listar os ingredientes escolhidos sem repetir o mesmo nome N vezes.
export function groupMaterialIds(
  materialIds: string[],
): { materialId: string; count: number }[] {
  const groups: { materialId: string; count: number }[] = [];
  for (const materialId of materialIds) {
    const existing = groups.find((group) => group.materialId === materialId);
    if (existing) {
      existing.count += 1;
    } else {
      groups.push({ materialId, count: 1 });
    }
  }
  return groups;
}

// Agrupa slots idênticos (mesmos materiais intercambiáveis + mesmo label) num
// só, contando repetições — evita mostrar "Lagartixa" duas vezes em vez de "x2".
export function groupIngredientSlots(
  slots: IngredientSlot[],
): { slot: IngredientSlot; count: number }[] {
  const groups: { slot: IngredientSlot; count: number }[] = [];
  for (const slot of slots) {
    const key = JSON.stringify(slot.materialIds) + (slot.label?.["pt-br"] ?? "");
    const existing = groups.find(
      (group) =>
        JSON.stringify(group.slot.materialIds) +
          (group.slot.label?.["pt-br"] ?? "") ===
        key,
    );
    if (existing) {
      existing.count += 1;
    } else {
      groups.push({ slot, count: 1 });
    }
  }
  return groups;
}
