import type { Material } from "../../data/types";
import { EmptyState } from "../EmptyState";
import { MaterialCard } from "./MaterialCard";

interface MaterialsViewProps {
  items: Material[];
  showEmpty: boolean;
}

export function MaterialsView({ items, showEmpty }: MaterialsViewProps) {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-6">
      {showEmpty && (
        <EmptyState
          title="Nenhum resultado"
          description="Nenhum material corresponde à busca ou categoria selecionada."
        />
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </main>
  );
}
