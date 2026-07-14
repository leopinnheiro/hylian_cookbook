export const CATEGORY_LABELS: Record<string, string> = {
  fruit: "Frutas",
  mushroom: "Cogumelos",
  vegetable: "Vegetais",
  spice: "Temperos",
  meat: "Carnes",
  fish: "Peixe / Água",
  insect: "Insetos",
  "monster-part": "Monstro",
  "dragon-part": "Dragão",
  mineral: "Minérios",
  misc: "Diversos",
};

// Exceção deliberada à paleta de 2 cores (âmbar/ciano) do CLAUDE.md — uma cor
// por categoria de material, só no filtro de Materiais, pra facilitar
// diferenciar categorias de relance numa lista grande.
export const CATEGORY_COLORS: Record<string, string> = {
  fruit: "#ef6461",
  mushroom: "#b48ee0",
  vegetable: "#7fd858",
  spice: "#e3a548",
  meat: "#c97b63",
  fish: "#5fa8e8",
  insect: "#d9c53c",
  "monster-part": "#8d99ae",
  "dragon-part": "#f4a259",
  mineral: "#5fe1e8",
  misc: "#7c8a93",
};
