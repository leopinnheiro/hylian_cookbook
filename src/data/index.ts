import { materials } from "./materials";
import { recipes } from "./recipes";
import { effects } from "./effects";
import type { Material } from "./types";

export { materials, recipes, effects };
export * from "./types";

export const materialsById: Record<string, Material> = Object.fromEntries(
  materials.map((material) => [material.id, material]),
);
