import type { Effect, Recipe } from "../data/types";
import { RecipeCard } from "./RecipeCard";
import { EmptyState } from "./EmptyState";

interface RecipeGroup {
  effect: Effect;
  items: Recipe[];
}

interface RecipesViewProps {
  groups: RecipeGroup[];
  showEmptySearch: boolean;
  showEmptyFavorites: boolean;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (recipe: Recipe) => void;
}

export function RecipesView({
  groups,
  showEmptySearch,
  showEmptyFavorites,
  isFavorite,
  onToggleFavorite,
}: RecipesViewProps) {
  return (
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
                onToggleFavorite={() => onToggleFavorite(recipe)}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
