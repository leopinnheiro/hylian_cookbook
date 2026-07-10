import { useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { effects, materials, recipes } from "./data";
import type { EffectId, Material, Recipe } from "./data/types";
import type { Tab } from "./lib/tabs";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { RecipesView } from "./components/RecipesView";
import { MaterialsView } from "./components/materials/MaterialsView";
import { useFavorites } from "./hooks/useFavorites";

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

function sortWithinEffect(list: Recipe[]): Recipe[] {
  return [...list].sort(
    (a, b) => Number(Boolean(a.isGeneric)) - Number(Boolean(b.isGeneric)),
  );
}

function App() {
  const [tab, setTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");
  const [selectedEffect, setSelectedEffect] = useState<EffectId | null>(null);
  const [materialsQuery, setMaterialsQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { isFavorite, toggleFavorite, favoriteIds } = useFavorites();

  const handleToggleFavorite = (recipe: Recipe) => {
    const wasFavorite = isFavorite(recipe.id);
    toggleFavorite(recipe.id);
    toast(
      wasFavorite
        ? `Removido dos favoritos: ${recipe.name["pt-br"]}`
        : `Adicionado aos favoritos: ${recipe.name["pt-br"]}`,
      { icon: wasFavorite ? "💔" : "⭐" },
    );
  };

  const filteredRecipes = useMemo(() => {
    const base =
      tab === "favorites"
        ? recipes.filter((r) => favoriteIds.includes(r.id))
        : recipes;
    return base
      .filter((recipe) =>
        selectedEffect ? recipe.effect === selectedEffect : true,
      )
      .filter((recipe) => matchesRecipeSearch(recipe, query));
  }, [tab, favoriteIds, selectedEffect, query]);

  const groups = useMemo(() => {
    return effects
      .map((effect) => ({
        effect,
        items: sortWithinEffect(
          filteredRecipes.filter((recipe) => recipe.effect === effect.id),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredRecipes]);

  const filteredMaterials = useMemo(() => {
    return materials
      .filter((material) =>
        selectedCategory ? material.category === selectedCategory : true,
      )
      .filter((material) => matchesMaterialSearch(material, materialsQuery));
  }, [selectedCategory, materialsQuery]);

  const showEmptySearch = groups.length === 0 && tab === "all";
  const showEmptyFavorites = groups.length === 0 && tab === "favorites";
  const showEmptyMaterials = filteredMaterials.length === 0;

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-obsidian">
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

      <AppHeader
        tab={tab}
        onTabChange={setTab}
        query={query}
        onQueryChange={setQuery}
        selectedEffect={selectedEffect}
        onSelectedEffectChange={setSelectedEffect}
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
        ) : (
          <RecipesView
            groups={groups}
            showEmptySearch={showEmptySearch}
            showEmptyFavorites={showEmptyFavorites}
            isFavorite={isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {tab !== "materials" && <AppFooter />}
      </div>
    </div>
  );
}

export default App;
