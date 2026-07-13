import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import type { EffectId } from "../data/types";
import { SearchBar } from "./SearchBar";
import { EffectFilter } from "./EffectFilter";
import { CategoryFilter } from "./materials/CategoryFilter";
import type { Tab } from "../lib/tabs";

const TAB_LABELS: Record<Tab, string> = {
  all: "Receitas",
  favorites: "Favoritos",
  materials: "Materiais",
  creator: "Criar Receita WIP",
};

interface AppHeaderProps {
  tab: Tab;
  onMenuClick: () => void;
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
  onMenuClick,
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
  const hasSearchAndFilter = tab === "all" || tab === "materials";

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

        {hasSearchAndFilter && (
          <>
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
          </>
        )}
      </div>
    </header>
  );
}
