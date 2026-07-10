interface FilterChipProps {
  label: string;
  active: boolean;
  accent: string;
  onClick: () => void;
}

export function FilterChip({ label, active, accent, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="border px-3 py-1.5 font-chrome text-xs uppercase tracking-wide transition-colors"
      style={{
        backgroundColor: active ? accent : "var(--color-panel)",
        color: active ? "var(--color-obsidian)" : "var(--color-rune-paper)",
        borderColor: accent,
      }}
    >
      {label}
    </button>
  );
}
