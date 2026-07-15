import { comboToRecipe } from "../../lib/comboToRecipe";
import type { SavedCombo } from "../../hooks/useSavedCombos";
import { RecipeCard } from "../RecipeCard";

interface SavedComboCardProps {
  combo: SavedCombo;
  onRemove: () => void;
}

export function SavedComboCard({ combo, onRemove }: SavedComboCardProps) {
  return <RecipeCard recipe={comboToRecipe(combo)} onRemove={onRemove} />;
}
