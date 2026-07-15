import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "hylian-cookbook:saved-combos";

export interface SavedCombo {
  id: string;
  materialIds: (string | null)[];
}

function normalizeSignature(materialIds: (string | null)[]): string {
  return materialIds
    .filter((id): id is string => Boolean(id))
    .sort()
    .join("|");
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
  const combosRef = useRef(combos);
  combosRef.current = combos;

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

  // Duas combinações são "a mesma" se usam os mesmos materiais, independente
  // de slot/ordem — não faz sentido duplicar o registro só porque o
  // ingrediente foi colocado num slot diferente.
  const saveCombo = useCallback((materialIds: (string | null)[]) => {
    const signature = normalizeSignature(materialIds);
    const alreadySaved = combosRef.current.some(
      (combo) => normalizeSignature(combo.materialIds) === signature,
    );
    if (alreadySaved) return false;

    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setCombos((current) => [...current, { id, materialIds }]);
    return true;
  }, []);

  const removeCombo = useCallback((id: string) => {
    setCombos((current) => current.filter((combo) => combo.id !== id));
  }, []);

  return { combos, saveCombo, removeCombo };
}
