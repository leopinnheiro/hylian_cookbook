import { useState } from "react";
import { createPortal } from "react-dom";
import { Search, X } from "lucide-react";
import type { IngredientSlot, Material } from "../data/types";

interface IngredientSlotModalProps {
  slot: IngredientSlot;
  materials: Material[];
  onClose: () => void;
}

export function IngredientSlotModal({
  slot,
  materials,
  onClose,
}: IngredientSlotModalProps) {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const filtered = needle
    ? materials.filter(
      (material) =>
        material.name["pt-br"].toLowerCase().includes(needle) ||
          material.name.en.toLowerCase().includes(needle),
    )
    : materials;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[80vh] w-full max-w-[80vw] flex-col border border-ash-steel/40 bg-deep-steel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex-none border-b border-ash-steel/20 p-4">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h4 className="font-chrome text-sm uppercase tracking-[0.15em] text-sheikah">
              {slot.label?.["pt-br"] ?? "Ingredientes compatíveis"}
            </h4>
            <button
              type="button"
              onClick={onClose}
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

        <ul className="flex flex-col gap-2 overflow-y-auto p-4">
          {filtered.map((material) => (
            <li
              key={material.id}
              className="flex items-center gap-2 bg-panel px-2 py-1.5 text-sm font-chrome"
            >
              <img
                src={`/assets/${material.image}`}
                alt=""
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
              <span className="text-rune-paper">{material.name["pt-br"]}</span>
              <span className="ml-auto text-xs text-ash-steel">
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
