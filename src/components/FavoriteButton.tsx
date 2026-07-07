import { Star } from "lucide-react";

interface FavoriteButtonProps {
  active: boolean;
  onToggle: () => void;
}

export function FavoriteButton({ active, onToggle }: FavoriteButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      aria-label={active ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      className={`flex h-8 w-8 items-center justify-center transition-colors ${
        active ? "text-ember" : "text-ash-steel hover:text-ember"
      }`}
      style={
        active
          ? { filter: "drop-shadow(0 0 1px var(--color-ember))" }
          : undefined
      }
    >
      <Star
        className="h-5 w-5"
        fill={active ? "currentColor" : "none"}
        strokeWidth={2}
      />
    </button>
  );
}
