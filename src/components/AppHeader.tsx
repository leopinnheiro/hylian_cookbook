import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { EffectId } from "../data/types";
import { SearchBar } from "./SearchBar";
import { EffectFilter } from "./EffectFilter";
import { TabButton } from "./TabButton";
import { CategoryFilter } from "./materials/CategoryFilter";
import type { Tab } from "../lib/tabs";

interface AppHeaderProps {
  tab: Tab;
  onTabChange: (tab: Tab) => void;
  query: string;
  onQueryChange: (query: string) => void;
  selectedEffect: EffectId | null;
  onSelectedEffectChange: (effect: EffectId | null) => void;
  materialsQuery: string;
  onMaterialsQueryChange: (query: string) => void;
  selectedCategory: string | null;
  onSelectedCategoryChange: (category: string | null) => void;
}

export function AppHeader({
  tab,
  onTabChange,
  query,
  onQueryChange,
  selectedEffect,
  onSelectedEffectChange,
  materialsQuery,
  onMaterialsQueryChange,
  selectedCategory,
  onSelectedCategoryChange,
}: AppHeaderProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const isMaterials = tab === "materials";

  return (
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
              onClick={() => onTabChange("all")}
            />
            <TabButton
              label="Favoritos"
              active={tab === "favorites"}
              onClick={() => onTabChange("favorites")}
            />
            <TabButton
              label="Materiais"
              active={tab === "materials"}
              onClick={() => onTabChange("materials")}
            />
          </nav>
        </div>

        {isMaterials ? (
          <SearchBar
            value={materialsQuery}
            onChange={onMaterialsQueryChange}
            placeholder="Buscar material (pt-br ou en)…"
            label="Buscar material por nome"
          />
        ) : (
          <SearchBar value={query} onChange={onQueryChange} />
        )}

        <div className={`flex flex-col ${filtersOpen ? "gap-2" : "gap-0"}`}>
          <button
            type="button"
            onClick={() => setFiltersOpen((open) => !open)}
            aria-expanded={filtersOpen}
            className="flex items-center gap-1 self-start font-chrome text-xs uppercase tracking-wide text-ash-steel transition-colors hover:text-sheikah pr-3.5 pt-2"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`}
            />
            {isMaterials ? "Filtrar por categoria" : "Filtrar por efeito"}
          </button>
          <div
            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
              filtersOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              {isMaterials ? (
                <CategoryFilter
                  selected={selectedCategory}
                  onSelect={onSelectedCategoryChange}
                />
              ) : (
                <EffectFilter
                  selected={selectedEffect}
                  onSelect={onSelectedEffectChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
