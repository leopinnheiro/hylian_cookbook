import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { EffectLegendList } from "./EffectLegendList";

interface EffectLegendModalProps {
  onClose: () => void;
}

const TRANSITION_MS = 200;

export function EffectLegendModal({ onClose }: EffectLegendModalProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, TRANSITION_MS);
  };
  const shown = visible && !closing;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 p-4 transition-opacity duration-300 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`flex w-full max-w-md flex-col border border-ash-steel/40 bg-deep-steel transition-[opacity,transform] duration-300 ease-out ${
          shown
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-2 border-b border-ash-steel/20 p-4">
          <h4 className="font-chrome text-sm uppercase tracking-[0.15em] text-sheikah">
            Legenda dos efeitos
          </h4>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar"
            className="shrink-0 text-ash-steel hover:text-rune-paper"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto p-4">
          <EffectLegendList />
        </div>
      </div>
    </div>,
    document.body,
  );
}
