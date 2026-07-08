import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { effects, recipes } from "./data";
import type { EffectId, Recipe } from "./data/types";
import { SearchBar } from "./components/SearchBar";
import { EffectFilter } from "./components/EffectFilter";
import { RecipeCard } from "./components/RecipeCard";
import { EmptyState } from "./components/EmptyState";
import { useFavorites } from "./hooks/useFavorites";

type Tab = "all" | "favorites";

function matchesSearch(recipe: Recipe, query: string): boolean {
  if (!query.trim()) return true;
  const needle = query.trim().toLowerCase();
  return (
    recipe.name["pt-br"].toLowerCase().includes(needle) ||
    recipe.name.en.toLowerCase().includes(needle)
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
  const [filtersOpen, setFiltersOpen] = useState(false);
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
      .filter((recipe) => matchesSearch(recipe, query));
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

  const showEmptySearch = groups.length === 0 && tab === "all";
  const showEmptyFavorites = groups.length === 0 && tab === "favorites";

  return (
    <div className="flex h-screen flex-col bg-obsidian">
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
      <header className="flex-none border-ash-steel/30 bg-deep-steel/80 px-4 py-4 backdrop-blur border">
        <div className="mx-auto flex max-w-4xl flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="font-chrome text-xl font-semibold uppercase tracking-[0.2em] text-rune-paper">
              Hylian <span className="text-sheikah">Cookbook</span>
            </h1>
            <nav className="flex gap-1" aria-label="Navegação principal">
              <TabButton
                label="Receitas"
                active={tab === "all"}
                onClick={() => setTab("all")}
              />
              <TabButton
                label="Favoritos"
                active={tab === "favorites"}
                onClick={() => setTab("favorites")}
              />
            </nav>
          </div>
          <SearchBar value={query} onChange={setQuery} />
          <div className={`flex flex-col ${filtersOpen ? "gap-2" : "gap-0"}`}>
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              className="flex items-center gap-1 self-start font-chrome text-xs uppercase tracking-wide text-ash-steel transition-colors hover:text-sheikah border pr-3.5 pt-2"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`}
              />
              Filtrar por efeito
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                filtersOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <EffectFilter
                  selected={selectedEffect}
                  onSelect={setSelectedEffect}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-6">
          {showEmptySearch && (
            <EmptyState
              title="Nenhum resultado"
              description="Nenhuma receita corresponde à busca ou ao filtro de efeito atual. Tente outro termo ou limpe o filtro."
            />
          )}
          {showEmptyFavorites && (
            <EmptyState
              title="Nenhum favorito ainda"
              description="Toque na estrela de uma receita para guardá-la aqui. Seus favoritos ficam salvos neste dispositivo."
            />
          )}

          {groups.map(({ effect, items }) => (
            <section key={effect.id} aria-labelledby={`effect-${effect.id}`}>
              <h2
                id={`effect-${effect.id}`}
                className="mb-3 font-chrome text-sm uppercase tracking-[0.25em] text-ash-steel"
              >
                {effect.name["pt-br"]}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    favorite={isFavorite(recipe.id)}
                    onToggleFavorite={() => handleToggleFavorite(recipe)}
                  />
                ))}
              </div>
            </section>
          ))}
        </main>

        <footer className="mx-auto max-w-4xl px-4 pb-8 text-xs text-ash-steel">
          <p>
            Existe ~10% de chance de bônus aleatório (crítico) em qualquer prato
            cozido — 100% durante a lua de sangue. O resultado real no jogo pode
            variar um pouco pra mais em relação aos valores mostrados aqui.
          </p>
        </footer>
      </div>
    </div>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="border px-3 py-1.5 font-chrome text-xs uppercase tracking-wide transition-colors"
      style={{
        color: active ? "var(--color-obsidian)" : "var(--color-rune-paper)",
        backgroundColor: active ? "var(--color-sheikah)" : "transparent",
        borderColor: active ? "var(--color-sheikah)" : "var(--color-ash-steel)",
      }}
    >
      {label}
    </button>
  );
}

export default App;
