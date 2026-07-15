import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { effects } from "../../data";
import { assetUrl } from "../../lib/format";

interface CalculatorInfoModalProps {
  onClose: () => void;
}

const TRANSITION_MS = 200;

export function CalculatorInfoModal({ onClose }: CalculatorInfoModalProps) {
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
          shown ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-2 border-b border-ash-steel/20 p-4">
          <h4 className="font-chrome text-sm uppercase tracking-[0.15em] text-sheikah">
            Como funciona
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
        <div className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto p-4">
          <p className="font-dish text-base text-ash-steel">
            Informe quantos corações e quantas rodas de vigor você tem agora. A
            lista busca entre as suas combinações salvas em Minhas Combinações
            e mostra só as que não estouram esse valor, agrupadas do maior pro
            menor, com as opções mais baratas (menos ingredientes) primeiro.
            Corações/vigor extra (Hearty/Enduring) não entram aqui. Use os
            ícones de efeito pra filtrar a lista por um efeito específico.
          </p>
          <p className="font-dish text-base text-ash-steel">
            Sem nenhum combo salvo ainda? Monte uma combinação no Criar
            Receita e salve em Minhas Combinações — é de lá que a Calculadora
            puxa as opções.
          </p>

          <div className="flex flex-col gap-2 border-t border-ash-steel/20 pt-4">
            <h5 className="font-chrome text-xs uppercase tracking-[0.15em] text-ash-steel">
              Legenda dos efeitos
            </h5>
            <ul className="grid grid-cols-2 gap-2">
              {effects.map((effect) => (
                <li
                  key={effect.id}
                  className="flex items-center gap-2 bg-panel px-2 py-1.5"
                >
                  <img
                    src={assetUrl(effect.icon)}
                    alt=""
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                  <span className="font-chrome text-xs text-rune-paper">
                    {effect.name["pt-br"]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
