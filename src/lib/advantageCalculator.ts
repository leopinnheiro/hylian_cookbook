import type { Recipe } from "../data/types";

export interface RecipeBucket {
  value: number;
  items: Recipe[];
}

function cheapestFirst(recipes: Recipe[]): Recipe[] {
  return [...recipes].sort(
    (a, b) => a.ingredients.length - b.ingredients.length,
  );
}

export function bucketRecipesByHearts(
  recipes: Recipe[],
  currentHearts: number,
  topPerBucket = 6,
): RecipeBucket[] {
  const eligible = recipes.filter(
    (recipe) =>
      recipe.effect !== "extra-hearts" &&
      recipe.effect !== "extra-stamina" &&
      recipe.hearts > 0 &&
      recipe.hearts <= currentHearts,
  );

  const byHearts = new Map<number, Recipe[]>();
  for (const recipe of eligible) {
    const bucket = byHearts.get(recipe.hearts) ?? [];
    bucket.push(recipe);
    byHearts.set(recipe.hearts, bucket);
  }

  return Array.from(byHearts.entries())
    .sort(([a], [b]) => b - a)
    .map(([value, items]) => ({
      value,
      items: cheapestFirst(items).slice(0, topPerBucket),
    }));
}

export function bucketRecipesByStamina(
  recipes: Recipe[],
  currentWheelsFifths: number,
  topPerBucket = 6,
): RecipeBucket[] {
  const eligible = recipes.filter(
    (recipe) =>
      recipe.effect === "restore-stamina" &&
      recipe.staminaWheels != null &&
      recipe.staminaWheels > 0 &&
      recipe.staminaWheels <= currentWheelsFifths,
  );

  const byWheels = new Map<number, Recipe[]>();
  for (const recipe of eligible) {
    const wheels = recipe.staminaWheels as number;
    const bucket = byWheels.get(wheels) ?? [];
    bucket.push(recipe);
    byWheels.set(wheels, bucket);
  }

  return Array.from(byWheels.entries())
    .sort(([a], [b]) => b - a)
    .map(([value, items]) => ({
      value,
      items: cheapestFirst(items).slice(0, topPerBucket),
    }));
}
