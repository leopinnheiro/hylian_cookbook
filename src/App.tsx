import { useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { effects, materials, materialsById, recipeTemplates } from "./data";
import type { EffectId, Material, Recipe, RecipeTemplate } from "./data/types";
import type { Tab } from "./lib/tabs";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { RecipesView } from "./components/RecipesView";
import { MaterialsView } from "./components/materials/MaterialsView";
import { Sidebar } from "./components/Sidebar";
import { RecipeCreatorView } from "./components/creator/RecipeCreatorView";
import { SavedCombosView } from "./components/creator/SavedCombosView";
import { AdvantageCalculatorView } from "./components/calculator/AdvantageCalculatorView";
import { RecommendedView } from "./components/recommended/RecommendedView";
import { recommendedCombos } from "./data/recommended";
import { useSavedCombos } from "./hooks/useSavedCombos";
import {
  findMatchingDishes,
  ingredientsToSelection,
  pickDisplayDish,
  sortJunkLast,
  templateEffects,
} from "./lib/matchRecipes";
import { computeDish } from "./lib/cookingFormula";
import { comboToRecipe } from "./lib/comboToRecipe";
import { normalizeSearch } from "./lib/format";

function matchesRecipeSearch(template: RecipeTemplate, query: string): boolean {
  if (!query.trim()) return true;
  const needle = normalizeSearch(query.trim());
  return (
    normalizeSearch(template.name["pt-br"]).includes(needle) ||
    normalizeSearch(template.name.en).includes(needle)
  );
}

function matchesMaterialSearch(material: Material, query: string): boolean {
  if (!query.trim()) return true;
  const needle = normalizeSearch(query.trim());
  return (
    normalizeSearch(material.name["pt-br"]).includes(needle) ||
    normalizeSearch(material.name.en).includes(needle) ||
    normalizeSearch(material.id).includes(needle)
  );
}


function App() {
  const [tab, setTab] = useState<Tab>("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedEffects, setSelectedEffects] = useState<EffectId[]>([]);
  const [materialsQuery, setMaterialsQuery] = useState("");
  const [favoritesQuery, setFavoritesQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { combos, saveCombo, removeCombo } = useSavedCombos();
  const [creatorSeed, setCreatorSeed] = useState<(string | null)[] | undefined>(
    undefined,
  );
  const [creatorSeedKey, setCreatorSeedKey] = useState(0);

  const handleSaveCombo = (materialIds: (string | null)[]) => {
    const saved = saveCombo(materialIds);
    if (saved) {
      toast("Combinação salva em Minhas Combinações", { icon: "⭐" });
    } else {
      toast("Essa combinação já está salva", { icon: "ℹ️" });
    }
  };

  const openInCreator = (ingredients: Recipe["ingredients"]) => {
    setCreatorSeed(ingredientsToSelection(ingredients));
    setCreatorSeedKey((key) => key + 1);
    setTab("creator");
  };

  const handleOpenTemplateInCreator = (template: RecipeTemplate) => {
    openInCreator(template.ingredients);
  };

  const handleOpenRecipeInCreator = (recipe: Recipe) => {
    openInCreator(recipe.ingredients);
  };

  const filteredTemplates = useMemo(() => {
    return recipeTemplates
      .filter((template) =>
        selectedEffects.length > 0
          ? templateEffects(template).some((effect) =>
              selectedEffects.includes(effect),
            )
          : true,
      )
      .filter((template) => matchesRecipeSearch(template, query));
  }, [selectedEffects, query]);

  const groups = useMemo(() => {
    const effectGroups = effects.map((effect) => ({
      effect,
      items: sortJunkLast(
        filteredTemplates.filter((template) =>
          templateEffects(template).includes(effect.id),
        ),
      ),
    }));
    const noEffectGroup = {
      effect: {
        id: "none",
        name: { "pt-br": "Comida Duvidosa", en: "Dubious Food" },
        icon: "icons/heart.svg",
      },
      items:
        selectedEffects.length === 0
          ? sortJunkLast(
              filteredTemplates.filter(
                (template) => templateEffects(template).length === 0,
              ),
            )
          : [],
    };
    return [...effectGroups, noEffectGroup].filter(
      (group) => group.items.length > 0,
    );
  }, [filteredTemplates, selectedEffects]);

  const filteredCombos = useMemo(() => {
    return combos
      .filter((combo) => {
        if (selectedEffects.length === 0) return true;
        const effect = computeDish(combo.materialIds).effect;
        return effect !== undefined && selectedEffects.includes(effect);
      })
      .filter((combo) => {
        if (!favoritesQuery.trim()) return true;
        const needle = normalizeSearch(favoritesQuery.trim());
        const dish = pickDisplayDish(
          combo.materialIds,
          findMatchingDishes(combo.materialIds),
        );
        if (dish) {
          return (
            normalizeSearch(dish.name["pt-br"]).includes(needle) ||
            normalizeSearch(dish.name.en).includes(needle)
          );
        }
        return combo.materialIds.some(
          (id) =>
            id &&
            normalizeSearch(materialsById[id]?.name["pt-br"] ?? "").includes(
              needle,
            ),
        );
      });
  }, [combos, selectedEffects, favoritesQuery]);

  // A Calculadora não tem mais um catálogo estático pra filtrar por vantagem
  // (ver docs/cooking-formula.md) — usa as próprias combinações salvas como
  // fonte, convertidos pro resultado exato via computeDish.
  const calculatorRecipes = useMemo(
    () => combos.map(comboToRecipe),
    [combos],
  );

  const filteredMaterials = useMemo(() => {
    return materials
      .filter((material) =>
        selectedCategory ? material.category === selectedCategory : true,
      )
      .filter((material) => matchesMaterialSearch(material, materialsQuery));
  }, [selectedCategory, materialsQuery]);

  const showEmptySearch = groups.length === 0 && tab === "all";
  const showEmptyMaterials = filteredMaterials.length === 0;

  return (
    <div className="flex h-dvh overflow-hidden bg-obsidian">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 750,
          style: {
            background: "var(--color-obsidian)",
            color: "var(--color-rune-paper)",
            border: "1px solid var(--color-ember)",
            boxShadow:
              "0 0 16px 1px color-mix(in srgb, var(--color-ember) 40%, transparent)",
            fontFamily: "var(--font-chrome)",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            borderRadius: 0,
          },
        }}
      />

      <Sidebar
        tab={tab}
        onTabChange={setTab}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex h-dvh flex-1 flex-col overflow-hidden">
        <AppHeader
          tab={tab}
          onMenuClick={() => setSidebarOpen(true)}
          query={query}
          onQueryChange={setQuery}
          selectedEffects={selectedEffects}
          onSelectedEffectsChange={setSelectedEffects}
          materialsQuery={materialsQuery}
          onMaterialsQueryChange={setMaterialsQuery}
          selectedCategory={selectedCategory}
          onSelectedCategoryChange={setSelectedCategory}
          favoritesQuery={favoritesQuery}
          onFavoritesQueryChange={setFavoritesQuery}
        />

        <div
          className={`flex-1 ${tab === "creator" || tab === "calculator" ? "overflow-hidden" : "overflow-y-auto"}`}
        >
          {tab === "materials" ? (
            <MaterialsView
              items={filteredMaterials}
              showEmpty={showEmptyMaterials}
            />
          ) : tab === "creator" ? (
            <RecipeCreatorView
              key={creatorSeedKey}
              onSave={handleSaveCombo}
              initialSelection={creatorSeed}
            />
          ) : tab === "favorites" ? (
            <SavedCombosView
              combos={filteredCombos}
              onRemove={removeCombo}
              hasCombos={combos.length > 0}
            />
          ) : tab === "calculator" ? (
            <AdvantageCalculatorView
              recipes={calculatorRecipes}
              onOpenInCreator={handleOpenRecipeInCreator}
            />
          ) : tab === "recommended" ? (
            <RecommendedView
              combos={recommendedCombos}
              onOpenInCreator={handleOpenRecipeInCreator}
            />
          ) : (
            <RecipesView
              groups={groups}
              showEmptySearch={showEmptySearch}
              onOpenInCreator={handleOpenTemplateInCreator}
            />
          )}

          {tab === "all" && <AppFooter />}
        </div>
      </div>
    </div>
  );
}

export default App;
