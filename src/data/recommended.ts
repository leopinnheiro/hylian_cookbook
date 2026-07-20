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
    id: "speed-fleet-lotus-seeds",
    materialIds: Array(4).fill("fleet-lotus-seeds"),
    tip: {
      "pt-br":
        "Velocidade Nível 3. Grãos de lótus-fugaz boiam em bloco em qualquer lago/rio (fartos perto do Domínio Zora) — 4 já batem o teto de potência, sem precisar de Rushroom.",
      en: "Speed Tier 3. Fleet-Lotus Seeds float in clusters on any pond/river (plentiful near Zora's Domain) — 4 alone already hit the potency ceiling, no Rushroom needed.",
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
  {
    id: "defense-elixir",
    materialIds: [
      "fortified-pumpkin",
      "fortified-pumpkin",
      "fortified-pumpkin",
      "ironshroom",
      "bokoblin-fang",
    ],
    tip: {
      "pt-br":
        "Elixir Blindado Nível 3. Abóbora fortificada (plantação comum) e Ferromelo (Death Mountain e áreas rochosas) são fáceis de estocar, e Bokoblin comum larga presa sempre.",
      en: "Tough Elixir Tier 3. Fortified Pumpkin (common crop) and Ironshroom (Death Mountain and rocky areas) are easy to stock up, and regular Bokoblins always drop fang.",
    },
  },
  {
    id: "electric-resist-elixir",
    materialIds: ["zapshroom", "zapshroom", "zapshroom", "bokoblin-fang"],
    tip: {
      "pt-br":
        "Elixir Elétrico Nível 3. Aterramelo cresce em bloco no Deserto Gerudo/Wasteland (dá pra comprar no Kara Kara Bazaar) — fácil de estocar 3.",
      en: "Electro Elixir Tier 3. Zapshroom grows in clusters in the Gerudo Desert/Wasteland (also sold at Kara Kara Bazaar) — easy to stock up 3.",
    },
  },
  {
    id: "stealth-elixir",
    materialIds: [
      "silent-shroom",
      "silent-shroom",
      "silent-shroom",
      "blue-nightshade",
      "bokoblin-fang",
    ],
    tip: {
      "pt-br":
        "Elixir Furtivo Nível 3. Silent Shroom (floresta densa/noturna) e Beladona Azul (comum perto de vilarejos à noite) são fáceis de achar em bloco.",
      en: "Sneaky Elixir Tier 3. Silent Shroom (dense/nighttime forest) and Blue Nightshade (common near villages at night) are easy to find in bulk.",
    },
  },
  {
    id: "cold-resist-elixir",
    materialIds: ["sunshroom", "sunshroom", "sunshroom", "bokoblin-fang"],
    tip: {
      "pt-br":
        "Elixir Apimentado Nível 2 (teto do efeito). Flamelo cresce em bloco perto do Monte da Morte e áreas vulcânicas — fácil de estocar.",
      en: "Spicy Elixir Tier 2 (effect ceiling). Sunshroom grows in clusters near Death Mountain and volcanic areas — easy to stock up.",
    },
  },
  {
    id: "heat-resist-elixir",
    materialIds: ["chillshroom", "chillshroom", "chillshroom", "bokoblin-fang"],
    tip: {
      "pt-br":
        "Elixir Gélido Nível 2 (teto do efeito). Glacimelo cresce em bloco na região de Hebra e outras áreas nevadas — fácil de estocar.",
      en: "Chilly Elixir Tier 2 (effect ceiling). Chillshroom grows in clusters around the Hebra region and other snowy areas — easy to stock up.",
    },
  },
  {
    id: "hearts-4-herb",
    materialIds: Array(2).fill("hyrule-herb"),
    tip: {
      "pt-br":
        "4 corações. Capim hyruliano cresce praticamente em toda estrada/campina de Hyrule — o ingrediente mais fácil do jogo de achar.",
      en: "4 hearts. Hyrule Herb grows along almost every road and field in Hyrule — the easiest ingredient in the game to find.",
    },
  },
  {
    id: "hearts-5-apple",
    materialIds: Array(5).fill("apple"),
    tip: {
      "pt-br":
        "5 corações. Maçã cai de árvores perto de quase todo vilarejo/estábulo — fácil de estocar em quantidade.",
      en: "5 hearts. Apples fall from trees near almost every village/stable — easy to stock up in bulk.",
    },
  },
  {
    id: "hearts-6-fish",
    materialIds: Array(3).fill("hyrule-bass"),
    tip: {
      "pt-br":
        "6 corações. Robalo hyruliano é o peixe mais comum em rios e lagos — pesca rápida com lança ou Magnesis.",
      en: "6 hearts. Hyrule Bass is the most common fish in rivers and lakes — quick to catch with a spear or Magnesis.",
    },
  },
  {
    id: "hearts-7-meat",
    materialIds: ["raw-prime-meat", "raw-meat", "raw-meat"],
    tip: {
      "pt-br":
        "7 corações. Carne de segunda e de terceira vêm de qualquer javali/veado/coelho caçado — sem precisar de bicho raro.",
      en: "7 hearts. Raw Prime Meat and Raw Meat drop from any boar/deer/rabbit you hunt — no rare creature needed.",
    },
  },
  {
    id: "hearts-8-drumstick",
    materialIds: Array(4).fill("raw-bird-drumstick"),
    tip: {
      "pt-br":
        "8 corações. Coxa cai de qualquer ave abatida (galinhas-do-mato, patos) — fácil de juntar 4 rápido.",
      en: "8 hearts. Raw Bird Drumstick drops from any bird you take down (grouse, ducks) — easy to gather 4 quickly.",
    },
  },
];
