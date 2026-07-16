import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  active?: boolean;
  /** "action" = botão de ação tipo "Salvar" (borda sheikah, hover preenche).
   * "nav" = item de navegação (ex: sidebar), com estado ativo/inativo.
   * "danger" = ação destrutiva tipo "Limpar" (mesmo vermelho da categoria
   * Frutas no filtro de Materiais, ver CATEGORY_COLORS). */
  variant?: "action" | "nav" | "danger";
}

export function Button({
  icon,
  active = false,
  variant = "action",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "flex items-center gap-2 border px-3 py-1.5 font-chrome uppercase tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-40";
  const sizeClass = variant === "nav" ? "text-sm" : "text-xs";
  const justifyClass = variant === "nav" ? "justify-start" : "justify-center";

  const style =
    variant === "nav"
      ? {
          color: active ? "var(--color-obsidian)" : "var(--color-rune-paper)",
          backgroundColor: active ? "var(--color-sheikah)" : "transparent",
          borderColor: active
            ? "var(--color-sheikah)"
            : "var(--color-ash-steel)",
        }
      : undefined;

  // Cor/borda dos variants "action"/"danger" via classe (não `style`) — um
  // `style` inline com `color` tem especificidade maior que qualquer classe
  // `hover:`, fazendo o texto sumir no hover (mesma cor do fundo preenchido).
  // "danger" usa o mesmo vermelho da categoria Frutas (CATEGORY_COLORS.fruit)
  // via valor arbitrário do Tailwind, já que não faz parte da paleta
  // âmbar/ciano do chrome.
  const actionClass =
    variant === "action"
      ? "border-sheikah text-sheikah hover:bg-sheikah hover:text-obsidian disabled:hover:bg-transparent disabled:hover:text-sheikah"
      : variant === "danger"
        ? "border-[#ef6461] text-[#ef6461] hover:bg-[#ef6461] hover:text-obsidian disabled:hover:bg-transparent disabled:hover:text-[#ef6461]"
        : "";

  return (
    <button
      type="button"
      className={`${base} ${sizeClass} ${justifyClass} ${actionClass} ${className}`}
      style={style}
      {...rest}
    >
      {icon && (
        <span className="h-4 w-4 shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
