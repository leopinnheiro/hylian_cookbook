interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function TabButton({ label, active, onClick }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="border px-3 py-1.5 font-chrome text-xs uppercase tracking-wide transition-colors"
      style={{
        color: active ? "var(--color-obsidian)" : "var(--color-rune-paper)",
        backgroundColor: active ? "var(--color-sheikah)" : "transparent",
        borderColor: active ? "var(--color-sheikah)" : "var(--color-ash-steel)",
      }}
    >
      {label}
    </button>
  );
}
