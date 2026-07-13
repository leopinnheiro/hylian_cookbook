import type { SavedCombo } from "../../hooks/useSavedCombos";
import { EmptyState } from "../EmptyState";
import { SavedComboCard } from "./SavedComboCard";

interface SavedCombosViewProps {
  combos: SavedCombo[];
  onRemove: (id: string) => void;
}

export function SavedCombosView({ combos, onRemove }: SavedCombosViewProps) {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6">
      {combos.length === 0 ? (
        <EmptyState
          title="Nenhuma combinação salva ainda"
          description="Monte uma combinação no Criar Receita e salve pra guardar aqui — seus favoritos ficam salvos neste dispositivo."
        />
      ) : (
        combos.map((combo) => (
          <SavedComboCard
            key={combo.id}
            combo={combo}
            onRemove={() => onRemove(combo.id)}
          />
        ))
      )}
    </main>
  );
}
