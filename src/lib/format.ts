import type { EffectId, IngredientSlot, Recipe } from "../data/types";

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
