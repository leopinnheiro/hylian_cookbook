import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { LocalizedText, RecipeTemplate } from "../data/types";
import { isJunkTemplate } from "../lib/matchRecipes";
import { RecipeTemplateCard } from "./RecipeTemplateCard";
import { EmptyState } from "./EmptyState";

interface RecipeGroup {
  effect: { id: string; name: LocalizedText; icon?: string };
  items: RecipeTemplate[];
}

interface RecipesViewProps {
  groups: RecipeGroup[];
  showEmptySearch: boolean;
  onOpenInCreator: (template: RecipeTemplate) => void;
}

export function RecipesView({
  groups,
  showEmptySearch,
  onOpenInCreator,
}: RecipesViewProps) {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const toggleCollapsed = (effectId: string) => {
    setCollapsed((current) => {
      const next = new Set(current);
      if (next.has(effectId)) {
        next.delete(effectId);
      } else {
        next.add(effectId);
      }
      return next;
    });
  };

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6">
      {showEmptySearch && (
        <EmptyState
          title="Nenhum resultado"
          description="Nenhuma receita corresponde à busca ou ao filtro de efeito atual. Tente outro termo ou limpe o filtro."
        />
      )}

      {groups.map(({ effect, items }) => {
        const isCollapsed = collapsed.has(effect.id);
        return (
          <section key={effect.id} aria-labelledby={`effect-${effect.id}`}>
            <button
              type="button"
              onClick={() => toggleCollapsed(effect.id)}
              aria-expanded={!isCollapsed}
              className={` ${!isCollapsed && "mb-3"} flex w-full items-center gap-2 font-chrome text-sm uppercase tracking-[0.25em] text-ash-steel hover:text-sheikah`}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4 shrink-0" />
              ) : (
                <ChevronDown className="h-4 w-4 shrink-0" />
              )}
              <div className="flex flex-1 justify-between items-center">
                <span id={`effect-${effect.id}`}>{effect.name["pt-br"]}</span>
                <span className="font-mono text-xs text-ash-steel/70">
                  ({items.length})
                </span>
              </div>
            </button>
            {!isCollapsed && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((template) => (
                  <RecipeTemplateCard
                    key={template.id}
                    template={template}
                    possibleEffectIds={[effect.id]}
                    onOpenInCreator={
                      isJunkTemplate(template.id)
                        ? undefined
                        : () => onOpenInCreator(template)
                    }
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </main>
  );
}
