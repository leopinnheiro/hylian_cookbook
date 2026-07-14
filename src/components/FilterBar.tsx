import { assetUrl } from "../lib/format";

export interface FilterBarItem {
  id: string;
  label: string;
  icon?: string;
  /** cor da borda/destaque quando ativo (só usado em itens com ícone) — padrão var(--color-sheikah). */
  accent?: string;
}

interface FilterBarProps {
  items: FilterBarItem[];
  selected: string[];
  onChange: (ids: string[]) => void;
  /** true = pode selecionar vários itens ao mesmo tempo; false = só 1 por vez. */
  multiple?: boolean;
  ariaLabel: string;
}

/** Barra de filtro compartilhada (efeito/categoria/etc): botão "Todos" +
 * um botão por item, mesmo visual em toda a aplicação — quadrado com ícone
 * quando `item.icon` existe, retangular com texto quando não existe. */
export function FilterBar({
  items,
  selected,
  onChange,
  multiple = true,
  ariaLabel,
}: FilterBarProps) {
  const toggle = (id: string) => {
    if (!multiple) {
      onChange(selected.includes(id) ? [] : [id]);
      return;
    }
    onChange(
      selected.includes(id)
        ? selected.filter((s) => s !== id)
        : [...selected, id],
    );
  };

  // O botão "Todos" acompanha a altura do resto do grupo: quadrado como os
  // ícones quando o grupo é de ícone (EffectIconFilter), ou o mesmo padding
  // de texto quando é um grupo só-texto (CategoryFilter) — nunca os dois
  // tamanhos misturados na mesma barra.
  const hasIcons = items.some((item) => item.icon);

  return (
    <div
      className="flex flex-wrap items-center gap-1.5"
      role="group"
      aria-label={ariaLabel}
    >
      <button
        type="button"
        onClick={() => onChange([])}
        aria-pressed={selected.length === 0}
        className={`shrink-0 font-chrome text-xs uppercase tracking-wide border transition-opacity ${
          hasIcons
            ? "flex h-9 items-center justify-center px-2"
            : "px-1.5 py-1.5"
        } ${
          selected.length === 0
            ? "border-sheikah text-sheikah opacity-100"
            : "border-ash-steel/30 text-ash-steel opacity-75 hover:opacity-100"
        }`}
      >
        Todos
      </button>
      {items.map((item) => {
        const active = selected.includes(item.id);
        const accent = item.accent ?? "var(--color-sheikah)";

        if (item.icon) {
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggle(item.id)}
              aria-pressed={active}
              aria-label={item.label}
              title={item.label}
              style={{ borderColor: accent }}
              className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-opacity ${
                active ? "bg-panel opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={assetUrl(item.icon)}
                alt=""
                className="h-5 w-5 object-contain"
              />
            </button>
          );
        }

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => toggle(item.id)}
            aria-pressed={active}
            style={{ borderColor: accent, color: accent }}
            className={`font-chrome text-xs uppercase tracking-wide px-1.5 py-1.5 border transition-opacity ${
              active ? "bg-panel opacity-100" : "opacity-75 hover:opacity-100"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
