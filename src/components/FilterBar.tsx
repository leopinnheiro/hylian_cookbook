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

  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="group"
      aria-label={ariaLabel}
    >
      <button
        type="button"
        onClick={() => onChange([])}
        aria-pressed={selected.length === 0}
        className={`font-chrome text-xs uppercase tracking-wide px-2 py-1.5 border ${
          selected.length === 0
            ? "border-sheikah text-sheikah"
            : "border-ash-steel/30 text-ash-steel hover:border-sheikah hover:text-sheikah"
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
              style={active ? { borderColor: accent } : undefined}
              className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors ${
                active
                  ? "bg-panel"
                  : "border-ash-steel/30 opacity-50 hover:border-ash-steel/60 hover:opacity-100"
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
            className={`font-chrome text-xs uppercase tracking-wide px-2 py-1.5 border transition-colors ${
              active
                ? "border-sheikah text-sheikah"
                : "border-ash-steel/30 text-ash-steel hover:border-sheikah hover:text-sheikah"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
