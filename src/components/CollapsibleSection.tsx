import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
  id: string;
  title: string;
  count: number;
  defaultCollapsed?: boolean;
  children: ReactNode;
}

/** Seção com cabeçalho clicável (chevron + título + contador) que
 * colapsa/expande o conteúdo — usada tanto na grade de Receitas (agrupada
 * por efeito) quanto na de Materiais (agrupada por categoria), renderizando
 * qualquer coisa dentro. Anima a altura (grid-rows 0fr -> 1fr) e a rotação
 * do chevron, mesmo timing (duration-300 ease-out) do menu lateral. */
export function CollapsibleSection({
  id,
  title,
  count,
  defaultCollapsed = false,
  children,
}: CollapsibleSectionProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <section aria-labelledby={id}>
      <button
        type="button"
        onClick={() => setCollapsed((current) => !current)}
        aria-expanded={!collapsed}
        className="mb-3 flex w-full items-center gap-2 font-chrome text-sm uppercase tracking-[0.25em] text-ash-steel hover:text-sheikah"
      >
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out ${
            collapsed ? "-rotate-90" : "rotate-0"
          }`}
        />
        <div className="flex flex-1 items-center justify-between">
          <span id={id}>{title}</span>
          <span className="font-mono text-xs text-ash-steel/70">
            ({count})
          </span>
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          collapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </section>
  );
}
