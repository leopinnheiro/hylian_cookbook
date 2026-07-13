import type { EffectId } from "../data/types";
import { materialsById } from "../data";

export interface DishResult {
  effect: EffectId;
  hearts: number;
  durationSeconds: number;
  staminaWheels?: number; // só existe pra restore-stamina/extra-stamina
}

// duração base por efeito (secao 2 do cooking-formula.md); heal/extra-hearts/
// restore-stamina/extra-stamina nao tem duracao de status.
const EFFECT_BASE_DURATION: Partial<Record<EffectId, number>> = {
  attack: 20,
  defense: 20,
  speed: 30,
  "cold-resist": 120,
  "heat-resist": 120,
  "electric-resist": 120,
  fireproof: 120,
  stealth: 90,
};

/**
 * Calcula o resultado real de uma combinacao de ate 5 materiais, ao vivo,
 * seguindo a mesma formula documentada em docs/cooking-formula.md e ja
 * confirmada por teste manual no jogo (mesma logica de scripts/build_recipes.py,
 * so que em TypeScript pra rodar no navegador).
 */
export function computeDish(materialIds: (string | null)[]): DishResult {
  const picks = materialIds
    .map((id) => (id ? materialsById[id] : undefined))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  if (picks.length === 0) {
    return { effect: "heal", hearts: 0, durationSeconds: 0 };
  }

  // parte de dragao (chifre): substitui a duracao inteira, nao soma (secao 5)
  const dragonHorn = picks.find((m) => m.overridesDurationSeconds !== undefined);

  // agrupa pontos por efeito -> por material (pra saber quantos TIPOS distintos
  // de um mesmo efeito estao presentes, usado no bonus do Energizing)
  const pointsByEffect = new Map<EffectId, Map<string, number>>();
  for (const material of picks) {
    if (material.effect) {
      if (!pointsByEffect.has(material.effect)) {
        pointsByEffect.set(material.effect, new Map());
      }
      pointsByEffect.get(material.effect)!.set(material.id, material.points ?? 0);
    }
  }

  const distinctEffects = [...pointsByEffect.keys()];
  // 0 efeitos -> heal. 1 efeito -> esse efeito. 2+ efeitos diferentes -> se
  // anulam, vira heal (regra confirmada, secao 2.1).
  const effect: EffectId = distinctEffects.length === 1 ? distinctEffects[0] : "heal";

  let hearts = Math.round(picks.reduce((sum, m) => sum + m.hp, 0) * 2);
  if (effect === "extra-hearts") {
    hearts = Math.min(hearts, 30);
  }

  let durationSeconds = 0;
  let staminaWheels: number | undefined;

  if (dragonHorn) {
    durationSeconds = dragonHorn.overridesDurationSeconds!;
  } else if (effect in EFFECT_BASE_DURATION) {
    const seenIds = new Set<string>();
    let timeboost = 0;
    for (const material of picks) {
      if (!seenIds.has(material.id)) {
        seenIds.add(material.id);
        timeboost += material.durationSeconds;
      }
    }
    durationSeconds = (EFFECT_BASE_DURATION[effect] ?? 0) + 30 * picks.length + timeboost;
  } else if (effect === "restore-stamina" || effect === "extra-stamina") {
    const byMaterial = pointsByEffect.get(effect)!;
    let total = [...byMaterial.values()].reduce((sum, pts) => sum + pts, 0);
    if (effect === "restore-stamina") {
      // bonus fixo de +1 ao misturar 2+ tipos diferentes (testado manualmente)
      if (byMaterial.size >= 2) total += 1;
    } else if (total < 1 && byMaterial.size === 1) {
      // garantia minima de 1/5 quando e o unico ingrediente Enduring do prato
      total = 1;
    }
    staminaWheels = Math.round(total);
  }

  return { effect, hearts, durationSeconds, staminaWheels };
}
