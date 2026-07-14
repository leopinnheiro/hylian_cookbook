export type LocalizedText = { "pt-br": string; en: string };

export type EffectId =
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
  | "fireproof"; // Fireproof

// Tabela de potência indexada por quantidade de cópias do mesmo ingrediente
// na receita (posição 0 = 1 cópia, posição 4 = 5 cópias). Ex: Endura Shroom = [1,1,1,2,2].
// Materiais com `forElixir: true` (viram elixir) têm só 4 posições — uma panela
// só forma elixir válido com pelo menos +1 ingrediente além do bicho-efeito,
// então nunca cabem 5 cópias do mesmo bicho numa receita válida (ver
// docs/cooking-formula.md seção 5).
// Quando o material soma potência em vez de indexar por tabela (raro), usar um
// number simples — ver `PotencyAccumulation` no comentário de Material.potency.
export type PotencyTable =
  | [number, number, number, number, number]
  | [number, number, number, number];

export interface Material {
  id: string;
  name: LocalizedText;
  image: string; // caminho relativo dentro de public/assets, ex: "materials/apple_icon.png"

  // Corações crus recuperados ao comer sem cozinhar (valor em "quartos de coração").
  // NÃO multiplique por 2 aqui — a fórmula de cozimento (ver Recipe) já faz isso,
  // e tem exceções hardcoded por id que ignoram esse campo completamente
  // (materiais especiais tipo Rock Salt e Monster Extract no jogo original).
  hp: number;

  // Se o material contribui pra algum efeito de prato.
  effect?: EffectId;

  // Potência do efeito. Pode ser:
  // - PotencyTable: indexado por (quantidade de cópias na receita - 1). Caso mais comum
  //   pra ingredientes "puros" de um efeito (cogumelos, ervas, frutas com efeito).
  // - number: valor fixo que SOMA a cada cópia adicional na receita, em vez de indexar
  //   uma tabela (usado por poucos materiais "aditivos").
  // Só existe se `effect` existir.
  potency?: PotencyTable | number;

  // Segundos de duração que esse ingrediente soma ao prato quando NÃO é a primeira
  // cópia dele na receita (ou quando não há regra especial de "primeira cópia").
  durationSeconds?: number;

  // Se presente, esse valor substitui `durationSeconds` apenas na primeira cópia
  // desse ingrediente na receita; cópias extras do mesmo ingrediente voltam a usar
  // `durationSeconds` normalmente. Não é um "override total" da receita — é só
  // uma regra de primeira-ocorrência por ingrediente.
  durationSecondsForFirstCopy?: number;

  // True para itens que tornam a receita um elixir (insetos, partes de monstro).
  // Elixires não recuperam corações (hp final = 0), exceto exceções hardcoded
  // por id no jogo original (ex.: Monster Extract).
  forElixir?: boolean;

  // True para itens que dão um bônus aleatório extra ao prato (ex.: Fada).
  bonus?: boolean;

  sellPrice: number; // preço-base de venda do material cru, usado no cálculo do preço do prato
  category?: string; // filtro futuro tipo "fruit", "mushroom", "monster-part"
  notes?: string; // observação livre, ex: valor aproximado/não confirmado
  vendors?: { location: string; price: number }[]; // pousadas/lojas onde dá pra comprar — não guarda estoque (reseta com o tempo, não é dado estável)
}

export interface IngredientSlot {
  materialIds: string[]; // um ou mais materiais que servem nesse slot (intercambiáveis)
  label?: LocalizedText; // opcional, texto tipo "Qualquer fruta" quando o slot é bem genérico
  // true = esse slot pode ficar vazio (0 itens) e o prato ainda conta como "completo".
  // Usado quando o mesmo prato aceita 2 formas válidas que só diferem por um
  // ingrediente extra opcional (ex: Tônico Feérico = só Fada, OU Fada + parte
  // de monstro — o slot de parte de monstro é opcional).
  optional?: boolean;
}

// Template base de um prato (1 por nome de prato, sem separar por tier/efeito/quantidade —
// igual ao catálogo do site original). O Criador de Receitas usa isso + a escolha real de
// materiais dentro de cada slot pra calcular um `Recipe` completo na hora (ver docs/cooking-formula.md).
export interface RecipeTemplate {
  id: string;
  name: LocalizedText;
  ingredients: IngredientSlot[]; // cada posição é um slot, pode ter mais de 1 material equivalente
  notes?: string;
  image?: string; // caminho relativo dentro de public/assets, ex: "recipes/meat_skewer_icon.png"
}

export interface Recipe {
  id: string;

  // Opcional: se os ingredientes escolhidos tiverem categorias de efeito
  // conflitantes entre si, a receita não tem efeito (vira "prato comum"),
  // mas ainda é cozinhável e ainda recupera hp normalmente.
  effect?: EffectId;

  variantLabel: LocalizedText; // ex: "Tier 1" / "Tier 2" / "Tier 3", ou "+1 vigor" pra energizing/enduring
  name: LocalizedText; // nome do prato exibido
  ingredients: IngredientSlot[]; // cada posição é um slot, pode ter mais de 1 material equivalente

  // --- campos abaixo são o RESULTADO computado pela fórmula de cozimento, não input bruto ---

  // Corações do prato final. Regras especiais (não é soma simples):
  // - effect === "heal" (Hearty) → sempre valor de cura total (sentinela de full-heal).
  // - se a receita virar elixir (algum ingrediente com forElixir) → 0 hp,
  //   salvo exceções hardcoded por material específico.
  // - senão, soma dos hp dobrados por ingrediente, com exceções hardcoded por id.
  hearts: number;

  // Nulo quando effect for "heal" (Hearty), "extra-stamina" (Enduring) ou
  // "restore-stamina" (Energizing) — esses efeitos não usam duração, e sim
  // corações/estamina como o próprio resultado.
  durationSeconds: number | null;

  // Potência total do efeito, somada/indexada pelos ingredientes (ver Material.potency),
  // com teto máximo por categoria de efeito. Nulo se não houver `effect`.
  potency?: number | null;

  isGeneric?: boolean; // true = combo "coringa"/genérico, ordenado por último dentro do mesmo tier

  // Só existe se effect for "restore-stamina"/"extra-stamina": total de 1/5 de roda
  // (ex: 7 = 1 roda cheia + 2/5); renderizado via icons/energizing-N.svg ou
  // icons/enduring-N.svg (N de 0 a 5, repete o ícone cheio pra cada roda inteira).
  staminaWheels?: number;

  // True quando algum ingrediente com `bonus` (ex.: Fada) foi usado — indica que
  // o prato ganha um bônus aleatório extra além do efeito calculado.
  hasBonus?: boolean;

  // True quando a receita contém algum ingrediente com `forElixir` — vira elixir
  // em vez de prato de comida (não recupera hp, salvo exceções).
  isElixir?: boolean;

  sellPrice?: number; // preço de venda do prato, calculado (arredondado pra cima, múltiplo de 10)

  notes?: string;
  image?: string; // caminho relativo dentro de public/assets, ex: "recipes/meat_skewer_icon.png"
}

export interface Effect {
  id: EffectId;
  name: LocalizedText;
  icon: string; // caminho relativo dentro de public/assets, ex: "icons/mighty.svg"
}
