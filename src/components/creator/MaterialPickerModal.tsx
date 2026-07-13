import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Search, X } from "lucide-react";
import type { Material } from "../../data/types";
import { materials } from "../../data";
import { assetUrl } from "../../lib/format";
import { getViableMaterials } from "../../lib/matchRecipes";
import { Toggle } from "../Toggle";

interface MaterialPickerModalProps {
  slotIndex: number;
  selection: (string | null)[];
  onSelect: (materialId: string) => void;
  onClear: () => void;
  onClose: () => void;
}

const TRANSITION_MS = 200;
const ALL_MATERIAL_IDS = materials.map((m) => m.id);

export function MaterialPickerModal({
  slotIndex,
  selection,
  onSelect,
  onClear,
  onClose,
}: MaterialPickerModalProps) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const viableIds = useMemo(
    () => new Set(getViableMaterials(selection, slotIndex, ALL_MATERIAL_IDS)),
    [selection, slotIndex],
  );

  const candidates: Material[] = showAll
    ? materials
    : materials.filter((m) => viableIds.has(m.id));

  const needle = query.trim().toLowerCase();
  const filtered = needle
    ? candidates.filter(
        (material) =>
          material.name["pt-br"].toLowerCase().includes(needle) ||
          material.name.en.toLowerCase().includes(needle),
      )
    : candidates;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, TRANSITION_MS);
  };
  const shown = visible && !closing;

  const currentMaterialId = selection[slotIndex];

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
          <div className="mb-3 flex items-center gap-2 border border-ash-steel/40 bg-panel px-3 py-1.5">
            <Search className="h-4 w-4 shrink-0 text-sheikah" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar ingrediente…"
              aria-label="Buscar ingrediente"
              className="w-full bg-transparent font-chrome text-sm text-rune-paper placeholder:text-ash-steel focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <Toggle
              checked={showAll}
              onChange={setShowAll}
              label="Exibir todos os ingredientes"
            />
            {currentMaterialId && (
              <button
                type="button"
                onClick={() => {
                  onClear();
                  handleClose();
                }}
                className="font-chrome text-xs uppercase tracking-wide text-ash-steel hover:text-sheikah"
              >
                Remover
              </button>
            )}
          </div>
        </div>

        <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-4">
          {filtered.map((material) => (
            <li key={material.id}>
              <button
                type="button"
                onClick={() => {
                  onSelect(material.id);
                  handleClose();
                }}
                className="flex w-full items-center gap-2 bg-panel px-2 py-1.5 text-left text-sm font-chrome transition-colors hover:bg-panel/70"
              >
                <img
                  src={assetUrl(material.image)}
                  alt=""
                  className="h-6 w-6 object-contain"
                  loading="lazy"
                />
                <span className="flex-1 text-rune-paper">
                  {material.name["pt-br"]}
                </span>
                <span className="text-right text-xs text-ash-steel">
                  {material.name.en}
                </span>
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-2 py-6 text-center text-xs text-ash-steel">
              {showAll
                ? "Nenhum ingrediente encontrado."
                : "Nenhum ingrediente viável encontrado — tente \"Exibir todos os ingredientes\"."}
            </li>
          )}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
