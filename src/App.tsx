import { useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { effects, materials, recipes } from "./data";
import type { EffectId, Material, Recipe } from "./data/types";
import type { Tab } from "./lib/tabs";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { RecipesView } from "./components/RecipesView";
import { MaterialsView } from "./components/materials/MaterialsView";
import { Sidebar } from "./components/Sidebar";
import { RecipeCreatorView } from "./components/creator/RecipeCreatorView";
import { SavedCombosView } from "./components/creator/SavedCombosView";
import { AdvantageCalculatorView } from "./components/calculator/AdvantageCalculatorView";
import { useSavedCombos } from "./hooks/useSavedCombos";
import { recipeToSelection } from "./lib/matchRecipes";
import { computeDish } from "./lib/cookingFormula";
import { tierCount } from "./lib/format";

function matchesRecipeSearch(recipe: Recipe, query: string): boolean {
  if (!query.trim()) return true;
  const needle = query.trim().toLowerCase();
  return (
    recipe.name["pt-br"].toLowerCase().includes(needle) ||
    recipe.name.en.toLowerCase().includes(needle)
  );
}

function matchesMaterialSearch(material: Material, query: string): boolean {
  if (!query.trim()) return true;
  const needle = query.trim().toLowerCase();
  return (
    material.name["pt-br"].toLowerCase().includes(needle) ||
    material.name.en.toLowerCase().includes(needle) ||
    material.id.toLowerCase().includes(needle)
  );
}

function sortWithinEffect(
  list: Recipe[],
  sortByTier: boolean,
  sortByDuration: boolean,
): Recipe[] {
  return [...list].sort((a, b) => {
    const genericDiff = Number(Boolean(a.isGeneric)) - Number(Boolean(b.isGeneric));
    if (genericDiff !== 0) return genericDiff;
    if (sortByTier) {
      const tierDiff = tierCount(b) - tierCount(a);
      if (tierDiff !== 0) return tierDiff;
    }
    if (sortByDuration) {
      return b.durationSeconds - a.durationSeconds;
    }
    return 0;
  });
}

function App() {
  const [tab, setTab] = useState<Tab>("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedEffects, setSelectedEffects] = useState<EffectId[]>([]);
  const [sortByTier, setSortByTier] = useState(true);
  const [sortByDuration, setSortByDuration] = useState(true);
  const [materialsQuery, setMaterialsQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { combos, saveCombo, removeCombo } = useSavedCombos();
  const [creatorSeed, setCreatorSeed] = useState<(string | null)[] | undefined>(
    undefined,
  );
  const [creatorSeedKey, setCreatorSeedKey] = useState(0);

  const handleSaveCombo = (materialIds: (string | null)[]) => {
    saveCombo(materialIds);
    toast("Combinação salva nos favoritos", { icon: "⭐" });
  };

  const handleOpenInCreator = (recipe: Recipe) => {
    setCreatorSeed(recipeToSelection(recipe));
    setCreatorSeedKey((key) => key + 1);
    setTab("creator");
  };

  const filteredRecipes = useMemo(() => {
    return recipes
      .filter((recipe) =>
        selectedEffects.length > 0
          ? selectedEffects.includes(recipe.effect)
          : true,
      )
      .filter((recipe) => matchesRecipeSearch(recipe, query));
  }, [selectedEffects, query]);

  const groups = useMemo(() => {
    return effects
      .map((effect) => ({
        effect,
        items: sortWithinEffect(
          filteredRecipes.filter((recipe) => recipe.effect === effect.id),
          sortByTier,
          sortByDuration,
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredRecipes, sortByTier, sortByDuration]);

  const filteredCombos = useMemo(() => {
    if (selectedEffects.length === 0) return combos;
    return combos.filter((combo) =>
      selectedEffects.includes(computeDish(combo.materialIds).effect),
    );
  }, [combos, selectedEffects]);

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
          sortByTier={sortByTier}
          onSortByTierChange={setSortByTier}
          sortByDuration={sortByDuration}
          onSortByDurationChange={setSortByDuration}
          materialsQuery={materialsQuery}
          onMaterialsQueryChange={setMaterialsQuery}
          selectedCategory={selectedCategory}
          onSelectedCategoryChange={setSelectedCategory}
        />

        <div className="flex-1 overflow-y-auto">
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
              recipes={recipes}
              onOpenInCreator={handleOpenInCreator}
            />
          ) : (
            <RecipesView
              groups={groups}
              showEmptySearch={showEmptySearch}
              onOpenInCreator={handleOpenInCreator}
            />
          )}

          {tab === "all" && <AppFooter />}
        </div>
      </div>
    </div>
  );
}

export default App;
