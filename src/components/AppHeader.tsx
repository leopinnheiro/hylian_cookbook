import { Menu } from "lucide-react";
import type { EffectId } from "../data/types";
import { SearchBar } from "./SearchBar";
import { EffectIconFilter } from "./EffectIconFilter";
import { CategoryFilter } from "./materials/CategoryFilter";
import type { Tab } from "../lib/tabs";

const TAB_LABELS: Record<Tab, string> = {
  all: "Receitas",
  favorites: "Favoritos",
  materials: "Materiais",
  creator: "Criar Receita WIP",
  calculator: "Calculadora",
};

interface AppHeaderProps {
  tab: Tab;
  onMenuClick: () => void;
  query: string;
  onQueryChange: (query: string) => void;
  selectedEffects: EffectId[];
  onSelectedEffectsChange: (effects: EffectId[]) => void;
  materialsQuery: string;
  onMaterialsQueryChange: (query: string) => void;
  selectedCategory: string | null;
  onSelectedCategoryChange: (category: string | null) => void;
  favoritesQuery: string;
  onFavoritesQueryChange: (query: string) => void;
}

export function AppHeader({
  tab,
  onMenuClick,
  query,
  onQueryChange,
  selectedEffects,
  onSelectedEffectsChange,
  materialsQuery,
  onMaterialsQueryChange,
  selectedCategory,
  onSelectedCategoryChange,
  favoritesQuery,
  onFavoritesQueryChange,
}: AppHeaderProps) {
  const isMaterials = tab === "materials";
  const isFavorites = tab === "favorites";
  const hasFilters =
    tab === "all" || tab === "materials" || tab === "favorites";
  const hasSearchBar = tab === "all" || tab === "materials" || tab === "favorites";

  return (
    <header className="flex-none border-ash-steel/30 bg-deep-steel/80 px-4 py-4 backdrop-blur border">
      <div className="mx-auto flex max-w-4xl flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onMenuClick}
              aria-label="Abrir menu"
              className="text-ash-steel hover:text-sheikah md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <span
              className="h-6 w-px bg-ash-steel/40 md:hidden"
              aria-hidden="true"
            />
            <h1 className="font-chrome text-sm uppercase tracking-[0.15em] text-rune-paper">
              {TAB_LABELS[tab]}
            </h1>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Hylian Cookbook"
            className="h-8 w-auto"
          />
        </div>

        {hasFilters && (
          <>
            {hasSearchBar &&
              (isMaterials ? (
                <SearchBar
                  value={materialsQuery}
                  onChange={onMaterialsQueryChange}
                  placeholder="Buscar material (pt-br ou en)…"
                  label="Buscar material por nome"
                />
              ) : isFavorites ? (
                <SearchBar
                  value={favoritesQuery}
                  onChange={onFavoritesQueryChange}
                  placeholder="Buscar combinação salva (pt-br ou en)…"
                  label="Buscar combinação salva por nome"
                />
              ) : (
                <SearchBar value={query} onChange={onQueryChange} />
              ))}

            {isMaterials ? (
              <CategoryFilter
                selected={selectedCategory}
                onSelect={onSelectedCategoryChange}
              />
            ) : (
              <EffectIconFilter
                selected={selectedEffects}
                onChange={onSelectedEffectsChange}
              />
            )}
          </>
        )}
      </div>
    </header>
  );
}
