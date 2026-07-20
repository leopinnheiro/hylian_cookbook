import type { LocalizedText } from "./types";

// Curadoria de combos priorizando facilidade de obtenção dos ingredientes
// (tudo farmável em bloco, sem monstro raro nem item único) — não é um
// RecipeTemplate novo, só combinações prontas dos templates que já existem
// em recipes.ts (Cozido de Frutas, Vegetais Silvestres Salteados, Espeto de
// Cogumelo), cada uma com uma dica de onde farmar. Fonte: consenso de guias
// públicos de BOTW (thegamer.com, gamepressunited.com, screenrant.com —
// pesquisado em 2026-07), não é dado auditado contra o jogo como o resto do
// catálogo.
export interface RecommendedCombo {
  id: string;
  materialIds: string[];
  tip: LocalizedText;
}

export const recommendedCombos: RecommendedCombo[] = [
  {
    id: "full-heal-durian",
    materialIds: Array(5).fill("hearty-durian"),
    tip: {
      "pt-br":
        "Cura total + corações extras. Durião nobre cresce em bloco na floresta de Faron — farm rápido, sem precisar caçar.",
      en: "Full heal + extra hearts. Hearty Durian grows in clusters in the Faron forest — fast farm, no hunting needed.",
    },
  },
  {
    id: "attack-bananas",
    materialIds: Array(5).fill("mighty-bananas"),
    tip: {
      "pt-br":
        "Ataque Nível 3. Bananeiras valentes cobrem a Eventide Island inteira, ou compra fácil na Kara Kara Bazaar.",
      en: "Attack Tier 3. Mighty Banana trees cover all of Eventide Island, or buy cheap at Kara Kara Bazaar.",
    },
  },
  {
    id: "stamina-endura-carrot",
    materialIds: Array(5).fill("endura-carrot"),
    tip: {
      "pt-br":
        "Vigor + corações extras. Cenoura Endura dá em bloco perto de Fontes das Grandes Fadas e no Monte Satori.",
      en: "Stamina + extra hearts. Endura Carrot grows in clusters near Great Fairy Fountains and Satori Mountain.",
    },
  },
  {
    id: "attack-razorshroom-elixir",
    materialIds: [
      "razorshroom",
      "razorshroom",
      "razorshroom",
      "bladed-rhino-beetle",
      "bokoblin-fang",
    ],
    tip: {
      "pt-br":
        "Elixir Poderoso Nível 3. Talhamelo cresce em bloco perto de montanhas/penhascos e Bokoblins largam presa e besouro brigão o tempo todo — tudo fácil de estocar.",
      en: "Mighty Elixir Tier 3. Razorshroom grows in clusters near mountains/cliffs, and Bokoblins reliably drop fang and bladed rhino beetle — everything easy to stock up.",
    },
  },
  {
    id: "defense-fortified-pumpkin",
    materialIds: Array(5).fill("fortified-pumpkin"),
    tip: {
      "pt-br":
        "Defesa Nível 3. Abóbora fortificada é plantação comum, fácil de achar em quantidade perto de fazendas.",
      en: "Defense Tier 3. Fortified Pumpkin is a common crop, easy to find in bulk near farmland.",
    },
  },
  {
    id: "speed-rushroom",
    materialIds: Array(5).fill("rushroom"),
    tip: {
      "pt-br":
        "Velocidade Nível 3. Rushroom (roxo) é comum em montanha e penhasco, principalmente Gerudo Highlands e Hyrule Ridge.",
      en: "Speed Tier 3. Rushroom (purple) is common on mountains and cliffs, mainly Gerudo Highlands and Hyrule Ridge.",
    },
  },
  {
    id: "stealth-silent-shroom",
    materialIds: Array(5).fill("silent-shroom"),
    tip: {
      "pt-br":
        "Furtividade Nível 3. Silent Shroom cresce em bloco em áreas de floresta densa/noturna — farm de uma vez só.",
      en: "Stealth Tier 3. Silent Shroom grows in clusters in dense/nighttime forest areas — one-stop farm.",
    },
  },
];
