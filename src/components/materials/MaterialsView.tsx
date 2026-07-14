import { useMemo } from "react";
import type { Material } from "../../data/types";
import { CollapsibleSection } from "../CollapsibleSection";
import { EmptyState } from "../EmptyState";
import { MaterialCard } from "./MaterialCard";
import { CATEGORY_LABELS } from "./categoryLabels";

interface MaterialsViewProps {
  items: Material[];
  showEmpty: boolean;
}

const NO_CATEGORY_KEY = "none";
const NO_CATEGORY_LABEL = "Sem categoria";

export function MaterialsView({ items, showEmpty }: MaterialsViewProps) {
  const groups = useMemo(() => {
    const byCategory = new Map<string, Material[]>();
    for (const material of items) {
      const key = material.category ?? NO_CATEGORY_KEY;
      const bucket = byCategory.get(key) ?? [];
      bucket.push(material);
      byCategory.set(key, bucket);
    }
    return [...byCategory.entries()]
      .map(([category, materials]) => ({
        category,
        label: CATEGORY_LABELS[category] ?? NO_CATEGORY_LABEL,
        materials,
      }))
      .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
  }, [items]);

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6">
      {showEmpty && (
        <EmptyState
          title="Nenhum resultado"
          description="Nenhum material corresponde à busca ou categoria selecionada."
        />
      )}

      {groups.map(({ category, label, materials }) => (
        <CollapsibleSection
          key={category}
          id={`category-${category}`}
          title={label}
          count={materials.length}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </CollapsibleSection>
      ))}
    </main>
  );
}
