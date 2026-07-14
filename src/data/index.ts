import { materials } from "./materials";
import { recipeTemplates } from "./recipes";
import { effects } from "./effects";
import type { Material } from "./types";

export { materials, recipeTemplates, effects };
export * from "./types";

export const materialsById: Record<string, Material> = Object.fromEntries(
  materials.map((material) => [material.id, material]),
);
