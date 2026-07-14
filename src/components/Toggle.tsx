interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 font-chrome text-xs text-ash-steel">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="relative h-5 w-9 shrink-0 rounded-full border transition-colors"
        style={{
          backgroundColor: checked
            ? "color-mix(in srgb, var(--color-sheikah) 28%, var(--color-panel))"
            : "var(--color-panel)",
          borderColor: checked
            ? "color-mix(in srgb, var(--color-sheikah) 60%, var(--color-ash-steel))"
            : "var(--color-ash-steel)",
        }}
      >
        <span
          className="absolute left-0.5 top-0.5 h-3.5 w-3.5 rounded-full bg-rune-paper shadow transition-transform"
          style={{
            transform: checked ? "translateX(16px)" : "translateX(0)",
          }}
        />
      </button>
      {label}
    </label>
  );
}
