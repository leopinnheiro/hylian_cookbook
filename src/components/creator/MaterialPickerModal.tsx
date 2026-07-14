import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Clock, Gauge, X } from "lucide-react";
import type { Material } from "../../data/types";
import { materials } from "../../data";
import { normalizeSearch } from "../../lib/format";
import {
  previewIngredientContribution,
  type IngredientContribution,
} from "../../lib/cookingFormula";
import { getViableMaterials } from "../../lib/matchRecipes";
import { SearchBar } from "../SearchBar";
import { Toggle } from "../Toggle";
import { MaterialOptionRow } from "./MaterialOptionRow";
import { SortToggleButton, type SortDirection } from "./SortToggleButton";

type SortKey = "potency" | "duration";
interface SortCriterion {
  key: SortKey;
  direction: SortDirection;
}

interface MaterialPickerModalProps {
  slotIndex: number;
  selection: (string | null)[];
  onSelect: (materialId: string) => void;
  onClose: () => void;
}

const TRANSITION_MS = 200;
const ALL_MATERIAL_IDS = materials.map((m) => m.id);
const SORT_PROPERTY: Record<SortKey, keyof IngredientContribution> = {
  potency: "potency",
  duration: "durationSeconds",
};

export function MaterialPickerModal({
  slotIndex,
  selection,
  onSelect,
  onClose,
}: MaterialPickerModalProps) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [sortStack, setSortStack] = useState<SortCriterion[]>([]);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const viableIds = useMemo(
    () => new Set(getViableMaterials(selection, slotIndex, ALL_MATERIAL_IDS)),
    [selection, slotIndex],
  );

  const candidates: Material[] = showAll
    ? materials
    : materials.filter((m) => viableIds.has(m.id));

  const needle = normalizeSearch(query.trim());
  const searched = needle
    ? candidates.filter(
        (material) =>
          normalizeSearch(material.name["pt-br"]).includes(needle) ||
          normalizeSearch(material.name.en).includes(needle),
      )
    : candidates;

  const previewById = useMemo(() => {
    const map = new Map<string, IngredientContribution>();
    for (const material of searched) {
      map.set(
        material.id,
        previewIngredientContribution(material.id, selection, slotIndex),
      );
    }
    return map;
  }, [searched, selection, slotIndex]);

  // Cada botão empilha um critério de ordenação (clicar de novo alterna
  // desc -> asc -> desliga); o primeiro ativado manda, o segundo desempata.
  const filtered = useMemo(() => {
    if (sortStack.length === 0) return searched;
    return [...searched].sort((a, b) => {
      for (const { key, direction } of sortStack) {
        const property = SORT_PROPERTY[key];
        const valueA = previewById.get(a.id)?.[property] ?? -1;
        const valueB = previewById.get(b.id)?.[property] ?? -1;
        const diff = direction === "desc" ? valueB - valueA : valueA - valueB;
        if (diff !== 0) return diff;
      }
      return 0;
    });
  }, [searched, sortStack, previewById]);

  const toggleSort = (key: SortKey) => {
    setSortStack((current) => {
      const index = current.findIndex((c) => c.key === key);
      if (index === -1) return [...current, { key, direction: "desc" }];
      if (current[index].direction === "desc") {
        const next = [...current];
        next[index] = { key, direction: "asc" };
        return next;
      }
      return current.filter((c) => c.key !== key);
    });
  };

  const sortOf = (key: SortKey) => sortStack.find((c) => c.key === key);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, TRANSITION_MS);
  };
  const shown = visible && !closing;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 p-4 transition-opacity duration-300 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`flex max-h-[80vh] w-full max-w-[90vw] flex-col border border-ash-steel/40 bg-deep-steel transition-[opacity,transform] duration-300 ease-out sm:max-w-md ${
          shown ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex-none border-b border-ash-steel/20 p-4">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h4 className="font-chrome text-sm uppercase tracking-[0.15em] text-sheikah">
              Escolher ingrediente
            </h4>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Fechar"
              className="shrink-0 text-ash-steel hover:text-rune-paper"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mb-3">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Buscar ingrediente…"
              label="Buscar ingrediente"
            />
          </div>

          <div className="flex justify-between items-center">
            <Toggle
              checked={showAll}
              onChange={setShowAll}
              label="Exibir todos"
            />
            <div className="flex items-center gap-2">
              <span className="font-chrome text-[11px] uppercase tracking-wide text-ash-steel">
                Ordenar por
              </span>
              <SortToggleButton
                icon={Gauge}
                active={sortOf("potency") !== undefined}
                direction={sortOf("potency")?.direction}
                label="Ordenar por potência"
                onClick={() => toggleSort("potency")}
              />
              <SortToggleButton
                icon={Clock}
                active={sortOf("duration") !== undefined}
                direction={sortOf("duration")?.direction}
                label="Ordenar por duração"
                onClick={() => toggleSort("duration")}
              />
            </div>
          </div>
        </div>

        <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-4">
          {filtered.map((material) => (
            <li key={material.id}>
              <MaterialOptionRow
                material={material}
                preview={
                  previewById.get(material.id) ?? {
                    potency: null,
                    durationSeconds: null,
                  }
                }
                onSelect={() => {
                  onSelect(material.id);
                  handleClose();
                }}
              />
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-2 py-6 text-center text-xs text-ash-steel">
              {showAll
                ? "Nenhum ingrediente encontrado."
                : "Nenhum ingrediente viável encontrado - tente marcar \"Exibir todos\"."}
            </li>
          )}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
