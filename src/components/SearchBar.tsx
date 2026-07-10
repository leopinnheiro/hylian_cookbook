import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Buscar prato (pt-br ou en)…",
  label = "Buscar receita por nome",
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 border border-ash-steel/40 bg-panel px-4 py-2 mt-2">
      <Search className="h-4 w-4 shrink-0 text-sheikah" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className="w-full bg-transparent font-chrome text-sm text-rune-paper placeholder:text-ash-steel focus:outline-none"
      />
    </div>
  );
}
