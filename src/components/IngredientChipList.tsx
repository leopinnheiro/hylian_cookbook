import { Info } from "lucide-react";
import { assetUrl } from "../lib/format";

export interface IngredientChipData {
  key: string;
  image?: string;
  label: string;
  count: number;
  /** presente = chip vira botão com borda tracejada + ícone de info (ex:
   * "ver ingredientes compatíveis" desse slot) */
  onClick?: () => void;
}

interface IngredientChipListProps {
  items: IngredientChipData[];
}

export function IngredientChipList({ items }: IngredientChipListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => {
        const content = (
          <>
            {item.image && (
              <img
                src={assetUrl(item.image)}
                alt=""
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            )}
            <span className="text-ash-steel">
              {item.label}
              {item.count > 1 && (
                <strong className="font-bold text-rune-paper"> ×{item.count}</strong>
              )}
            </span>
            {item.onClick && (
              <Info className="h-3.5 w-3.5 text-ash-steel" aria-hidden="true" />
            )}
          </>
        );

        if (item.onClick) {
          return (
            <li key={item.key}>
              <button
                type="button"
                onClick={item.onClick}
                aria-label="Ver ingredientes compatíveis"
                className="flex items-center gap-1.5 border border-dashed border-ash-steel/60 bg-panel px-2 py-1 text-xs font-chrome transition-colors hover:border-sheikah hover:bg-panel/70"
              >
                {content}
              </button>
            </li>
          );
        }

        return (
          <li
            key={item.key}
            className="flex items-center gap-1.5 border border-transparent bg-panel px-2 py-1 text-xs font-chrome"
          >
            {content}
          </li>
        );
      })}
    </ul>
  );
}
