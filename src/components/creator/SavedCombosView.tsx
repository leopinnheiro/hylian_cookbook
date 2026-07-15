import type { SavedCombo } from "../../hooks/useSavedCombos";
import { EmptyState } from "../EmptyState";
import { SavedComboCard } from "./SavedComboCard";

interface SavedCombosViewProps {
  combos: SavedCombo[];
  onRemove: (id: string) => void;
  hasCombos: boolean;
}

export function SavedCombosView({
  combos,
  onRemove,
  hasCombos,
}: SavedCombosViewProps) {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6">
      {combos.length === 0 ? (
        <EmptyState
          title={hasCombos ? "Nenhum resultado" : "Nenhuma combinação salva ainda"}
          description={
            hasCombos
              ? "Nenhuma combinação corresponde à busca ou ao filtro de efeito atual. Tente outro termo ou limpe o filtro."
              : "Monte uma combinação no Criar Receita e salve pra guardar aqui — suas combinações ficam salvas neste dispositivo."
          }
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
