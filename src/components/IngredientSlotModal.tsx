import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Search, X } from "lucide-react";
import type { IngredientSlot, Material } from "../data/types";
import { assetUrl } from "../lib/format";

interface IngredientSlotModalProps {
  slot: IngredientSlot;
  materials: Material[];
  onClose: () => void;
}

const TRANSITION_MS = 200;

export function IngredientSlotModal({
  slot,
  materials,
  onClose,
}: IngredientSlotModalProps) {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const needle = query.trim().toLowerCase();
  const filtered = needle
    ? materials.filter(
      (material) =>
        material.name["pt-br"].toLowerCase().includes(needle) ||
          material.name.en.toLowerCase().includes(needle),
    )
    : materials;

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
        className={`flex max-h-[80vh] w-full max-w-[90vw] flex-col border border-ash-steel/40 bg-deep-steel transition-[opacity,transform] duration-300 ease-out ${
          shown ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex-none border-b border-ash-steel/20 p-4">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h4 className="font-chrome text-sm uppercase tracking-[0.15em] text-sheikah">
              {slot.label?.["pt-br"] ?? "Ingredientes compatíveis"}
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
          <div className="flex items-center gap-2 border border-ash-steel/40 bg-panel px-3 py-1.5">
            <Search
              className="h-4 w-4 shrink-0 text-sheikah"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar ingrediente…"
              aria-label="Buscar ingrediente compatível"
              className="w-full bg-transparent font-chrome text-sm text-rune-paper placeholder:text-ash-steel focus:outline-none"
            />
          </div>
        </div>

        <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-4">
          {filtered.map((material) => (
            <li
              key={material.id}
              className="flex items-center gap-2 bg-panel px-2 py-1.5 text-sm font-chrome justify-between"
            >
              <img
                src={assetUrl(material.image)}
                alt=""
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
              <span className="text-rune-paper flex-1">
                {material.name["pt-br"]}
              </span>
              <span className="ml-auto text-xs text-ash-steel text-right flex-1">
                {material.name.en}
              </span>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-2 py-6 text-center text-xs text-ash-steel">
              Nenhum ingrediente encontrado.
            </li>
          )}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
