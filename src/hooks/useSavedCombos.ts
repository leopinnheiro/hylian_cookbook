import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "hylian-cookbook:saved-combos";

export interface SavedCombo {
  id: string;
  materialIds: (string | null)[];
}

function readStoredCombos(): SavedCombo[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (entry): entry is SavedCombo =>
        entry &&
        typeof entry.id === "string" &&
        Array.isArray(entry.materialIds),
    );
  } catch {
    return [];
  }
}

export function useSavedCombos() {
  const [combos, setCombos] = useState<SavedCombo[]>(() => readStoredCombos());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(combos));
  }, [combos]);

  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key === STORAGE_KEY) {
        setCombos(readStoredCombos());
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const saveCombo = useCallback((materialIds: (string | null)[]) => {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setCombos((current) => [...current, { id, materialIds }]);
  }, []);

  const removeCombo = useCallback((id: string) => {
    setCombos((current) => current.filter((combo) => combo.id !== id));
  }, []);

  return { combos, saveCombo, removeCombo };
}
