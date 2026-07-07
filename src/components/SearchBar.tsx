import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 border border-ash-steel/40 bg-panel px-4 py-2">
      <Search className="h-4 w-4 shrink-0 text-sheikah" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar prato (pt-br ou en)…"
        aria-label="Buscar receita por nome"
        className="w-full bg-transparent font-chrome text-sm text-rune-paper placeholder:text-ash-steel focus:outline-none"
      />
    </div>
  );
}
