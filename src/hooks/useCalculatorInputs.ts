import { useEffect, useState } from "react";

const STORAGE_KEY = "hylian-cookbook:calculator-inputs";

interface CalculatorInputs {
  currentHearts: number;
  currentStaminaWheels: number;
}

const DEFAULT_INPUTS: CalculatorInputs = {
  currentHearts: 3,
  currentStaminaWheels: 1,
};

function readStoredInputs(): CalculatorInputs {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_INPUTS;
    const parsed = JSON.parse(raw);
    if (
      typeof parsed?.currentHearts !== "number" ||
      typeof parsed?.currentStaminaWheels !== "number"
    ) {
      return DEFAULT_INPUTS;
    }
    return {
      currentHearts: parsed.currentHearts,
      currentStaminaWheels: parsed.currentStaminaWheels,
    };
  } catch {
    return DEFAULT_INPUTS;
  }
}

export function useCalculatorInputs() {
  const [inputs, setInputs] = useState<CalculatorInputs>(() =>
    readStoredInputs(),
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  }, [inputs]);

  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key === STORAGE_KEY) {
        setInputs(readStoredInputs());
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setCurrentHearts = (currentHearts: number) =>
    setInputs((current) => ({ ...current, currentHearts }));

  const setCurrentStaminaWheels = (currentStaminaWheels: number) =>
    setInputs((current) => ({ ...current, currentStaminaWheels }));

  return { ...inputs, setCurrentHearts, setCurrentStaminaWheels };
}
