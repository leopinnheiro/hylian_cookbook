import type { LocalizedText, RecipeTemplate } from "../data/types";
import { isJunkTemplate } from "../lib/matchRecipes";
import { CollapsibleSection } from "./CollapsibleSection";
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
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6">
      {showEmptySearch && (
        <EmptyState
          title="Nenhum resultado"
          description="Nenhuma receita corresponde à busca ou ao filtro de efeito atual. Tente outro termo ou limpe o filtro."
        />
      )}

      {groups.map(({ effect, items }) => (
        <CollapsibleSection
          key={effect.id}
          id={`effect-${effect.id}`}
          title={effect.name["pt-br"]}
          count={items.length}
        >
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
        </CollapsibleSection>
      ))}
    </main>
  );
}
