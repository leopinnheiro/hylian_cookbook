import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export type SortDirection = "desc" | "asc";

interface SortToggleButtonProps {
  icon: typeof ArrowDown;
  active: boolean;
  direction: SortDirection | undefined;
  label: string;
  onClick: () => void;
}

/** Botão de "ordenar por X": clicar alterna desligado -> decrescente ->
 * crescente -> desligado de novo. Mostra sempre um segundo ícone ao lado do
 * ícone do critério — seta pra cima/baixo quando ativo (indicando a direção
 * atual), ou uma seta dupla neutra quando desligado — pra manter a mesma
 * largura em vez de o botão mudar de tamanho ao ligar/desligar. */
export function SortToggleButton({
  icon: Icon,
  active,
  direction,
  label,
  onClick,
}: SortToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={`flex h-7 items-center gap-1 border px-1.5 transition-colors ${
        active
          ? "border-sheikah bg-panel text-sheikah"
          : "border-ash-steel/30 text-ash-steel hover:border-sheikah hover:text-sheikah"
      }`}
    >
      <Icon className="h-4 w-4" />
      {active ? (
        direction === "desc" ? (
          <ArrowDown className="h-3.5 w-3.5" />
        ) : (
          <ArrowUp className="h-3.5 w-3.5" />
        )
      ) : (
        <ArrowUpDown className="h-3.5 w-3.5 opacity-50" />
      )}
    </button>
  );
}
