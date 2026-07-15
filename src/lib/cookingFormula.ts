import type { EffectId, Material } from "../data/types";
import { materialsById } from "../data";

export interface DishResult {
  effect?: EffectId;
  hearts: number;
  durationSeconds: number | null;
  potency?: number | null;
  staminaWheels?: number;
  hasBonus?: boolean;
  isElixir?: boolean;
  sellPrice?: number;
}

// Efeitos que não usam duração — usam corações/rodas de estamina como resultado
// (docs/cooking-formula.md seção 4/6).
const NO_DURATION_EFFECTS = new Set<EffectId>([
  "extra-hearts",
  "extra-stamina",
  "restore-stamina",
]);

// Teto de potência por efeito (docs/cooking-formula.md seção 5).
const POTENCY_CEILING: Record<EffectId, number> = {
  "heat-resist": 2,
  "electric-resist": 3,
  "extra-stamina": 10,
  "restore-stamina": 15,
  fireproof: 2,
  speed: 3,
  "extra-hearts": 25,
  attack: 3,
  stealth: 3,
  "cold-resist": 2,
  defense: 3,
};

// Multiplicador de preço de venda por quantidade de cópias do mesmo material
// (docs/cooking-formula.md seção 8).
const SELL_PRICE_MULTIPLIER = [1.5, 1.8, 2.1, 2.4, 2.8];

// Efeitos cuja potência corresponde diretamente ao nível de tier (Low/Mid/High
// no jogo = potency 1/2/3, ou 1/2 pros dois que só têm 2 níveis) — ver
// docs/cooking-formula.md seção 5. `extra-hearts`/`extra-stamina`/
// `restore-stamina` também escalam por potência mas não são "tiers" nesse
// sentido (viram corações/vigor bônus, não nível de efeito).
const TIERED_EFFECTS = new Set<EffectId>([
  "attack",
  "defense",
  "electric-resist",
  "stealth",
  "speed",
  "cold-resist",
  "heat-resist",
]);

/**
 * Deriva o variantLabel "Tier N" a partir da potência calculada ao vivo, pro
 * badge "NV. X" (`tierCount()`) já existente na UI reconhecer sem precisar de
 * dado estático pré-cadastrado. Só se aplica a efeitos de TIERED_EFFECTS e só
 * a partir de potency >= 2 (potency 1 é o padrão implícito, sem badge).
 */
export function tierLabelForPotency(
  effect: EffectId | undefined,
  potency: number | null | undefined,
): { "pt-br": string; en: string } | undefined {
  if (!effect || !potency || potency < 2 || !TIERED_EFFECTS.has(effect)) {
    return undefined;
  }
  return { "pt-br": `Nível ${potency}`, en: `Tier ${potency}` };
}

const FAIRY_ID = "fairy";
const FAIRY_HEARTS_BONUS = 28;
// Corações da Poção de Fada quando só há Fada(s) na receita, sem mais nada —
// foge inteiramente da fórmula normal (docs/cooking-formula.md seção 7).
// Índice = quantidade de Fadas - 1; 4+ Fadas = cura total (sentinela 120).
const FAIRY_ONLY_HEARTS = [7, 17, 27, 120];
const ACORN_IDS = new Set(["acorn", "chickaloo-tree-nut"]);
const ACORN_FIRST_BONUS = 4;
const ACORN_REPEAT_BONUS = 2;

interface Group {
  material: Material;
  count: number;
}

function groupByMaterial(picks: Material[]): Group[] {
  const order: string[] = [];
  const countById = new Map<string, number>();
  for (const m of picks) {
    if (!countById.has(m.id)) order.push(m.id);
    countById.set(m.id, (countById.get(m.id) ?? 0) + 1);
  }
  return order.map((id) => ({
    material: materialsById[id],
    count: countById.get(id)!,
  }));
}

/**
 * Calcula o resultado ao vivo de uma combinação de até 5 materiais, seguindo
 * docs/cooking-formula.md (seções 2-8).
 */
export function computeDish(materialIds: (string | null)[]): DishResult {
  const picks = materialIds
    .map((id) => (id ? materialsById[id] : undefined))
    .filter((m): m is Material => Boolean(m));

  if (picks.length === 0) {
    return { hearts: 0, durationSeconds: null };
  }

  // Poção de Fada (Fada sozinha, 1 ou mais cópias, sem nenhum outro
  // ingrediente): mecânica própria, não passa pela fórmula geral (seção 7).
  if (picks.every((m) => m.id === FAIRY_ID)) {
    const hearts =
      FAIRY_ONLY_HEARTS[Math.min(picks.length, FAIRY_ONLY_HEARTS.length) - 1];
    return { hearts, durationSeconds: null };
  }

  const groups = groupByMaterial(picks);

  // 2. efeito: só definido se todos os materiais com `effect` concordarem.
  const effectsSeen = new Set<EffectId>();
  for (const m of picks) if (m.effect) effectsSeen.add(m.effect);
  const effect: EffectId | undefined =
    effectsSeen.size === 1 ? [...effectsSeen][0] : undefined;

  // 3. elixir vs. comida.
  const isElixir = picks.some((m) => m.forElixir);

  // 4. duração.
  let durationSeconds: number | null = null;
  if (effect && !NO_DURATION_EFFECTS.has(effect)) {
    durationSeconds = 0;
    for (const { material, count } of groups) {
      const firstValue =
        material.durationSecondsForFirstCopy ?? material.durationSeconds ?? 0;
      const restValue = material.durationSeconds ?? 0;
      durationSeconds += firstValue + restValue * (count - 1);
    }
  }

  // 5. potência.
  let potency: number | null = null;
  if (effect) {
    let total = 0;
    for (const { material, count } of groups) {
      if (Array.isArray(material.potency)) {
        const idx = Math.min(count, material.potency.length) - 1;
        total += material.potency[idx] ?? 0;
      } else if (typeof material.potency === "number") {
        total += material.potency * count;
      }
    }
    const ceiling = POTENCY_CEILING[effect];
    potency = ceiling !== undefined ? Math.min(total, ceiling) : total;
  }

  // 6. corações.
  let hearts: number;
  if (effect === "extra-hearts") {
    hearts = 120;
  } else {
    let sum = 0;
    const fairyCount = picks.filter((m) => m.id === FAIRY_ID).length;
    for (const { material, count } of groups) {
      if (material.id === FAIRY_ID || ACORN_IDS.has(material.id)) continue;
      if (isElixir) continue; // elixires não curam (exceto Fada, tratada abaixo)
      sum += 2 * material.hp * count;
    }
    for (const id of ACORN_IDS) {
      const count = groups.find((g) => g.material.id === id)?.count ?? 0;
      if (count > 0)
        sum += ACORN_FIRST_BONUS + ACORN_REPEAT_BONUS * (count - 1);
    }
    if (fairyCount > 0) {
      const onlyIngredientTotal = picks.length === 1;
      if (onlyIngredientTotal || fairyCount > 1 || isElixir) {
        sum += FAIRY_HEARTS_BONUS;
      }
    }
    // O acumulador acima está em quarto-de-coração cozido; Recipe.hearts usa
    // meio-coração, então divide por 2 (docs/cooking-formula.md seção 6).
    hearts = sum > 0 ? Math.round(sum / 2) : isElixir ? 0 : 1;
  }

  // rodas de estamina: mesma unidade da potência pra Enduring/Energizing.
  const staminaWheels =
    effect === "extra-stamina" || effect === "restore-stamina"
      ? (potency ?? 0)
      : undefined;

  const hasBonus = picks.some((m) => m.bonus);

  // 8. preço de venda.
  let sellPrice: number | undefined;
  if (groups.length > 0) {
    const rawTotal = groups.reduce((sum, { material, count }) => {
      const multiplier =
        SELL_PRICE_MULTIPLIER[
          Math.min(count, SELL_PRICE_MULTIPLIER.length) - 1
        ];
      return sum + material.sellPrice * multiplier;
    }, 0);
    sellPrice = Math.ceil(rawTotal / 10) * 10;
  }

  return {
    effect,
    hearts,
    durationSeconds,
    potency,
    staminaWheels,
    hasBonus,
    isElixir,
    sellPrice,
  };
}

export interface IngredientContribution {
  potency: number | null;
  durationSeconds: number | null;
}

/**
 * O que colocar `materialId` no slot `slotIndex` contribui pro prato, dado o
 * resto da seleção atual — usado no seletor de ingrediente do Criador de
 * Receitas pra mostrar "quanto essa escolha vale" antes de confirmar (ex: 2x
 * Libélula Gélida já escolhida, olhando a 3ª cópia: quanto de potência ela
 * completa e quanto de duração essa cópia especificamente soma).
 *
 * Potência: mostra o total da tabela pra quantidade resultante (não é um
 * delta — repetir além da 1ª cópia não soma nada extra à parte, a posição da
 * tabela já embute o efeito da contagem total, seção 5 da fórmula).
 * Duração: mostra o quanto ESSA cópia especificamente soma (primeira cópia
 * usa durationSecondsForFirstCopy se existir; demais cópias usam
 * durationSeconds normal) — aqui sim cada cópia soma linear.
 */
export function previewIngredientContribution(
  materialId: string,
  currentSelection: (string | null)[],
  slotIndex: number,
): IngredientContribution {
  const material = materialsById[materialId];
  if (!material?.effect) return { potency: null, durationSeconds: null };

  const existingCount = currentSelection.filter(
    (id, index) => index !== slotIndex && id === materialId,
  ).length;
  const newCount = existingCount + 1;

  let potency: number | null = null;
  if (Array.isArray(material.potency)) {
    const idx = Math.min(newCount, material.potency.length) - 1;
    potency = material.potency[idx] ?? null;
  } else if (typeof material.potency === "number") {
    potency = material.potency * newCount;
  }

  const durationSeconds =
    newCount === 1
      ? (material.durationSecondsForFirstCopy ?? material.durationSeconds ?? null)
      : (material.durationSeconds ?? null);

  return { potency, durationSeconds };
}
