import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  active?: boolean;
  /** "action" = botão de ação tipo "Salvar" (borda sheikah, hover preenche).
   * "nav" = item de navegação (ex: sidebar), com estado ativo/inativo. */
  variant?: "action" | "nav";
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
    "flex items-center gap-2 border px-3 py-1.5 font-chrome text-xs uppercase tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-40";

  const style =
    variant === "nav"
      ? {
          color: active ? "var(--color-obsidian)" : "var(--color-rune-paper)",
          backgroundColor: active ? "var(--color-sheikah)" : "transparent",
          borderColor: active ? "var(--color-sheikah)" : "var(--color-ash-steel)",
        }
      : {
          color: "var(--color-sheikah)",
          borderColor: "var(--color-sheikah)",
        };

  const actionClass =
    variant === "action"
      ? "hover:bg-sheikah hover:text-obsidian disabled:hover:bg-transparent disabled:hover:text-sheikah"
      : "";

  return (
    <button
      type="button"
      className={`${base} ${actionClass} ${className}`}
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
