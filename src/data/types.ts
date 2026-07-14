export type LocalizedText = { "pt-br": string; en: string };

export type EffectId =
  | "heal"
  | "extra-hearts" // Hearty
  | "restore-stamina" // Energizing
  | "extra-stamina" // Enduring
  | "attack" // Mighty
  | "defense" // Tough
  | "speed" // Hasty
  | "stealth" // Sneaky
  | "cold-resist" // Spicy
  | "heat-resist" // Chilly
  | "electric-resist" // Electro
  | "fireproof"; // Fireproof — só via inseto/parte de monstro em elixir, sem ingrediente de comida

export interface Material {
  id: string;
  name: LocalizedText;
  image: string; // caminho relativo dentro de public/assets, ex: "materials/apple_icon.png"
  hp: number; // valor cru de cura (antes de multiplicar por 2)
  effect?: EffectId; // se o material contribui pra algum efeito
  points?: number; // potência do efeito, só existe se "effect" existir (pode ser fracionário, ex: 0.5)
  durationSeconds: number; // duração extra que soma ao prato ao ser incluído (time boost / partes de dragão / reagente de elixir)
  overridesDurationSeconds?: number; // se presente, IGNORA a soma normal e fixa a duração total nesse valor (Chifre de Dragão)
  category?: string; // filtro futuro tipo "fruit", "mushroom", "monster-part"
  notes?: string; // observação livre, ex: valor aproximado/não confirmado
  vendors?: { location: string; price: number }[]; // pousadas/lojas onde dá pra comprar, com preço em rupees — não guarda estoque (reseta com o tempo, não é dado estável)
}

export interface IngredientSlot {
  materialIds: string[]; // um ou mais materiais que servem nesse slot (intercambiáveis)
  label?: LocalizedText; // opcional, texto tipo "Qualquer fruta" quando o slot é bem genérico
}

export interface Recipe {
  id: string;
  effect: EffectId;
  variantLabel: LocalizedText; // ex: "Tier 1" / "Tier 2" / "Tier 3", ou "+1 vigor" pra energizing/enduring
  name: LocalizedText; // nome do prato exibido
  hearts: number; // já calculado: soma(hp) × 2
  durationSeconds: number; // já calculado: soma das durações
  ingredients: IngredientSlot[]; // cada posição é um slot, pode ter mais de 1 material equivalente
  isGeneric?: boolean; // true = combo "coringa"/genérico, ordenado por último dentro do mesmo tier
  staminaWheels?: number; // só existe se effect for "restore-stamina"/"extra-stamina": total de 1/5 de roda (ex: 7 = 1 roda cheia + 2/5); renderizado via icons/energizing-N.svg ou icons/enduring-N.svg (N de 0 a 5, repete o ícone cheio pra cada roda inteira)
  notes?: string;
  image?: string; // caminho relativo dentro de public/assets, ex: "recipes/meat_skewer_icon.png"
}

export interface Effect {
  id: EffectId;
  name: LocalizedText;
  icon: string; // caminho relativo dentro de public/assets, ex: "icons/mighty.svg"
}
