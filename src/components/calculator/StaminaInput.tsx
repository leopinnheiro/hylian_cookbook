import { Minus, Plus } from "lucide-react";
import { assetUrl } from "../../lib/format";

interface StaminaInputProps {
  label: string;
  value: number; // em rodas (ex: 2.4)
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function StaminaInput({
  label,
  value,
  min,
  max,
  step = 0.2,
  onChange,
}: StaminaInputProps) {
  const fifths = Math.round(value * 5);
  // Sempre mostra `max` slots (rodas máximas do jogo), cheio/parcial/vazio,
  // pra o layout não pular de largura conforme o valor muda.
  const icons = Array.from({ length: max }, (_, wheelIndex) => {
    const wheelFifths = clamp(fifths - wheelIndex * 5, 0, 5);
    return `icons/energizing-${wheelFifths}.svg`;
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-chrome text-xs uppercase tracking-[0.15em] text-ash-steel">
          {label}
        </span>
        <span className="font-mono text-sm text-rune-paper">
          {value.toFixed(1)}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Diminuir vigor"
          onClick={() =>
            onChange(clamp(Number((value - step).toFixed(1)), min, max))
          }
          className="flex h-8 w-8 shrink-0 items-center justify-center border border-ash-steel/30 text-ash-steel hover:border-sheikah hover:text-sheikah"
        >
          <Minus className="h-4 w-4" />
        </button>

        <div className="flex flex-wrap items-center gap-1" aria-hidden="true">
          {icons.map((icon, index) => (
            <img
              key={`${icon}-${index}`}
              src={assetUrl(icon)}
              alt=""
              className="h-8 w-8 object-contain"
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Aumentar vigor"
          onClick={() =>
            onChange(clamp(Number((value + step).toFixed(1)), min, max))
          }
          className="flex h-8 w-8 shrink-0 items-center justify-center border border-ash-steel/30 text-ash-steel hover:border-sheikah hover:text-sheikah"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
