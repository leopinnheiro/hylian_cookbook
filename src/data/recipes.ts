import type { Recipe } from "./types";

// hearts = soma(hp) x 2 (secao 1). duration = base do efeito (uma vez, se houver
// ingrediente daquele efeito) + 30s x quantidade de ingredientes + time boosts/partes
// de dragao/reagente de elixir (secoes 2, 4, 5 e 6). heal / extra-hearts / restore-stamina /
// extra-stamina nao tem duracao de status (ficam com durationSeconds: 0).
//
// Gerado a partir da tabela "Meals" do zeldawiki (fonte de verdade) via
// scripts/build_recipes.py -- ver scripts/wiki_dumps/zeldawiki_structured.json
// pros dados brutos. Elixirs mantidos conforme auditoria manual anterior.

export const recipes: Recipe[] = [
  {
    id: "apple-pie-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Torta de maçã", en: "Apple Pie" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["apple"],
      },
    ],
    image: "recipes/apple_pie_icon.png",
  },
  {
    id: "carrot-cake-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Bolo de cenoura Revitalizante", en: "Carrot Cake (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["endura-carrot"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/carrot_cake_icon.png",
  },
  {
    id: "carrot-cake-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Bolo de cenoura Ligeiro", en: "Carrot Cake (Hasty)" },
    hearts: 4,
    durationSeconds: 720,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["swift-carrot"],
      },
    ],
    image: "recipes/carrot_cake_icon.png",
  },
  {
    id: "carrot-stew-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Ensopado de cenoura Revitalizante", en: "Carrot Stew (Enduring)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/carrot_stew_icon.png",
  },
  {
    id: "carrot-stew-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Ensopado de cenoura Ligeiro", en: "Carrot Stew (Hasty)" },
    hearts: 6,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["swift-carrot"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
    ],
    image: "recipes/carrot_stew_icon.png",
  },
  {
    id: "clam-chowder-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Chowder de molusco Vivaz", en: "Clam Chowder (Hearty)" },
    hearts: 20,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["hearty-blueshell-snail"],
      },
    ],
    image: "recipes/clam_chowder_icon.png",
  },
  {
    id: "crab-omelet-with-rice-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Omelete de caranguejo com arroz Robusto", en: "Crab Omelet with Rice (Mighty)" },
    hearts: 6,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["razorclaw-crab"],
      },
    ],
    image: "recipes/crab_omelet_with_rice_icon.png",
  },
  {
    id: "crab-omelet-with-rice-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Omelete de caranguejo com arroz Protetor", en: "Crab Omelet with Rice (Tough)" },
    hearts: 6,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["ironshell-crab"],
      },
    ],
    image: "recipes/crab_omelet_with_rice_icon.png",
  },
  {
    id: "crab-omelet-with-rice-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Omelete de caranguejo com arroz Revigorante", en: "Crab Omelet with Rice (Energizing)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["bright-eyed-crab"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/crab_omelet_with_rice_icon.png",
  },
  {
    id: "crab-risotto-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Risoto de caranguejo Robusto", en: "Crab Risotto (Mighty)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["razorclaw-crab"],
      },
    ],
    image: "recipes/crab_risotto_icon.png",
  },
  {
    id: "crab-risotto-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Risoto de caranguejo Protetor", en: "Crab Risotto (Tough)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["ironshell-crab"],
      },
    ],
    image: "recipes/crab_risotto_icon.png",
  },
  {
    id: "crab-risotto-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Risoto de caranguejo Revigorante", en: "Crab Risotto (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["bright-eyed-crab"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/crab_risotto_icon.png",
  },
  {
    id: "crab-stir-fry-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Caranguejo salteado Robusto", en: "Crab Stir-Fry (Mighty)" },
    hearts: 2,
    durationSeconds: 380,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["razorclaw-crab"],
      },
    ],
    image: "recipes/crab_stir-fry_icon.png",
  },
  {
    id: "crab-stir-fry-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Caranguejo salteado Protetor", en: "Crab Stir-Fry (Tough)" },
    hearts: 2,
    durationSeconds: 380,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["ironshell-crab"],
      },
    ],
    image: "recipes/crab_stir-fry_icon.png",
  },
  {
    id: "crab-stir-fry-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Caranguejo salteado Revigorante", en: "Crab Stir-Fry (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["bright-eyed-crab"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/crab_stir-fry_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Creme de cogumelo Robusto", en: "Cream of Mushroom Soup (Mighty)" },
    hearts: 6,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["razorshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Creme de cogumelo Picante", en: "Cream of Mushroom Soup (Spicy)" },
    hearts: 6,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["sunshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Creme de cogumelo Protetor", en: "Cream of Mushroom Soup (Tough)" },
    hearts: 6,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["ironshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Creme de cogumelo Isolante", en: "Cream of Mushroom Soup (Electro)" },
    hearts: 6,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["zapshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Creme de cogumelo Vivaz", en: "Cream of Mushroom Soup (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Creme de cogumelo Revitalizante", en: "Cream of Mushroom Soup (Enduring)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-shroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Creme de cogumelo", en: "Cream of Mushroom Soup" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-shroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Creme de cogumelo Gelado", en: "Cream of Mushroom Soup (Chilly)" },
    hearts: 6,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["chillshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Creme de cogumelo Revigorante", en: "Cream of Mushroom Soup (Energizing)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["stamella-shroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Creme de cogumelo Ligeiro", en: "Cream of Mushroom Soup (Hasty)" },
    hearts: 6,
    durationSeconds: 300,
    ingredients: [
      {
        materialIds: ["rushroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-mushroom-soup-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Creme de cogumelo Furtivo", en: "Cream of Mushroom Soup (Sneaky)" },
    hearts: 6,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["silent-shroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_mushroom_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Creme de vegetais Robusto", en: "Cream of Vegetable Soup (Mighty)" },
    hearts: 4,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["mighty-thistle"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Creme de vegetais Picante", en: "Cream of Vegetable Soup (Spicy)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["warm-safflina"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Creme de vegetais Protetor", en: "Cream of Vegetable Soup (Tough)" },
    hearts: 4,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["armoranth"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Creme de vegetais Isolante", en: "Cream of Vegetable Soup (Electro)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["electric-safflina"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Creme de vegetais Vivaz", en: "Cream of Vegetable Soup (Hearty)" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Creme de vegetais", en: "Cream of Vegetable Soup" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Creme de vegetais Gelado", en: "Cream of Vegetable Soup (Chilly)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["cool-safflina"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Creme de vegetais Ligeiro", en: "Cream of Vegetable Soup (Hasty)" },
    hearts: 4,
    durationSeconds: 270,
    ingredients: [
      {
        materialIds: ["swift-violet"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "cream-of-vegetable-soup-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Creme de vegetais Furtivo", en: "Cream of Vegetable Soup (Sneaky)" },
    hearts: 4,
    durationSeconds: 330,
    ingredients: [
      {
        materialIds: ["blue-nightshade", "silent-princess"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/cream_of_vegetable_soup_icon.png",
  },
  {
    id: "creamy-heart-soup-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Sopa cremosa do coração", en: "Creamy Heart Soup" },
    hearts: 18,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: [],
      },
      {
        materialIds: [],
      },
      {
        materialIds: [],
      },
      {
        materialIds: ["fresh-milk"],
      },
    ],
    notes: "Essa combinação sempre tem ingredientes de efeitos diferentes conflitando entre si, então o prato nunca carrega efeito de status, só cura.",
    image: "recipes/creamy_heart_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Sopa cremosa de carne Robusto", en: "Creamy Meat Soup (Mighty)" },
    hearts: 8,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["mighty-thistle"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Sopa cremosa de carne Picante", en: "Creamy Meat Soup (Spicy)" },
    hearts: 8,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["warm-safflina"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Sopa cremosa de carne Protetor", en: "Creamy Meat Soup (Tough)" },
    hearts: 8,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["armoranth"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Sopa cremosa de carne Isolante", en: "Creamy Meat Soup (Electro)" },
    hearts: 8,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["electric-safflina"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Sopa cremosa de carne Vivaz", en: "Creamy Meat Soup (Hearty)" },
    hearts: 18,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Sopa cremosa de carne", en: "Creamy Meat Soup" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Sopa cremosa de carne Gelado", en: "Creamy Meat Soup (Chilly)" },
    hearts: 8,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["cool-safflina"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Sopa cremosa de carne Ligeiro", en: "Creamy Meat Soup (Hasty)" },
    hearts: 8,
    durationSeconds: 300,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["swift-violet"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-meat-soup-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Sopa cremosa de carne Furtivo", en: "Creamy Meat Soup (Sneaky)" },
    hearts: 8,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["blue-nightshade", "silent-princess"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/creamy_meat_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Robusto", en: "Creamy Seafood Soup (Mighty)" },
    hearts: 6,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (Mighty)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Picante", en: "Creamy Seafood Soup (Spicy)" },
    hearts: 6,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["sizzlefin-trout"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Protetor", en: "Creamy Seafood Soup (Tough)" },
    hearts: 6,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (Tough)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Isolante", en: "Creamy Seafood Soup (Electro)" },
    hearts: 6,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["voltfin-trout"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Vivaz", en: "Creamy Seafood Soup (Hearty)" },
    hearts: 16,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (Hearty)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Sopa cremosa de frutos do mar", en: "Creamy Seafood Soup" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Gelado", en: "Creamy Seafood Soup (Chilly)" },
    hearts: 6,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["chillfin-trout"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Revigorante", en: "Creamy Seafood Soup (Energizing)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (Energizing)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Ligeiro", en: "Creamy Seafood Soup (Hasty)" },
    hearts: 6,
    durationSeconds: 300,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
      {
        materialIds: ["swift-violet"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "creamy-seafood-soup-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Sopa cremosa de frutos do mar Furtivo", en: "Creamy Seafood Soup (Sneaky)" },
    hearts: 6,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (Sneaky)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/creamy_seafood_soup_icon.png",
  },
  {
    id: "curry-pilaf-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Pilaf de curry", en: "Curry Pilaf" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/curry_pilaf_icon.png",
  },
  {
    id: "curry-rice-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Arroz ao curry", en: "Curry Rice" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/curry_rice_icon.png",
  },
  {
    id: "egg-pudding-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Pudim de ovo", en: "Egg Pudding" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/egg_pudding_icon.png",
  },
  {
    id: "egg-tart-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Torta de ovo", en: "Egg Tart" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/egg_tart_icon.png",
  },
  {
    id: "fish-pie-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Torta de peixe Robusto", en: "Fish Pie (Mighty)" },
    hearts: 4,
    durationSeconds: 350,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (Mighty)" },
      },
    ],
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-pie-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Torta de peixe Picante", en: "Fish Pie (Spicy)" },
    hearts: 4,
    durationSeconds: 450,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["sizzlefin-trout"],
      },
    ],
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-pie-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Torta de peixe Protetor", en: "Fish Pie (Tough)" },
    hearts: 4,
    durationSeconds: 350,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (Tough)" },
      },
    ],
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-pie-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Torta de peixe Isolante", en: "Fish Pie (Electro)" },
    hearts: 4,
    durationSeconds: 450,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["voltfin-trout"],
      },
    ],
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-pie-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Torta de peixe Vivaz", en: "Fish Pie (Hearty)" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (Hearty)" },
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-pie-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Torta de peixe", en: "Fish Pie" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
    ],
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-pie-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Torta de peixe Gelado", en: "Fish Pie (Chilly)" },
    hearts: 4,
    durationSeconds: 450,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["chillfin-trout"],
      },
    ],
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-pie-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Torta de peixe Revigorante", en: "Fish Pie (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (Energizing)" },
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-pie-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Torta de peixe Furtivo", en: "Fish Pie (Sneaky)" },
    hearts: 4,
    durationSeconds: 420,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (Sneaky)" },
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_pie_icon.png",
  },
  {
    id: "fish-skewer-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Espeto de peixe Robusto", en: "Fish Skewer (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["mighty-carp", "mighty-porgy"],
        label: { "pt-br": "Qualquer peixe (Robusto)", en: "Any Fish (Mighty)" },
      },
    ],
    notes: "Usando Mighty Porgy em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-skewer-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Espeto de peixe Picante", en: "Fish Skewer (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["sizzlefin-trout"],
      },
    ],
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-skewer-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Espeto de peixe Protetor", en: "Fish Skewer (Tough)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["armored-carp", "armored-porgy"],
        label: { "pt-br": "Qualquer peixe (Protetor)", en: "Any Fish (Tough)" },
      },
    ],
    notes: "Usando Armored Porgy em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-skewer-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Espeto de peixe Isolante", en: "Fish Skewer (Electro)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["voltfin-trout"],
      },
    ],
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-skewer-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Espeto de peixe Vivaz", en: "Fish Skewer (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-bass", "hearty-salmon"],
        label: { "pt-br": "Qualquer peixe (Vivaz)", en: "Any Fish (Hearty)" },
      },
    ],
    notes: "Usando Hearty Salmon em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-skewer-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Espeto de peixe", en: "Fish Skewer" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer peixe (sem efeito)", en: "Any Fish (no effect)" },
      },
    ],
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-skewer-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Espeto de peixe Gelado", en: "Fish Skewer (Chilly)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["chillfin-trout"],
      },
    ],
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-skewer-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Espeto de peixe Revigorante", en: "Fish Skewer (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["staminoka-bass"],
      },
    ],
    staminaWheels: 5,
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-skewer-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Espeto de peixe Furtivo", en: "Fish Skewer (Sneaky)" },
    hearts: 2,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["stealthfin-trout"],
      },
    ],
    image: "recipes/fish_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Espeto de peixe com cogumelo Robusto", en: "Fish and Mushroom Skewer (Mighty)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["mighty-carp", "mighty-porgy"],
        label: { "pt-br": "Qualquer peixe (Robusto)", en: "Any Fish (Mighty)" },
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    notes: "Usando Mighty Porgy em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Espeto de peixe com cogumelo Picante", en: "Fish and Mushroom Skewer (Spicy)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["sizzlefin-trout"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Espeto de peixe com cogumelo Protetor", en: "Fish and Mushroom Skewer (Tough)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["armored-carp", "armored-porgy"],
        label: { "pt-br": "Qualquer peixe (Protetor)", en: "Any Fish (Tough)" },
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    notes: "Usando Armored Porgy em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Espeto de peixe com cogumelo Isolante", en: "Fish and Mushroom Skewer (Electro)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["voltfin-trout"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Espeto de peixe com cogumelo Vivaz", en: "Fish and Mushroom Skewer (Hearty)" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-bass", "hearty-salmon"],
        label: { "pt-br": "Qualquer peixe (Vivaz)", en: "Any Fish (Hearty)" },
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    notes: "Usando Hearty Salmon em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Espeto de peixe com cogumelo Revitalizante", en: "Fish and Mushroom Skewer (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer peixe (sem efeito)", en: "Any Fish (no effect)" },
      },
      {
        materialIds: ["endura-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Espeto de peixe com cogumelo", en: "Fish and Mushroom Skewer" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer peixe (sem efeito)", en: "Any Fish (no effect)" },
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Espeto de peixe com cogumelo Gelado", en: "Fish and Mushroom Skewer (Chilly)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["chillfin-trout"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Espeto de peixe com cogumelo Revigorante", en: "Fish and Mushroom Skewer (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["staminoka-bass"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    staminaWheels: 5,
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Espeto de peixe com cogumelo Ligeiro", en: "Fish and Mushroom Skewer (Hasty)" },
    hearts: 4,
    durationSeconds: 90,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer peixe (sem efeito)", en: "Any Fish (no effect)" },
      },
      {
        materialIds: ["rushroom"],
      },
    ],
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fish-and-mushroom-skewer-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Espeto de peixe com cogumelo Furtivo", en: "Fish and Mushroom Skewer (Sneaky)" },
    hearts: 4,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["stealthfin-trout"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fish_and_mushroom_skewer_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Cogumelo salteado aromático Robusto", en: "Fragrant Mushroom Sauté (Mighty)" },
    hearts: 2,
    durationSeconds: 380,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["razorshroom"],
      },
    ],
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Cogumelo salteado aromático Picante", en: "Fragrant Mushroom Sauté (Spicy)" },
    hearts: 2,
    durationSeconds: 480,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["sunshroom"],
      },
    ],
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Cogumelo salteado aromático Protetor", en: "Fragrant Mushroom Sauté (Tough)" },
    hearts: 2,
    durationSeconds: 380,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["ironshroom"],
      },
    ],
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Cogumelo salteado aromático Isolante", en: "Fragrant Mushroom Sauté (Electro)" },
    hearts: 2,
    durationSeconds: 480,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["zapshroom"],
      },
    ],
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Cogumelo salteado aromático Vivaz", en: "Fragrant Mushroom Sauté (Hearty)" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Cogumelo salteado aromático Revitalizante", en: "Fragrant Mushroom Sauté (Enduring)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["endura-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Cogumelo salteado aromático", en: "Fragrant Mushroom Sauté" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Cogumelo salteado aromático Gelado", en: "Fragrant Mushroom Sauté (Chilly)" },
    hearts: 2,
    durationSeconds: 480,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["chillshroom"],
      },
    ],
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Cogumelo salteado aromático Revigorante", en: "Fragrant Mushroom Sauté (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["stamella-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Cogumelo salteado aromático Ligeiro", en: "Fragrant Mushroom Sauté (Hasty)" },
    hearts: 2,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["rushroom"],
      },
    ],
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fragrant-mushroom-saut-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Cogumelo salteado aromático Furtivo", en: "Fragrant Mushroom Sauté (Sneaky)" },
    hearts: 2,
    durationSeconds: 450,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["silent-shroom"],
      },
    ],
    image: "recipes/fragrant_mushroom_sauté_icon.png",
  },
  {
    id: "fried-bananas-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Bananas fritas Robusto", en: "Fried Bananas (Mighty)" },
    hearts: 4,
    durationSeconds: 620,
    ingredients: [
      {
        materialIds: ["mighty-bananas"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/fried_bananas_icon.png",
  },
  {
    id: "fried-egg-and-rice-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Ovo frito com arroz", en: "Fried Egg and Rice" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["bird-egg"],
      },
    ],
    image: "recipes/fried_egg_and_rice_icon.png",
  },
  {
    id: "fried-wild-greens-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Vegetais silvestres salteados Robusto", en: "Fried Wild Greens (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["mighty-thistle"],
      },
    ],
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Vegetais silvestres salteados Picante", en: "Fried Wild Greens (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["warm-safflina"],
      },
    ],
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Vegetais silvestres salteados Protetor", en: "Fried Wild Greens (Tough)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin", "armoranth"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Protetor)", en: "Any Vegetable, Herb, or Flower (Tough)" },
      },
    ],
    notes: "Usando Armoranth em vez de Fortified Pumpkin no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Vegetais silvestres salteados Isolante", en: "Fried Wild Greens (Electro)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["electric-safflina"],
      },
    ],
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Vegetais silvestres salteados Vivaz", en: "Fried Wild Greens (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Vivaz)", en: "Any Vegetable, Herb, or Flower (Hearty)" },
      },
    ],
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Vegetais silvestres salteados Revitalizante", en: "Fried Wild Greens (Enduring)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Vegetais silvestres salteados", en: "Fried Wild Greens" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Vegetais silvestres salteados Gelado", en: "Fried Wild Greens (Chilly)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["cool-safflina"],
      },
    ],
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Vegetais silvestres salteados Ligeiro", en: "Fried Wild Greens (Hasty)" },
    hearts: 2,
    durationSeconds: 60,
    ingredients: [
      {
        materialIds: ["swift-carrot", "swift-violet"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Ligeiro)", en: "Any Vegetable, Herb, or Flower (Hasty)" },
      },
    ],
    notes: "Usando Swift Violet em vez de Swift Carrot no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "fried-wild-greens-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Vegetais silvestres salteados Furtivo", en: "Fried Wild Greens (Sneaky)" },
    hearts: 2,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["blue-nightshade", "silent-princess"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Furtivo)", en: "Any Vegetable, Herb, or Flower (Sneaky)" },
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Robusto", en: "Copious Fried Wild Greens (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["mighty-thistle"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Picante", en: "Copious Fried Wild Greens (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["warm-safflina"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Protetor", en: "Copious Fried Wild Greens (Tough)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin", "armoranth"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Protetor)", en: "Any Vegetables, Herbs, or Flowers(4 different kinds) (Tough)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Armoranth em vez de Fortified Pumpkin no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Isolante", en: "Copious Fried Wild Greens (Electro)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["electric-safflina"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Vivaz", en: "Copious Fried Wild Greens (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Vivaz)", en: "Any Vegetables, Herbs, or Flowers(4 different kinds) (Hearty)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Revitalizante", en: "Copious Fried Wild Greens (Enduring)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
    ],
    isGeneric: true,
    staminaWheels: 2,
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados", en: "Copious Fried Wild Greens" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Gelado", en: "Copious Fried Wild Greens (Chilly)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["cool-safflina"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Ligeiro", en: "Copious Fried Wild Greens (Hasty)" },
    hearts: 2,
    durationSeconds: 60,
    ingredients: [
      {
        materialIds: ["swift-carrot", "swift-violet"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Ligeiro)", en: "Any Vegetables, Herbs, or Flowers(4 different kinds) (Hasty)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Swift Violet em vez de Swift Carrot no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "copious-fried-wild-greens-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Fartura de vegetais silvestres salteados Furtivo", en: "Copious Fried Wild Greens (Sneaky)" },
    hearts: 2,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["blue-nightshade", "silent-princess"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Furtivo)", en: "Any Vegetables, Herbs, or Flowers(4 different kinds) (Sneaky)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_fried_wild_greens_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Mix de fruta e cogumelo Robusto", en: "Fruit and Mushroom Mix (Mighty)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["mighty-bananas"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Mix de fruta e cogumelo Picante", en: "Fruit and Mushroom Mix (Spicy)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Mix de fruta e cogumelo Protetor", en: "Fruit and Mushroom Mix (Tough)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["ironshroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Mix de fruta e cogumelo Isolante", en: "Fruit and Mushroom Mix (Electro)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["voltfruit"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Mix de fruta e cogumelo Vivaz", en: "Fruit and Mushroom Mix (Hearty)" },
    hearts: 26,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-durian"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Mix de fruta e cogumelo Revitalizante", en: "Fruit and Mushroom Mix (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["endura-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Mix de fruta e cogumelo", en: "Fruit and Mushroom Mix" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Mix de fruta e cogumelo Gelado", en: "Fruit and Mushroom Mix (Chilly)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["hydromelon"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Mix de fruta e cogumelo Revigorante", en: "Fruit and Mushroom Mix (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["stamella-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Mix de fruta e cogumelo Ligeiro", en: "Fruit and Mushroom Mix (Hasty)" },
    hearts: 4,
    durationSeconds: 90,
    ingredients: [
      {
        materialIds: ["fleet-lotus-seeds"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-and-mushroom-mix-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Mix de fruta e cogumelo Furtivo", en: "Fruit and Mushroom Mix (Sneaky)" },
    hearts: 4,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["silent-shroom"],
      },
    ],
    image: "recipes/fruit_and_mushroom_mix_icon.png",
  },
  {
    id: "fruit-pie-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Torta de fruta Robusto", en: "Fruit Pie (Mighty)" },
    hearts: 4,
    durationSeconds: 710,
    ingredients: [
      {
        materialIds: ["mighty-bananas"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/fruit_pie_icon.png",
  },
  {
    id: "fruit-pie-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Torta de fruta Picante", en: "Fruit Pie (Spicy)" },
    hearts: 4,
    durationSeconds: 810,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/fruit_pie_icon.png",
  },
  {
    id: "fruit-pie-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Torta de fruta Isolante", en: "Fruit Pie (Electro)" },
    hearts: 4,
    durationSeconds: 810,
    ingredients: [
      {
        materialIds: ["voltfruit"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/fruit_pie_icon.png",
  },
  {
    id: "fruit-pie-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Torta de fruta Vivaz", en: "Fruit Pie (Hearty)" },
    hearts: 26,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-durian"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/fruit_pie_icon.png",
  },
  {
    id: "fruit-pie-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Torta de fruta", en: "Fruit Pie" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["wildberry", "palm-fruit"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/fruit_pie_icon.png",
  },
  {
    id: "fruit-pie-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Torta de fruta Gelado", en: "Fruit Pie (Chilly)" },
    hearts: 4,
    durationSeconds: 810,
    ingredients: [
      {
        materialIds: ["hydromelon"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/fruit_pie_icon.png",
  },
  {
    id: "fruit-pie-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Torta de fruta Ligeiro", en: "Fruit Pie (Hasty)" },
    hearts: 4,
    durationSeconds: 720,
    ingredients: [
      {
        materialIds: ["fleet-lotus-seeds"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/fruit_pie_icon.png",
  },
  {
    id: "fruitcake-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Bolo de frutas Robusto", en: "Fruitcake (Mighty)" },
    hearts: 6,
    durationSeconds: 650,
    ingredients: [
      {
        materialIds: ["apple", "wildberry"],
      },
      {
        materialIds: ["mighty-bananas"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/fruitcake_icon.png",
  },
  {
    id: "fruitcake-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Bolo de frutas Picante", en: "Fruitcake (Spicy)" },
    hearts: 6,
    durationSeconds: 750,
    ingredients: [
      {
        materialIds: ["apple", "wildberry"],
      },
      {
        materialIds: ["spicy-pepper"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/fruitcake_icon.png",
  },
  {
    id: "fruitcake-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Bolo de frutas Isolante", en: "Fruitcake (Electro)" },
    hearts: 6,
    durationSeconds: 750,
    ingredients: [
      {
        materialIds: ["apple", "wildberry"],
      },
      {
        materialIds: ["voltfruit"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/fruitcake_icon.png",
  },
  {
    id: "fruitcake-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Bolo de frutas Vivaz", en: "Fruitcake (Hearty)" },
    hearts: 28,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry"],
      },
      {
        materialIds: ["hearty-durian"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/fruitcake_icon.png",
  },
  {
    id: "fruitcake-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Bolo de frutas", en: "Fruitcake" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry"],
      },
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/fruitcake_icon.png",
  },
  {
    id: "fruitcake-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Bolo de frutas Gelado", en: "Fruitcake (Chilly)" },
    hearts: 6,
    durationSeconds: 750,
    ingredients: [
      {
        materialIds: ["apple", "wildberry"],
      },
      {
        materialIds: ["hydromelon"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/fruitcake_icon.png",
  },
  {
    id: "fruitcake-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Bolo de frutas Ligeiro", en: "Fruitcake (Hasty)" },
    hearts: 6,
    durationSeconds: 660,
    ingredients: [
      {
        materialIds: ["apple", "wildberry"],
      },
      {
        materialIds: ["fleet-lotus-seeds"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
    ],
    image: "recipes/fruitcake_icon.png",
  },
  {
    id: "glazed-meat-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Carne glaceada Revigorante", en: "Glazed Meat (Energizing)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["courser-bee-honey"],
      },
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
    ],
    staminaWheels: 2,
    image: "recipes/glazed_meat_icon.png",
  },
  {
    id: "glazed-mushrooms-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Cogumelos glaceados Revigorante", en: "Glazed Mushrooms (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["courser-bee-honey"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/glazed_mushrooms_icon.png",
  },
  {
    id: "glazed-seafood-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Frutos do mar glaceados Revigorante", en: "Glazed Seafood (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["courser-bee-honey"],
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
    ],
    staminaWheels: 2,
    image: "recipes/glazed_seafood_icon.png",
  },
  {
    id: "glazed-veggies-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Vegetais glaceados Revigorante", en: "Glazed Veggies (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["courser-bee-honey"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/glazed_veggies_icon.png",
  },
  {
    id: "gourmet-meat-and-rice-bowl-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Tigela de arroz com carne de primeira", en: "Gourmet Meat and Rice Bowl" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/gourmet_meat_and_rice_bowl_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar Robusto", en: "Gourmet Meat and Seafood Fry (Mighty)" },
    hearts: 12,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (Mighty)" },
      },
    ],
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar Picante", en: "Gourmet Meat and Seafood Fry (Spicy)" },
    hearts: 12,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["sizzlefin-trout"],
      },
    ],
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar Protetor", en: "Gourmet Meat and Seafood Fry (Tough)" },
    hearts: 12,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (Tough)" },
      },
    ],
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar Isolante", en: "Gourmet Meat and Seafood Fry (Electro)" },
    hearts: 12,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["voltfin-trout"],
      },
    ],
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar Vivaz", en: "Gourmet Meat and Seafood Fry (Hearty)" },
    hearts: 22,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (Hearty)" },
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar", en: "Gourmet Meat and Seafood Fry" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
    ],
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar Gelado", en: "Gourmet Meat and Seafood Fry (Chilly)" },
    hearts: 12,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["chillfin-trout"],
      },
    ],
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar Revigorante", en: "Gourmet Meat and Seafood Fry (Energizing)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (Energizing)" },
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-and-seafood-fry-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Fritura de carne de primeira e frutos do mar Furtivo", en: "Gourmet Meat and Seafood Fry (Sneaky)" },
    hearts: 12,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (Sneaky)" },
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/gourmet_meat_and_seafood_fry_icon.png",
  },
  {
    id: "gourmet-meat-curry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Curry de carne de primeira", en: "Gourmet Meat Curry" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/gourmet_meat_curry_icon.png",
  },
  {
    id: "gourmet-meat-stew-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Ensopado de carne de primeira", en: "Gourmet Meat Stew" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/gourmet_meat_stew_icon.png",
  },
  {
    id: "gourmet-poultry-curry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Curry de ave de primeira", en: "Gourmet Poultry Curry" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-whole-bird"],
      },
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/gourmet_poultry_curry_icon.png",
  },
  {
    id: "gourmet-poultry-pilaf-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Pilaf de ave de primeira", en: "Gourmet Poultry Pilaf" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-whole-bird"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["bird-egg"],
      },
    ],
    image: "recipes/gourmet_poultry_pilaf_icon.png",
  },
  {
    id: "gourmet-spiced-meat-skewer-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Espeto apimentado de carne de primeira", en: "Gourmet Spiced Meat Skewer" },
    hearts: 10,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-gourmet-meat"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/gourmet_spiced_meat_skewer_icon.png",
  },
  {
    id: "herb-saut-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Ervas salteadas Robusto", en: "Herb Sauté (Mighty)" },
    hearts: 2,
    durationSeconds: 380,
    ingredients: [
      {
        materialIds: ["mighty-thistle"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Ervas salteadas Picante", en: "Herb Sauté (Spicy)" },
    hearts: 2,
    durationSeconds: 480,
    ingredients: [
      {
        materialIds: ["warm-safflina"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Ervas salteadas Protetor", en: "Herb Sauté (Tough)" },
    hearts: 2,
    durationSeconds: 380,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin", "armoranth"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Protetor)", en: "Any Vegetable, Herb, or Flower (Tough)" },
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    notes: "Usando Armoranth em vez de Fortified Pumpkin no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Ervas salteadas Isolante", en: "Herb Sauté (Electro)" },
    hearts: 2,
    durationSeconds: 480,
    ingredients: [
      {
        materialIds: ["electric-safflina"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Ervas salteadas Vivaz", en: "Herb Sauté (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Vivaz)", en: "Any Vegetable, Herb, or Flower (Hearty)" },
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Ervas salteadas Revitalizante", en: "Herb Sauté (Enduring)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Ervas salteadas", en: "Herb Sauté" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Ervas salteadas Gelado", en: "Herb Sauté (Chilly)" },
    hearts: 2,
    durationSeconds: 480,
    ingredients: [
      {
        materialIds: ["cool-safflina"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Ervas salteadas Ligeiro", en: "Herb Sauté (Hasty)" },
    hearts: 2,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["swift-carrot", "swift-violet"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Ligeiro)", en: "Any Vegetable, Herb, or Flower (Hasty)" },
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    notes: "Usando Swift Violet em vez de Swift Carrot no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "herb-saut-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Ervas salteadas Furtivo", en: "Herb Sauté (Sneaky)" },
    hearts: 2,
    durationSeconds: 450,
    ingredients: [
      {
        materialIds: ["blue-nightshade", "silent-princess"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Furtivo)", en: "Any Vegetable, Herb, or Flower (Sneaky)" },
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/herb_sauté_icon.png",
  },
  {
    id: "honey-candy-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Doce de mel Revigorante", en: "Honey Candy (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["courser-bee-honey"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/honey_candy_icon.png",
  },
  {
    id: "honey-crepe-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Crepe de mel Revigorante", en: "Honey Crepe (Energizing)" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["courser-bee-honey"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/honey_crepe_icon.png",
  },
  {
    id: "honeyed-apple-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Maçã ao mel Revigorante", en: "Honeyed Apple (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple"],
      },
      {
        materialIds: ["courser-bee-honey"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/honeyed_apple_icon.png",
  },
  {
    id: "honeyed-fruits-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Frutas ao mel Revigorante", en: "Honeyed Fruits (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["courser-bee-honey"],
      },
      {
        materialIds: ["wildberry", "palm-fruit"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/honeyed_fruits_icon.png",
  },
  {
    id: "hot-buttered-apple-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Maçã amanteigada quente", en: "Hot Buttered Apple" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/hot_buttered_apple_icon.png",
  },
  {
    id: "meat-stuffed-pumpkin-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Abóbora recheada de carne Protetor", en: "Meat-Stuffed Pumpkin (Tough)" },
    hearts: 6,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin"],
      },
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
    ],
    image: "recipes/meat-stuffed_pumpkin_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Espeto de carne com cogumelo Robusto", en: "Meat and Mushroom Skewer (Mighty)" },
    hearts: 6,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["razorshroom"],
      },
    ],
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Espeto de carne com cogumelo Picante", en: "Meat and Mushroom Skewer (Spicy)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["sunshroom"],
      },
    ],
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Espeto de carne com cogumelo Protetor", en: "Meat and Mushroom Skewer (Tough)" },
    hearts: 6,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["ironshroom"],
      },
    ],
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Espeto de carne com cogumelo Isolante", en: "Meat and Mushroom Skewer (Electro)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["zapshroom"],
      },
    ],
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Espeto de carne com cogumelo Vivaz", en: "Meat and Mushroom Skewer (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Espeto de carne com cogumelo Revitalizante", en: "Meat and Mushroom Skewer (Enduring)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["endura-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Espeto de carne com cogumelo", en: "Meat and Mushroom Skewer" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Espeto de carne com cogumelo Gelado", en: "Meat and Mushroom Skewer (Chilly)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["chillshroom"],
      },
    ],
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Espeto de carne com cogumelo Revigorante", en: "Meat and Mushroom Skewer (Energizing)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["stamella-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Espeto de carne com cogumelo Ligeiro", en: "Meat and Mushroom Skewer (Hasty)" },
    hearts: 6,
    durationSeconds: 90,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["rushroom"],
      },
    ],
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-mushroom-skewer-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Espeto de carne com cogumelo Furtivo", en: "Meat and Mushroom Skewer (Sneaky)" },
    hearts: 6,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["silent-shroom"],
      },
    ],
    image: "recipes/meat_and_mushroom_skewer_icon.png",
  },
  {
    id: "meat-and-rice-bowl-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Tigela de arroz com carne", en: "Meat and Rice Bowl" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["raw-meat"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/meat_and_rice_bowl_icon.png",
  },
  {
    id: "meat-and-seafood-fry-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fritura de carne e frutos do mar Robusto", en: "Meat and Seafood Fry (Mighty)" },
    hearts: 6,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (Mighty)" },
      },
    ],
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-and-seafood-fry-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fritura de carne e frutos do mar Picante", en: "Meat and Seafood Fry (Spicy)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["sizzlefin-trout"],
      },
    ],
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-and-seafood-fry-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Fritura de carne e frutos do mar Protetor", en: "Meat and Seafood Fry (Tough)" },
    hearts: 6,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (Tough)" },
      },
    ],
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-and-seafood-fry-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fritura de carne e frutos do mar Isolante", en: "Meat and Seafood Fry (Electro)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["voltfin-trout"],
      },
    ],
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-and-seafood-fry-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fritura de carne e frutos do mar Vivaz", en: "Meat and Seafood Fry (Hearty)" },
    hearts: 16,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (Hearty)" },
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-and-seafood-fry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fritura de carne e frutos do mar", en: "Meat and Seafood Fry" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
    ],
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-and-seafood-fry-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fritura de carne e frutos do mar Gelado", en: "Meat and Seafood Fry (Chilly)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["chillfin-trout"],
      },
    ],
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-and-seafood-fry-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Fritura de carne e frutos do mar Revigorante", en: "Meat and Seafood Fry (Energizing)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (Energizing)" },
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-and-seafood-fry-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Fritura de carne e frutos do mar Furtivo", en: "Meat and Seafood Fry (Sneaky)" },
    hearts: 6,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (Sneaky)" },
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/meat_and_seafood_fry_icon.png",
  },
  {
    id: "meat-curry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Curry de carne", en: "Meat Curry" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/meat_curry_icon.png",
  },
  {
    id: "meat-pie-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Torta de carne", en: "Meat Pie" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
    ],
    image: "recipes/meat_pie_icon.png",
  },
  {
    id: "meat-skewer-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Espeto de carne", en: "Meat Skewer" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
      },
    ],
    image: "recipes/meat_skewer_icon.png",
  },
  {
    id: "copious-meat-skewers-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fartura de espetos de carne", en: "Copious Meat Skewers" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meats (4 different kinds)" },
      },
    ],
    isGeneric: true,
    image: "recipes/copious_meat_skewers_icon.png",
  },
  {
    id: "meat-stew-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Ensopado de carne", en: "Meat Stew" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-bird-drumstick"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["fresh-milk"],
      },
    ],
    image: "recipes/meat_stew_icon.png",
  },
  {
    id: "meaty-rice-balls-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Bolinho de arroz com carne", en: "Meaty Rice Balls" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/meaty_rice_balls_icon.png",
  },
  {
    id: "monster-cake-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Bolo de monstro", en: "Monster Cake" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    image: "recipes/monster_cake_icon.png",
  },
  {
    id: "monster-curry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Curry de monstro", en: "Monster Curry" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    image: "recipes/monster_curry_icon.png",
  },
  {
    id: "monster-rice-balls-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Bolinho de arroz de monstro", en: "Monster Rice Balls" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    image: "recipes/monster_rice_balls_icon.png",
  },
  {
    id: "monster-soup-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Sopa de monstro", en: "Monster Soup" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["monster-extract"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/monster_soup_icon.png",
  },
  {
    id: "monster-stew-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Ensopado de monstro Robusto", en: "Monster Stew (Mighty)" },
    hearts: 6,
    durationSeconds: 110,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (Mighty)" },
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "monster-stew-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Ensopado de monstro Picante", en: "Monster Stew (Spicy)" },
    hearts: 6,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["sizzlefin-trout"],
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "monster-stew-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Ensopado de monstro Protetor", en: "Monster Stew (Tough)" },
    hearts: 6,
    durationSeconds: 110,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (Tough)" },
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "monster-stew-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Ensopado de monstro Isolante", en: "Monster Stew (Electro)" },
    hearts: 6,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["voltfin-trout"],
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "monster-stew-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Ensopado de monstro Vivaz", en: "Monster Stew (Hearty)" },
    hearts: 16,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (Hearty)" },
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "monster-stew-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Ensopado de monstro", en: "Monster Stew" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "monster-stew-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Ensopado de monstro Gelado", en: "Monster Stew (Chilly)" },
    hearts: 6,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["chillfin-trout"],
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "monster-stew-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Ensopado de monstro Revigorante", en: "Monster Stew (Energizing)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (Energizing)" },
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "monster-stew-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Ensopado de monstro Furtivo", en: "Monster Stew (Sneaky)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (Sneaky)" },
      },
      {
        materialIds: ["monster-extract"],
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/monster_stew_icon.png",
  },
  {
    id: "mushroom-omelet-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Omelete de cogumelo Robusto", en: "Mushroom Omelet (Mighty)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["razorshroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Omelete de cogumelo Picante", en: "Mushroom Omelet (Spicy)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["sunshroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Omelete de cogumelo Protetor", en: "Mushroom Omelet (Tough)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["ironshroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Omelete de cogumelo Isolante", en: "Mushroom Omelet (Electro)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["zapshroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Omelete de cogumelo Vivaz", en: "Mushroom Omelet (Hearty)" },
    hearts: 10,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Omelete de cogumelo Revitalizante", en: "Mushroom Omelet (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-shroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Omelete de cogumelo", en: "Mushroom Omelet" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-shroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Omelete de cogumelo Gelado", en: "Mushroom Omelet (Chilly)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["chillshroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Omelete de cogumelo Revigorante", en: "Mushroom Omelet (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["stamella-shroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Omelete de cogumelo Ligeiro", en: "Mushroom Omelet (Hasty)" },
    hearts: 4,
    durationSeconds: 300,
    ingredients: [
      {
        materialIds: ["rushroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-omelet-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Omelete de cogumelo Furtivo", en: "Mushroom Omelet (Sneaky)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["silent-shroom"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/mushroom_omelet_icon.png",
  },
  {
    id: "mushroom-rice-balls-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Robusto", en: "Mushroom Rice Balls (Mighty)" },
    hearts: 4,
    durationSeconds: 110,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["razorshroom"],
      },
    ],
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Picante", en: "Mushroom Rice Balls (Spicy)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["sunshroom"],
      },
    ],
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Protetor", en: "Mushroom Rice Balls (Tough)" },
    hearts: 4,
    durationSeconds: 110,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["ironshroom"],
      },
    ],
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Isolante", en: "Mushroom Rice Balls (Electro)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["zapshroom"],
      },
    ],
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Vivaz", en: "Mushroom Rice Balls (Hearty)" },
    hearts: 10,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Revitalizante", en: "Mushroom Rice Balls (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["endura-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Bolinho de arroz com cogumelo", en: "Mushroom Rice Balls" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Gelado", en: "Mushroom Rice Balls (Chilly)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["chillshroom"],
      },
    ],
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Revigorante", en: "Mushroom Rice Balls (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["stamella-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Ligeiro", en: "Mushroom Rice Balls (Hasty)" },
    hearts: 4,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["rushroom"],
      },
    ],
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-rice-balls-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Bolinho de arroz com cogumelo Furtivo", en: "Mushroom Rice Balls (Sneaky)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["silent-shroom"],
      },
    ],
    image: "recipes/mushroom_rice_balls_icon.png",
  },
  {
    id: "mushroom-risotto-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Risoto de cogumelo Robusto", en: "Mushroom Risotto (Mighty)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["razorshroom"],
      },
    ],
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Risoto de cogumelo Picante", en: "Mushroom Risotto (Spicy)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["sunshroom"],
      },
    ],
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Risoto de cogumelo Protetor", en: "Mushroom Risotto (Tough)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["ironshroom"],
      },
    ],
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Risoto de cogumelo Isolante", en: "Mushroom Risotto (Electro)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["zapshroom"],
      },
    ],
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Risoto de cogumelo Vivaz", en: "Mushroom Risotto (Hearty)" },
    hearts: 10,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Risoto de cogumelo Revitalizante", en: "Mushroom Risotto (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["endura-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Risoto de cogumelo", en: "Mushroom Risotto" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Risoto de cogumelo Gelado", en: "Mushroom Risotto (Chilly)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["chillshroom"],
      },
    ],
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Risoto de cogumelo Revigorante", en: "Mushroom Risotto (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["stamella-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Risoto de cogumelo Ligeiro", en: "Mushroom Risotto (Hasty)" },
    hearts: 4,
    durationSeconds: 300,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["rushroom"],
      },
    ],
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-risotto-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Risoto de cogumelo Furtivo", en: "Mushroom Risotto (Sneaky)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["silent-shroom"],
      },
    ],
    image: "recipes/mushroom_risotto_icon.png",
  },
  {
    id: "mushroom-skewer-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Espeto de cogumelo Robusto", en: "Mushroom Skewer (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["razorshroom"],
      },
    ],
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Espeto de cogumelo Picante", en: "Mushroom Skewer (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["sunshroom"],
      },
    ],
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Espeto de cogumelo Protetor", en: "Mushroom Skewer (Tough)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["ironshroom"],
      },
    ],
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Espeto de cogumelo Isolante", en: "Mushroom Skewer (Electro)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["zapshroom"],
      },
    ],
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Espeto de cogumelo Vivaz", en: "Mushroom Skewer (Hearty)" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Espeto de cogumelo Revitalizante", en: "Mushroom Skewer (Enduring)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Espeto de cogumelo", en: "Mushroom Skewer" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Espeto de cogumelo Gelado", en: "Mushroom Skewer (Chilly)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["chillshroom"],
      },
    ],
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Espeto de cogumelo Revigorante", en: "Mushroom Skewer (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["stamella-shroom"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Espeto de cogumelo Ligeiro", en: "Mushroom Skewer (Hasty)" },
    hearts: 2,
    durationSeconds: 60,
    ingredients: [
      {
        materialIds: ["rushroom"],
      },
    ],
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "mushroom-skewer-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Espeto de cogumelo Furtivo", en: "Mushroom Skewer (Sneaky)" },
    hearts: 2,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["silent-shroom"],
      },
    ],
    image: "recipes/mushroom_skewer_icon.png",
  },
  {
    id: "copious-mushroom-skewers-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fartura de espetos de cogumelo Robusto", en: "Copious Mushroom Skewers (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["razorshroom"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fartura de espetos de cogumelo Picante", en: "Copious Mushroom Skewers (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["sunshroom"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Fartura de espetos de cogumelo Protetor", en: "Copious Mushroom Skewers (Tough)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["ironshroom"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fartura de espetos de cogumelo Isolante", en: "Copious Mushroom Skewers (Electro)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["zapshroom"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fartura de espetos de cogumelo Vivaz", en: "Copious Mushroom Skewers (Hearty)" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushrooms (4 different kinds) (Hearty)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Fartura de espetos de cogumelo Revitalizante", en: "Copious Mushroom Skewers (Enduring)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-shroom"],
      },
    ],
    isGeneric: true,
    staminaWheels: 1,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fartura de espetos de cogumelo", en: "Copious Mushroom Skewers" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-shroom"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fartura de espetos de cogumelo Gelado", en: "Copious Mushroom Skewers (Chilly)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["chillshroom"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Fartura de espetos de cogumelo Revigorante", en: "Copious Mushroom Skewers (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["stamella-shroom"],
      },
    ],
    isGeneric: true,
    staminaWheels: 1,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Fartura de espetos de cogumelo Ligeiro", en: "Copious Mushroom Skewers (Hasty)" },
    hearts: 2,
    durationSeconds: 60,
    ingredients: [
      {
        materialIds: ["rushroom"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "copious-mushroom-skewers-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Fartura de espetos de cogumelo Furtivo", en: "Copious Mushroom Skewers (Sneaky)" },
    hearts: 2,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["silent-shroom"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_mushroom_skewers_icon.png",
  },
  {
    id: "nutcake-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Bolo de castanhas", en: "Nutcake" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["chickaloo-tree-nut", "acorn"],
        label: { "pt-br": "Bolota ou Castanha Chickaloo", en: "Acorn or Chickaloo Tree Nut" },
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/nutcake_icon.png",
  },
  {
    id: "omelet-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Omelete", en: "Omelet" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["bird-egg"],
      },
    ],
    image: "recipes/omelet_icon.png",
  },
  {
    id: "pepper-seafood-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Frutos do mar apimentados Picante", en: "Pepper Seafood (Spicy)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
    ],
    image: "recipes/pepper_seafood_icon.png",
  },
  {
    id: "pepper-steak-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Bife apimentado Picante", en: "Pepper Steak (Spicy)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
      },
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
    ],
    image: "recipes/pepper_steak_icon.png",
  },
  {
    id: "plain-crepe-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Crepe simples", en: "Plain Crepe" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/plain_crepe_icon.png",
  },
  {
    id: "porgy-meuni-re-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Porgy à meunière Robusto", en: "Porgy Meunière (Mighty)" },
    hearts: 4,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["mighty-porgy"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
    ],
    image: "recipes/porgy_meunière_icon.png",
  },
  {
    id: "porgy-meuni-re-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Porgy à meunière Protetor", en: "Porgy Meunière (Tough)" },
    hearts: 4,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["armored-porgy"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
    ],
    image: "recipes/porgy_meunière_icon.png",
  },
  {
    id: "poultry-curry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Curry de ave", en: "Poultry Curry" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-bird-drumstick"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/poultry_curry_icon.png",
  },
  {
    id: "poultry-pilaf-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Pilaf de ave", en: "Poultry Pilaf" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-bird-drumstick"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/poultry_pilaf_icon.png",
  },
  {
    id: "prime-meat-and-rice-bowl-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Tigela de arroz com carne nobre", en: "Prime Meat and Rice Bowl" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/prime_meat_and_rice_bowl_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar Robusto", en: "Prime Meat and Seafood Fry (Mighty)" },
    hearts: 8,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (Mighty)" },
      },
    ],
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar Picante", en: "Prime Meat and Seafood Fry (Spicy)" },
    hearts: 8,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["sizzlefin-trout"],
      },
    ],
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar Protetor", en: "Prime Meat and Seafood Fry (Tough)" },
    hearts: 8,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (Tough)" },
      },
    ],
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar Isolante", en: "Prime Meat and Seafood Fry (Electro)" },
    hearts: 8,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["voltfin-trout"],
      },
    ],
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar Vivaz", en: "Prime Meat and Seafood Fry (Hearty)" },
    hearts: 18,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (Hearty)" },
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar", en: "Prime Meat and Seafood Fry" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
    ],
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar Gelado", en: "Prime Meat and Seafood Fry (Chilly)" },
    hearts: 8,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["chillfin-trout"],
      },
    ],
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar Revigorante", en: "Prime Meat and Seafood Fry (Energizing)" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (Energizing)" },
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-and-seafood-fry-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Fritura de carne nobre e frutos do mar Furtivo", en: "Prime Meat and Seafood Fry (Sneaky)" },
    hearts: 8,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (Sneaky)" },
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/prime_meat_and_seafood_fry_icon.png",
  },
  {
    id: "prime-meat-curry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Curry de carne nobre", en: "Prime Meat Curry" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/prime_meat_curry_icon.png",
  },
  {
    id: "prime-meat-stew-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Ensopado de carne nobre", en: "Prime Meat Stew" },
    hearts: 10,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["fresh-milk"],
      },
    ],
    image: "recipes/prime_meat_stew_icon.png",
  },
  {
    id: "prime-poultry-curry-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Curry de ave nobre", en: "Prime Poultry Curry" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-bird-thigh"],
      },
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/prime_poultry_curry_icon.png",
  },
  {
    id: "prime-poultry-pilaf-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Pilaf de ave nobre", en: "Prime Poultry Pilaf" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-bird-thigh"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/prime_poultry_pilaf_icon.png",
  },
  {
    id: "prime-spiced-meat-skewer-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Espeto apimentado de carne nobre", en: "Prime Spiced Meat Skewer" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/prime_spiced_meat_skewer_icon.png",
  },
  {
    id: "pumpkin-pie-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Torta de abóbora Protetor", en: "Pumpkin Pie (Tough)" },
    hearts: 4,
    durationSeconds: 710,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/pumpkin_pie_icon.png",
  },
  {
    id: "pumpkin-stew-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Ensopado de abóbora Protetor", en: "Pumpkin Stew (Tough)" },
    hearts: 6,
    durationSeconds: 380,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["fresh-milk"],
      },
    ],
    image: "recipes/pumpkin_stew_icon.png",
  },
  {
    id: "salmon-meuni-re-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Salmão à meunière Vivaz", en: "Salmon Meunière (Hearty)" },
    hearts: 22,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["hearty-salmon"],
      },
    ],
    image: "recipes/salmon_meunière_icon.png",
  },
  {
    id: "salmon-risotto-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Risoto de salmão Vivaz", en: "Salmon Risotto (Hearty)" },
    hearts: 22,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-salmon"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salmon_risotto_icon.png",
  },
  {
    id: "salt-grilled-crab-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Caranguejo grelhado com sal Robusto", en: "Salt-Grilled Crab (Mighty)" },
    hearts: 2,
    durationSeconds: 140,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["razorclaw-crab"],
      },
    ],
    image: "recipes/salt-grilled_crab_icon.png",
  },
  {
    id: "salt-grilled-crab-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Caranguejo grelhado com sal Protetor", en: "Salt-Grilled Crab (Tough)" },
    hearts: 2,
    durationSeconds: 140,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["ironshell-crab"],
      },
    ],
    image: "recipes/salt-grilled_crab_icon.png",
  },
  {
    id: "salt-grilled-crab-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Caranguejo grelhado com sal Revigorante", en: "Salt-Grilled Crab (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["bright-eyed-crab"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/salt-grilled_crab_icon.png",
  },
  {
    id: "salt-grilled-fish-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Peixe grelhado com sal Robusto", en: "Salt-Grilled Fish (Mighty)" },
    hearts: 2,
    durationSeconds: 140,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["mighty-carp", "mighty-porgy"],
      },
    ],
    notes: "Usando Mighty Porgy em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-fish-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Peixe grelhado com sal Picante", en: "Salt-Grilled Fish (Spicy)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["sizzlefin-trout"],
      },
    ],
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-fish-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Peixe grelhado com sal Protetor", en: "Salt-Grilled Fish (Tough)" },
    hearts: 2,
    durationSeconds: 140,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["armored-carp", "armored-porgy"],
      },
    ],
    notes: "Usando Armored Porgy em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-fish-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Peixe grelhado com sal Isolante", en: "Salt-Grilled Fish (Electro)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["voltfin-trout"],
      },
    ],
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-fish-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Peixe grelhado com sal Vivaz", en: "Salt-Grilled Fish (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-fish-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Peixe grelhado com sal", en: "Salt-Grilled Fish" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
      },
    ],
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-fish-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Peixe grelhado com sal Gelado", en: "Salt-Grilled Fish (Chilly)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["chillfin-trout"],
      },
    ],
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-fish-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Peixe grelhado com sal Revigorante", en: "Salt-Grilled Fish (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["staminoka-bass"],
      },
    ],
    staminaWheels: 5,
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-fish-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Peixe grelhado com sal Furtivo", en: "Salt-Grilled Fish (Sneaky)" },
    hearts: 2,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_fish_icon.png",
  },
  {
    id: "salt-grilled-gourmet-meat-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Carne de primeira grelhada com sal", en: "Salt-Grilled Gourmet Meat" },
    hearts: 10,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["raw-gourmet-meat"],
      },
    ],
    image: "recipes/salt-grilled_gourmet_meat_icon.png",
  },
  {
    id: "salt-grilled-greens-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Verduras grelhadas com sal Robusto", en: "Salt-Grilled Greens (Mighty)" },
    hearts: 2,
    durationSeconds: 140,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["mighty-thistle"],
      },
    ],
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Verduras grelhadas com sal Picante", en: "Salt-Grilled Greens (Spicy)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["warm-safflina"],
      },
    ],
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Verduras grelhadas com sal Protetor", en: "Salt-Grilled Greens (Tough)" },
    hearts: 2,
    durationSeconds: 140,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["fortified-pumpkin", "armoranth"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Protetor)", en: "Any Vegetable, Herb, or Flower (Tough)" },
      },
    ],
    notes: "Usando Armoranth em vez de Fortified Pumpkin no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Verduras grelhadas com sal Isolante", en: "Salt-Grilled Greens (Electro)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["electric-safflina"],
      },
    ],
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Verduras grelhadas com sal Vivaz", en: "Salt-Grilled Greens (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Vivaz)", en: "Any Vegetable, Herb, or Flower (Hearty)" },
      },
    ],
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Verduras grelhadas com sal Revitalizante", en: "Salt-Grilled Greens (Enduring)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["endura-carrot"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Verduras grelhadas com sal", en: "Salt-Grilled Greens" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Verduras grelhadas com sal Gelado", en: "Salt-Grilled Greens (Chilly)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["cool-safflina"],
      },
    ],
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Verduras grelhadas com sal Ligeiro", en: "Salt-Grilled Greens (Hasty)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["swift-carrot", "swift-violet"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Ligeiro)", en: "Any Vegetable, Herb, or Flower (Hasty)" },
      },
    ],
    notes: "Usando Swift Violet em vez de Swift Carrot no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-greens-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Verduras grelhadas com sal Furtivo", en: "Salt-Grilled Greens (Sneaky)" },
    hearts: 2,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["blue-nightshade", "silent-princess"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Furtivo)", en: "Any Vegetable, Herb, or Flower (Sneaky)" },
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_greens_icon.png",
  },
  {
    id: "salt-grilled-meat-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Carne grelhada com sal", en: "Salt-Grilled Meat" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["raw-meat", "raw-bird-drumstick"],
      },
    ],
    image: "recipes/salt-grilled_meat_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Cogumelos grelhados com sal Robusto", en: "Salt-Grilled Mushrooms (Mighty)" },
    hearts: 2,
    durationSeconds: 140,
    ingredients: [
      {
        materialIds: ["razorshroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Cogumelos grelhados com sal Picante", en: "Salt-Grilled Mushrooms (Spicy)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["sunshroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Cogumelos grelhados com sal Protetor", en: "Salt-Grilled Mushrooms (Tough)" },
    hearts: 2,
    durationSeconds: 140,
    ingredients: [
      {
        materialIds: ["ironshroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Cogumelos grelhados com sal Isolante", en: "Salt-Grilled Mushrooms (Electro)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["zapshroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Cogumelos grelhados com sal Vivaz", en: "Salt-Grilled Mushrooms (Hearty)" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Cogumelos grelhados com sal Revitalizante", en: "Salt-Grilled Mushrooms (Enduring)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-shroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Cogumelos grelhados com sal", en: "Salt-Grilled Mushrooms" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-shroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Cogumelos grelhados com sal Gelado", en: "Salt-Grilled Mushrooms (Chilly)" },
    hearts: 2,
    durationSeconds: 240,
    ingredients: [
      {
        materialIds: ["chillshroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Cogumelos grelhados com sal Revigorante", en: "Salt-Grilled Mushrooms (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["stamella-shroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Cogumelos grelhados com sal Ligeiro", en: "Salt-Grilled Mushrooms (Hasty)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["rushroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-mushrooms-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Cogumelos grelhados com sal Furtivo", en: "Salt-Grilled Mushrooms (Sneaky)" },
    hearts: 2,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["silent-shroom"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_mushrooms_icon.png",
  },
  {
    id: "salt-grilled-prime-meat-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Carne nobre grelhada com sal", en: "Salt-Grilled Prime Meat" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-prime-meat"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/salt-grilled_prime_meat_icon.png",
  },
  {
    id: "saut-ed-nuts-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Castanhas salteadas", en: "Sautéed Nuts" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["chickaloo-tree-nut", "acorn"],
        label: { "pt-br": "Bolota ou Castanha Chickaloo", en: "Acorn or Chickaloo Tree Nut" },
      },
    ],
    image: "recipes/sautéed_nuts_icon.png",
  },
  {
    id: "saut-ed-peppers-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Pimentas salteadas Picante", en: "Sautéed Peppers (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
      },
    ],
    image: "recipes/sautéed_peppers_icon.png",
  },
  {
    id: "seafood-curry-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Curry de frutos do mar Robusto", en: "Seafood Curry (Mighty)" },
    hearts: 4,
    durationSeconds: 440,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["mighty-porgy"],
      },
    ],
    image: "recipes/seafood_curry_icon.png",
  },
  {
    id: "seafood-curry-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Curry de frutos do mar Protetor", en: "Seafood Curry (Tough)" },
    hearts: 4,
    durationSeconds: 440,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["armored-porgy"],
      },
    ],
    image: "recipes/seafood_curry_icon.png",
  },
  {
    id: "seafood-curry-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Curry de frutos do mar Vivaz", en: "Seafood Curry (Hearty)" },
    hearts: 18,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["hearty-blueshell-snail"],
      },
    ],
    image: "recipes/seafood_curry_icon.png",
  },
  {
    id: "seafood-fried-rice-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Arroz frito com frutos do mar Robusto", en: "Seafood Fried Rice (Mighty)" },
    hearts: 4,
    durationSeconds: 200,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["mighty-porgy"],
      },
    ],
    image: "recipes/seafood_fried_rice_icon.png",
  },
  {
    id: "seafood-fried-rice-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Arroz frito com frutos do mar Protetor", en: "Seafood Fried Rice (Tough)" },
    hearts: 4,
    durationSeconds: 200,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["armored-porgy"],
      },
    ],
    image: "recipes/seafood_fried_rice_icon.png",
  },
  {
    id: "seafood-fried-rice-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Arroz frito com frutos do mar Vivaz", en: "Seafood Fried Rice (Hearty)" },
    hearts: 18,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["rock-salt"],
      },
      {
        materialIds: ["hearty-blueshell-snail"],
      },
    ],
    image: "recipes/seafood_fried_rice_icon.png",
  },
  {
    id: "seafood-meuni-re-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Frutos do mar à meunière Robusto", en: "Seafood Meunière (Mighty)" },
    hearts: 4,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["mighty-carp", "razorclaw-crab"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    notes: "Usando Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-meuni-re-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Frutos do mar à meunière Picante", en: "Seafood Meunière (Spicy)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["sizzlefin-trout"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-meuni-re-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Frutos do mar à meunière Protetor", en: "Seafood Meunière (Tough)" },
    hearts: 4,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["armored-carp", "ironshell-crab"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    notes: "Usando Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-meuni-re-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Frutos do mar à meunière Isolante", en: "Seafood Meunière (Electro)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["voltfin-trout"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-meuni-re-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Frutos do mar à meunière Vivaz", en: "Seafood Meunière (Hearty)" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-bass", "hearty-blueshell-snail"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    notes: "Usando Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-meuni-re-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Frutos do mar à meunière", en: "Seafood Meunière" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-meuni-re-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Frutos do mar à meunière Gelado", en: "Seafood Meunière (Chilly)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["chillfin-trout"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-meuni-re-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Frutos do mar à meunière Revigorante", en: "Seafood Meunière (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-meuni-re-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Frutos do mar à meunière Furtivo", en: "Seafood Meunière (Sneaky)" },
    hearts: 4,
    durationSeconds: 330,
    ingredients: [
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["goat-butter"],
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_meunière_icon.png",
  },
  {
    id: "seafood-paella-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Paella de frutos do mar", en: "Seafood Paella" },
    hearts: 20,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: [],
      },
      {
        materialIds: [],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Essa combinação sempre tem ingredientes de efeitos diferentes conflitando entre si, então o prato nunca carrega efeito de status, só cura.",
    image: "recipes/seafood_paella_icon.png",
  },
  {
    id: "seafood-rice-balls-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar Robusto", en: "Seafood Rice Balls (Mighty)" },
    hearts: 4,
    durationSeconds: 110,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (Mighty)" },
      },
    ],
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-rice-balls-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar Picante", en: "Seafood Rice Balls (Spicy)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["sizzlefin-trout"],
      },
    ],
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-rice-balls-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar Protetor", en: "Seafood Rice Balls (Tough)" },
    hearts: 4,
    durationSeconds: 110,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (Tough)" },
      },
    ],
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-rice-balls-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar Isolante", en: "Seafood Rice Balls (Electro)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["voltfin-trout"],
      },
    ],
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-rice-balls-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar Vivaz", en: "Seafood Rice Balls (Hearty)" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (Hearty)" },
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-rice-balls-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar", en: "Seafood Rice Balls" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
    ],
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-rice-balls-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar Gelado", en: "Seafood Rice Balls (Chilly)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["chillfin-trout"],
      },
    ],
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-rice-balls-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar Revigorante", en: "Seafood Rice Balls (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (Energizing)" },
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-rice-balls-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Bolinho de arroz com frutos do mar Furtivo", en: "Seafood Rice Balls (Sneaky)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (Sneaky)" },
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/seafood_rice_balls_icon.png",
  },
  {
    id: "seafood-skewer-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Espeto de frutos do mar Robusto", en: "Seafood Skewer (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["razorclaw-crab"],
      },
    ],
    image: "recipes/seafood_skewer_icon.png",
  },
  {
    id: "seafood-skewer-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Espeto de frutos do mar Protetor", en: "Seafood Skewer (Tough)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["ironshell-crab"],
      },
    ],
    image: "recipes/seafood_skewer_icon.png",
  },
  {
    id: "seafood-skewer-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Espeto de frutos do mar Vivaz", en: "Seafood Skewer (Hearty)" },
    hearts: 16,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-blueshell-snail"],
      },
    ],
    image: "recipes/seafood_skewer_icon.png",
  },
  {
    id: "seafood-skewer-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Espeto de frutos do mar Revigorante", en: "Seafood Skewer (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["bright-eyed-crab"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/seafood_skewer_icon.png",
  },
  {
    id: "seafood-skewer-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Espeto de frutos do mar Furtivo", en: "Seafood Skewer (Sneaky)" },
    hearts: 2,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["sneaky-river-snail"],
      },
    ],
    image: "recipes/seafood_skewer_icon.png",
  },
  {
    id: "copious-seafood-skewers-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fartura de espetos de frutos do mar Robusto", en: "Copious Seafood Skewers (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (4 different kinds) (Mighty)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "copious-seafood-skewers-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fartura de espetos de frutos do mar Picante", en: "Copious Seafood Skewers (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["sizzlefin-trout"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "copious-seafood-skewers-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Fartura de espetos de frutos do mar Protetor", en: "Copious Seafood Skewers (Tough)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (4 different kinds) (Tough)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "copious-seafood-skewers-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fartura de espetos de frutos do mar Isolante", en: "Copious Seafood Skewers (Electro)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["voltfin-trout"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "copious-seafood-skewers-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fartura de espetos de frutos do mar Vivaz", en: "Copious Seafood Skewers (Hearty)" },
    hearts: 12,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (4 different kinds) (Hearty)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "copious-seafood-skewers-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fartura de espetos de frutos do mar", en: "Copious Seafood Skewers" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (4 different kinds) (no effect)" },
      },
    ],
    isGeneric: true,
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "copious-seafood-skewers-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fartura de espetos de frutos do mar Gelado", en: "Copious Seafood Skewers (Chilly)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["chillfin-trout"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "copious-seafood-skewers-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Fartura de espetos de frutos do mar Revigorante", en: "Copious Seafood Skewers (Energizing)" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (4 different kinds) (Energizing)" },
      },
    ],
    isGeneric: true,
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "copious-seafood-skewers-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Fartura de espetos de frutos do mar Furtivo", en: "Copious Seafood Skewers (Sneaky)" },
    hearts: 2,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (4 different kinds) (Sneaky)" },
      },
    ],
    isGeneric: true,
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/copious_seafood_skewers_icon.png",
  },
  {
    id: "simmered-fruit-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fruta cozida Robusto", en: "Simmered Fruit (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["mighty-bananas"],
      },
    ],
    image: "recipes/simmered_fruit_icon.png",
  },
  {
    id: "simmered-fruit-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fruta cozida Picante", en: "Simmered Fruit (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
      },
    ],
    image: "recipes/simmered_fruit_icon.png",
  },
  {
    id: "simmered-fruit-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fruta cozida Isolante", en: "Simmered Fruit (Electro)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["voltfruit"],
      },
    ],
    image: "recipes/simmered_fruit_icon.png",
  },
  {
    id: "simmered-fruit-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fruta cozida Vivaz", en: "Simmered Fruit (Hearty)" },
    hearts: 24,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-durian"],
      },
    ],
    image: "recipes/simmered_fruit_icon.png",
  },
  {
    id: "simmered-fruit-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fruta cozida", en: "Simmered Fruit" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
    ],
    image: "recipes/simmered_fruit_icon.png",
  },
  {
    id: "simmered-fruit-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fruta cozida Gelado", en: "Simmered Fruit (Chilly)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["hydromelon"],
      },
    ],
    image: "recipes/simmered_fruit_icon.png",
  },
  {
    id: "simmered-fruit-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Fruta cozida Ligeiro", en: "Simmered Fruit (Hasty)" },
    hearts: 2,
    durationSeconds: 60,
    ingredients: [
      {
        materialIds: ["fleet-lotus-seeds"],
      },
    ],
    image: "recipes/simmered_fruit_icon.png",
  },
  {
    id: "copious-simmered-fruit-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fartura de fruta cozida Robusto", en: "Copious Simmered Fruit (Mighty)" },
    hearts: 2,
    durationSeconds: 50,
    ingredients: [
      {
        materialIds: ["mighty-bananas"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_simmered_fruit_icon.png",
  },
  {
    id: "copious-simmered-fruit-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fartura de fruta cozida Picante", en: "Copious Simmered Fruit (Spicy)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_simmered_fruit_icon.png",
  },
  {
    id: "copious-simmered-fruit-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fartura de fruta cozida Isolante", en: "Copious Simmered Fruit (Electro)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["voltfruit"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_simmered_fruit_icon.png",
  },
  {
    id: "copious-simmered-fruit-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fartura de fruta cozida Vivaz", en: "Copious Simmered Fruit (Hearty)" },
    hearts: 24,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-durian"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_simmered_fruit_icon.png",
  },
  {
    id: "copious-simmered-fruit-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fartura de fruta cozida", en: "Copious Simmered Fruit" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (4 different kinds) (no effect)" },
      },
    ],
    isGeneric: true,
    image: "recipes/copious_simmered_fruit_icon.png",
  },
  {
    id: "copious-simmered-fruit-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fartura de fruta cozida Gelado", en: "Copious Simmered Fruit (Chilly)" },
    hearts: 2,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["hydromelon"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_simmered_fruit_icon.png",
  },
  {
    id: "copious-simmered-fruit-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Fartura de fruta cozida Ligeiro", en: "Copious Simmered Fruit (Hasty)" },
    hearts: 2,
    durationSeconds: 60,
    ingredients: [
      {
        materialIds: ["fleet-lotus-seeds"],
      },
    ],
    isGeneric: true,
    image: "recipes/copious_simmered_fruit_icon.png",
  },
  {
    id: "spiced-meat-skewer-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Espeto de carne apimentado", en: "Spiced Meat Skewer" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["goron-spice"],
      },
      {
        materialIds: ["raw-meat"],
      },
    ],
    image: "recipes/spiced_meat_skewer_icon.png",
  },
  {
    id: "steamed-fish-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Peixe no vapor Robusto", en: "Steamed Fish (Mighty)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["mighty-carp", "mighty-porgy", "razorclaw-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Robusto)", en: "Any Seafood (Mighty)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    notes: "Usando Mighty Porgy, Razorclaw Crab em vez de Mighty Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Peixe no vapor Picante", en: "Steamed Fish (Spicy)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["sizzlefin-trout"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Peixe no vapor Protetor", en: "Steamed Fish (Tough)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["armored-carp", "armored-porgy", "ironshell-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Protetor)", en: "Any Seafood (Tough)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    notes: "Usando Armored Porgy, Ironshell Crab em vez de Armored Carp no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Peixe no vapor Isolante", en: "Steamed Fish (Electro)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["voltfin-trout"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Peixe no vapor Vivaz", en: "Steamed Fish (Hearty)" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-bass", "hearty-salmon", "hearty-blueshell-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Vivaz)", en: "Any Seafood (Hearty)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    notes: "Usando Hearty Salmon, Hearty Blueshell Snail em vez de Hearty Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Peixe no vapor Revitalizante", en: "Steamed Fish (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
      {
        materialIds: ["endura-carrot"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Peixe no vapor", en: "Steamed Fish" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Peixe no vapor Gelado", en: "Steamed Fish (Chilly)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["chillfin-trout"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Peixe no vapor Revigorante", en: "Steamed Fish (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["staminoka-bass", "bright-eyed-crab"],
        label: { "pt-br": "Qualquer fruto do mar (Revigorante)", en: "Any Seafood (Energizing)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    staminaWheels: 5,
    notes: "Usando Bright-Eyed Crab em vez de Staminoka Bass no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Peixe no vapor Ligeiro", en: "Steamed Fish (Hasty)" },
    hearts: 4,
    durationSeconds: 90,
    ingredients: [
      {
        materialIds: ["hyrule-bass", "sanke-carp"],
        label: { "pt-br": "Qualquer fruto do mar (sem efeito)", en: "Any Seafood (no effect)" },
      },
      {
        materialIds: ["swift-carrot", "swift-violet"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Ligeiro)", en: "Any Vegetable, Herb, or Flower (Hasty)" },
      },
    ],
    notes: "Usando Swift Violet em vez de Swift Carrot no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fish-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Peixe no vapor Furtivo", en: "Steamed Fish (Sneaky)" },
    hearts: 4,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["stealthfin-trout", "sneaky-river-snail"],
        label: { "pt-br": "Qualquer fruto do mar (Furtivo)", en: "Any Seafood (Sneaky)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    notes: "Usando Sneaky River Snail em vez de Stealthfin Trout no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_fish_icon.png",
  },
  {
    id: "steamed-fruit-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Fruta no vapor Robusto", en: "Steamed Fruit (Mighty)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["mighty-bananas"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Fruta no vapor Picante", en: "Steamed Fruit (Spicy)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Fruta no vapor Protetor", en: "Steamed Fruit (Tough)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["fortified-pumpkin", "armoranth"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Protetor)", en: "Any Vegetable, Herb, or Flower (Tough)" },
      },
    ],
    notes: "Usando Armoranth em vez de Fortified Pumpkin no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Fruta no vapor Isolante", en: "Steamed Fruit (Electro)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["voltfruit"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Fruta no vapor Vivaz", en: "Steamed Fruit (Hearty)" },
    hearts: 26,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-durian"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Fruta no vapor Revitalizante", en: "Steamed Fruit (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["endura-carrot"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Fruta no vapor", en: "Steamed Fruit" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Fruta no vapor Gelado", en: "Steamed Fruit (Chilly)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["hydromelon"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Fruta no vapor Ligeiro", en: "Steamed Fruit (Hasty)" },
    hearts: 4,
    durationSeconds: 90,
    ingredients: [
      {
        materialIds: ["fleet-lotus-seeds"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-fruit-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Fruta no vapor Furtivo", en: "Steamed Fruit (Sneaky)" },
    hearts: 4,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["apple", "wildberry", "palm-fruit"],
        label: { "pt-br": "Qualquer fruta (sem efeito)", en: "Any Fruit (no effect)" },
      },
      {
        materialIds: ["blue-nightshade", "silent-princess"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Furtivo)", en: "Any Vegetable, Herb, or Flower (Sneaky)" },
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_fruit_icon.png",
  },
  {
    id: "steamed-meat-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Carne no vapor Robusto", en: "Steamed Meat (Mighty)" },
    hearts: 6,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["mighty-thistle"],
      },
    ],
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Carne no vapor Picante", en: "Steamed Meat (Spicy)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["warm-safflina"],
      },
    ],
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Carne no vapor Protetor", en: "Steamed Meat (Tough)" },
    hearts: 6,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["armoranth"],
      },
    ],
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Carne no vapor Isolante", en: "Steamed Meat (Electro)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["electric-safflina"],
      },
    ],
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Carne no vapor Vivaz", en: "Steamed Meat (Hearty)" },
    hearts: 16,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
      },
    ],
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Carne no vapor Revitalizante", en: "Steamed Meat (Enduring)" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["endura-carrot"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Carne no vapor", en: "Steamed Meat" },
    hearts: 6,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Carne no vapor Gelado", en: "Steamed Meat (Chilly)" },
    hearts: 6,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["cool-safflina"],
      },
    ],
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Carne no vapor Ligeiro", en: "Steamed Meat (Hasty)" },
    hearts: 6,
    durationSeconds: 90,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["swift-carrot", "swift-violet"],
      },
    ],
    notes: "Usando Swift Violet em vez de Swift Carrot no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-meat-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Carne no vapor Furtivo", en: "Steamed Meat (Sneaky)" },
    hearts: 6,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["raw-meat", "raw-prime-meat", "raw-gourmet-meat", "raw-bird-drumstick", "raw-bird-thigh", "raw-whole-bird"],
        label: { "pt-br": "Qualquer carne", en: "Any Meat" },
      },
      {
        materialIds: ["blue-nightshade", "silent-princess"],
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_meat_icon.png",
  },
  {
    id: "steamed-mushrooms-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Cogumelos no vapor Robusto", en: "Steamed Mushrooms (Mighty)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["razorshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Cogumelos no vapor Picante", en: "Steamed Mushrooms (Spicy)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["sunshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Cogumelos no vapor Protetor", en: "Steamed Mushrooms (Tough)" },
    hearts: 4,
    durationSeconds: 80,
    ingredients: [
      {
        materialIds: ["ironshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Cogumelos no vapor Isolante", en: "Steamed Mushrooms (Electro)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["zapshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Cogumelos no vapor Vivaz", en: "Steamed Mushrooms (Hearty)" },
    hearts: 10,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-truffle", "big-hearty-truffle"],
        label: { "pt-br": "Qualquer cogumelo (Vivaz)", en: "Any Mushroom (Hearty)" },
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    notes: "Usando Big Hearty Truffle em vez de Hearty Truffle no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Cogumelos no vapor Revitalizante", en: "Steamed Mushrooms (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-shroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Cogumelos no vapor", en: "Steamed Mushrooms" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hylian-shroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Cogumelos no vapor Gelado", en: "Steamed Mushrooms (Chilly)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["chillshroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-restore-stamina",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Revigorante", en: "Energizing" },
    name: { "pt-br": "Cogumelos no vapor Revigorante", en: "Steamed Mushrooms (Energizing)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["stamella-shroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    staminaWheels: 1,
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Cogumelos no vapor Ligeiro", en: "Steamed Mushrooms (Hasty)" },
    hearts: 4,
    durationSeconds: 90,
    ingredients: [
      {
        materialIds: ["rushroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "steamed-mushrooms-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Cogumelos no vapor Furtivo", en: "Steamed Mushrooms (Sneaky)" },
    hearts: 4,
    durationSeconds: 150,
    ingredients: [
      {
        materialIds: ["silent-shroom"],
      },
      {
        materialIds: ["hyrule-herb"],
      },
    ],
    image: "recipes/steamed_mushrooms_icon.png",
  },
  {
    id: "vegetable-curry-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Curry de vegetais Protetor", en: "Vegetable Curry (Tough)" },
    hearts: 4,
    durationSeconds: 440,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/vegetable_curry_icon.png",
  },
  {
    id: "vegetable-curry-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Curry de vegetais Revitalizante", en: "Vegetable Curry (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/vegetable_curry_icon.png",
  },
  {
    id: "vegetable-curry-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Curry de vegetais Ligeiro", en: "Vegetable Curry (Hasty)" },
    hearts: 4,
    durationSeconds: 450,
    ingredients: [
      {
        materialIds: ["swift-carrot"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goron-spice"],
      },
    ],
    image: "recipes/vegetable_curry_icon.png",
  },
  {
    id: "vegetable-omelet-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Omelete de vegetais Robusto", en: "Vegetable Omelet (Mighty)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["mighty-thistle"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Omelete de vegetais Picante", en: "Vegetable Omelet (Spicy)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["warm-safflina"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Omelete de vegetais Protetor", en: "Vegetable Omelet (Tough)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin", "armoranth"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Protetor)", en: "Any Vegetable, Herb, or Flower (Tough)" },
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Armoranth em vez de Fortified Pumpkin no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Omelete de vegetais Isolante", en: "Vegetable Omelet (Electro)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["electric-safflina"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Omelete de vegetais Vivaz", en: "Vegetable Omelet (Hearty)" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Vivaz)", en: "Any Vegetable, Herb, or Flower (Hearty)" },
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Omelete de vegetais Revitalizante", en: "Vegetable Omelet (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Omelete de vegetais", en: "Vegetable Omelet" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Omelete de vegetais Gelado", en: "Vegetable Omelet (Chilly)" },
    hearts: 4,
    durationSeconds: 390,
    ingredients: [
      {
        materialIds: ["cool-safflina"],
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Omelete de vegetais Ligeiro", en: "Vegetable Omelet (Hasty)" },
    hearts: 4,
    durationSeconds: 300,
    ingredients: [
      {
        materialIds: ["swift-carrot", "swift-violet"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Ligeiro)", en: "Any Vegetable, Herb, or Flower (Hasty)" },
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Swift Violet em vez de Swift Carrot no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-omelet-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Omelete de vegetais Furtivo", en: "Vegetable Omelet (Sneaky)" },
    hearts: 4,
    durationSeconds: 360,
    ingredients: [
      {
        materialIds: ["blue-nightshade", "silent-princess"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Furtivo)", en: "Any Vegetable, Herb, or Flower (Sneaky)" },
      },
      {
        materialIds: ["bird-egg"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/vegetable_omelet_icon.png",
  },
  {
    id: "vegetable-risotto-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Risoto de vegetais Protetor", en: "Vegetable Risotto (Tough)" },
    hearts: 4,
    durationSeconds: 290,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/vegetable_risotto_icon.png",
  },
  {
    id: "vegetable-risotto-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Risoto de vegetais Revitalizante", en: "Vegetable Risotto (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/vegetable_risotto_icon.png",
  },
  {
    id: "vegetable-risotto-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Risoto de vegetais Ligeiro", en: "Vegetable Risotto (Hasty)" },
    hearts: 4,
    durationSeconds: 300,
    ingredients: [
      {
        materialIds: ["swift-carrot"],
      },
      {
        materialIds: ["hylian-rice"],
      },
      {
        materialIds: ["goat-butter"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/vegetable_risotto_icon.png",
  },
  {
    id: "veggie-cream-soup-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Creme de vegetais Protetor", en: "Veggie Cream Soup (Tough)" },
    hearts: 4,
    durationSeconds: 260,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/veggie_cream_soup_icon.png",
  },
  {
    id: "veggie-cream-soup-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Creme de vegetais Revitalizante", en: "Veggie Cream Soup (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/veggie_cream_soup_icon.png",
  },
  {
    id: "veggie-cream-soup-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Creme de vegetais Ligeiro", en: "Veggie Cream Soup (Hasty)" },
    hearts: 4,
    durationSeconds: 270,
    ingredients: [
      {
        materialIds: ["swift-carrot"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/veggie_cream_soup_icon.png",
  },
  {
    id: "veggie-rice-balls-attack",
    effect: "attack",
    variantLabel: { "pt-br": "Robusto", en: "Mighty" },
    name: { "pt-br": "Bolinho de arroz com vegetais Robusto", en: "Veggie Rice Balls (Mighty)" },
    hearts: 4,
    durationSeconds: 110,
    ingredients: [
      {
        materialIds: ["mighty-thistle"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-cold-resist",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Picante", en: "Spicy" },
    name: { "pt-br": "Bolinho de arroz com vegetais Picante", en: "Veggie Rice Balls (Spicy)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["warm-safflina"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-defense",
    effect: "defense",
    variantLabel: { "pt-br": "Protetor", en: "Tough" },
    name: { "pt-br": "Bolinho de arroz com vegetais Protetor", en: "Veggie Rice Balls (Tough)" },
    hearts: 4,
    durationSeconds: 110,
    ingredients: [
      {
        materialIds: ["fortified-pumpkin", "armoranth"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Protetor)", en: "Any Vegetable, Herb, or Flower (Tough)" },
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    notes: "Usando Armoranth em vez de Fortified Pumpkin no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-electric-resist",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Isolante", en: "Electro" },
    name: { "pt-br": "Bolinho de arroz com vegetais Isolante", en: "Veggie Rice Balls (Electro)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["electric-safflina"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-extra-hearts",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Vivaz", en: "Hearty" },
    name: { "pt-br": "Bolinho de arroz com vegetais Vivaz", en: "Veggie Rice Balls (Hearty)" },
    hearts: 14,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hearty-radish", "big-hearty-radish"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Vivaz)", en: "Any Vegetable, Herb, or Flower (Hearty)" },
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    notes: "Usando Big Hearty Radish em vez de Hearty Radish no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-extra-stamina",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Revitalizante", en: "Enduring" },
    name: { "pt-br": "Bolinho de arroz com vegetais Revitalizante", en: "Veggie Rice Balls (Enduring)" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["endura-carrot"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    staminaWheels: 2,
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Bolinho de arroz com vegetais", en: "Veggie Rice Balls" },
    hearts: 4,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["hyrule-herb"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-heat-resist",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Gelado", en: "Chilly" },
    name: { "pt-br": "Bolinho de arroz com vegetais Gelado", en: "Veggie Rice Balls (Chilly)" },
    hearts: 4,
    durationSeconds: 210,
    ingredients: [
      {
        materialIds: ["cool-safflina"],
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-speed",
    effect: "speed",
    variantLabel: { "pt-br": "Ligeiro", en: "Hasty" },
    name: { "pt-br": "Bolinho de arroz com vegetais Ligeiro", en: "Veggie Rice Balls (Hasty)" },
    hearts: 4,
    durationSeconds: 120,
    ingredients: [
      {
        materialIds: ["swift-carrot", "swift-violet"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Ligeiro)", en: "Any Vegetable, Herb, or Flower (Hasty)" },
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    notes: "Usando Swift Violet em vez de Swift Carrot no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "veggie-rice-balls-stealth",
    effect: "stealth",
    variantLabel: { "pt-br": "Furtivo", en: "Sneaky" },
    name: { "pt-br": "Bolinho de arroz com vegetais Furtivo", en: "Veggie Rice Balls (Sneaky)" },
    hearts: 4,
    durationSeconds: 180,
    ingredients: [
      {
        materialIds: ["blue-nightshade", "silent-princess"],
        label: { "pt-br": "Qualquer vegetal, erva ou flor (Furtivo)", en: "Any Vegetable, Herb, or Flower (Sneaky)" },
      },
      {
        materialIds: ["hylian-rice"],
      },
    ],
    notes: "Usando Silent Princess em vez de Blue Nightshade no lugar desse ingrediente, os corações mudam (mesmo efeito).",
    image: "recipes/veggie_rice_balls_icon.png",
  },
  {
    id: "warm-milk-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Leite quente", en: "Warm Milk" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["fresh-milk"],
      },
    ],
    image: "recipes/warm_milk_icon.png",
  },
  {
    id: "wheat-bread-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Pão de trigo", en: "Wheat Bread" },
    hearts: 2,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["rock-salt"],
      },
    ],
    image: "recipes/wheat_bread_icon.png",
  },
  {
    id: "wildberry-crepe-heal",
    effect: "heal",
    variantLabel: { "pt-br": "Prato Cozido", en: "Cooked Dish" },
    name: { "pt-br": "Crepe de fruta silvestre", en: "Wildberry Crepe" },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      {
        materialIds: ["wildberry"],
      },
      {
        materialIds: ["fresh-milk"],
      },
      {
        materialIds: ["cane-sugar"],
      },
      {
        materialIds: ["tabantha-wheat"],
      },
      {
        materialIds: ["bird-egg"],
      },
    ],
    image: "recipes/wildberry_crepe_icon.png",
  },
  {
    id: "extra-hearts-elixir",
    effect: "extra-hearts",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Robusto (Lagartixa)",
      en: "Hearty Lizard Elixir",
    },
    hearts: 8,
    durationSeconds: 0,
    ingredients: [
      { materialIds: ["hearty-lizard"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/hearty_elixir_icon.png",
  },

  {
    id: "restore-stamina-elixir",
    effect: "restore-stamina",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Vigoroso (Besouro Energético)",
      en: "Energetic Rhino Beetle Elixir",
    },
    hearts: 0,
    durationSeconds: 0,
    ingredients: [
      { materialIds: ["energetic-rhino-beetle"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    staminaWheels: 1,
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/energizing_elixir_icon.png",
  },

  {
    id: "extra-stamina-elixir",
    effect: "extra-stamina",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Resistente (Borboleta Sufocante)",
      en: "Smotherwing Butterfly Elixir",
    },
    hearts: 0,
    durationSeconds: 0,
    ingredients: [
      { materialIds: ["smotherwing-butterfly"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    staminaWheels: 2,
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/enduring_elixir_icon.png",
  },

  {
    id: "attack-elixir",
    effect: "attack",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Poderoso (Besouro Rinoceronte Laminado)",
      en: "Bladed Rhino Beetle Elixir",
    },
    hearts: 0,
    durationSeconds: 200,
    ingredients: [
      { materialIds: ["bladed-rhino-beetle"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/mighty_elixir_icon.png",
  },

  {
    id: "defense-elixir",
    effect: "defense",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Blindado (Besouro Rinoceronte Resistente)",
      en: "Rugged Rhino Beetle Elixir",
    },
    hearts: 0,
    durationSeconds: 160,
    ingredients: [
      { materialIds: ["rugged-rhino-beetle"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/tough_elixir_icon.png",
  },

  {
    id: "speed-elixir",
    effect: "speed",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Veloz (Sapo Apressado)",
      en: "Hot-Footed Frog Elixir",
    },
    hearts: 0,
    durationSeconds: 170,
    ingredients: [
      { materialIds: ["hot-footed-frog"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/hasty_elixir_icon.png",
  },

  {
    id: "stealth-elixir",
    effect: "stealth",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Furtivo (Vaga-Lume do Poente)",
      en: "Sunset Firefly Elixir",
    },
    hearts: 0,
    durationSeconds: 270,
    ingredients: [
      { materialIds: ["sunset-firefly"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/sneaky_elixir_icon.png",
  },

  {
    id: "cold-resist-elixir",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Apimentado (Borboleta de Inverno)",
      en: "Winterwing Butterfly Elixir",
    },
    hearts: 0,
    durationSeconds: 300,
    ingredients: [
      { materialIds: ["winterwing-butterfly"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/spicy_elixir_icon.png",
  },

  {
    id: "heat-resist-elixir",
    effect: "heat-resist",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Gélido (Borboleta de Verão)",
      en: "Summerwing Butterfly Elixir",
    },
    hearts: 0,
    durationSeconds: 300,
    ingredients: [
      { materialIds: ["summerwing-butterfly"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/chilly_elixir_icon.png",
  },

  {
    id: "electric-resist-elixir",
    effect: "electric-resist",
    variantLabel: { "pt-br": "Elixir", en: "Elixir" },
    name: {
      "pt-br": "Elixir Elétrico (Borboleta Trovejante)",
      en: "Thunderwing Butterfly Elixir",
    },
    hearts: 0,
    durationSeconds: 300,
    ingredients: [
      { materialIds: ["thunderwing-butterfly"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/electro_elixir_icon.png",
  },

  {
    id: "fireproof-elixir-tier-1",
    effect: "fireproof",
    variantLabel: { "pt-br": "Nível 1", en: "Tier 1" },
    name: {
      "pt-br": "Elixir à Prova de Fogo (Lagartixa)",
      en: "Fireproof Lizard Elixir",
    },
    hearts: 0,
    durationSeconds: 160,
    ingredients: [
      { materialIds: ["fireproof-lizard"] },
      { materialIds: ["bokoblin-horn"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/fireproof_elixir_icon.png",
  },

  {
    id: "fireproof-elixir-tier-2",
    effect: "fireproof",
    variantLabel: { "pt-br": "Nível 2", en: "Tier 2" },
    name: {
      "pt-br": "Elixir à Prova de Fogo Reforçado",
      en: "Reinforced Fireproof Elixir",
    },
    hearts: 0,
    durationSeconds: 240,
    ingredients: [
      { materialIds: ["fireproof-lizard"] },
      { materialIds: ["fireproof-lizard"] },
      { materialIds: ["bokoblin-fang"] },
    ],
    notes:
      "Elixir: precisa de reagente de monstro para não sair como Comida Duvidosa.",
    image: "recipes/fireproof_elixir_icon.png",
  },
];
