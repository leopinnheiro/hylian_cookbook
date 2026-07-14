import { assetUrl } from "../../lib/format";

interface HeartsInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export function HeartsInput({
  label,
  value,
  min,
  max,
  onChange,
}: HeartsInputProps) {
  const hearts = Array.from({ length: max }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-chrome text-xs uppercase tracking-[0.15em] text-ash-steel">
          {label}
        </span>
        <span className="font-mono text-sm text-rune-paper">{value}</span>
      </div>
      <div className="flex flex-wrap gap-1" role="group" aria-label={label}>
        {hearts.map((heartNumber) => {
          const filled = heartNumber <= value;
          return (
            <button
              key={heartNumber}
              type="button"
              aria-label={`${heartNumber} ${heartNumber === 1 ? "coração" : "corações"}`}
              aria-pressed={filled}
              onClick={() => onChange(Math.max(min, heartNumber))}
              className="h-7 w-7 shrink-0"
            >
              <img
                src={assetUrl("icons/heart.svg")}
                alt=""
                className={`h-full w-full object-contain transition-opacity ${
                  filled ? "opacity-100" : "opacity-25"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
