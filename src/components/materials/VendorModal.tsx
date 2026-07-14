import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { assetUrl } from "../../lib/format";

interface VendorModalProps {
  materialName: string;
  vendors: { location: string; price: number }[];
  onClose: () => void;
}

const TRANSITION_MS = 200;

export function VendorModal({
  materialName,
  vendors,
  onClose,
}: VendorModalProps) {
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
        className={`flex max-h-[80vh] w-full max-w-[90vw] flex-col border border-ash-steel/40 bg-deep-steel transition-[opacity,transform] duration-300 ease-out sm:max-w-sm ${
          shown ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex-none border-b border-ash-steel/20 p-4">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-chrome text-sm uppercase tracking-[0.15em] text-sheikah">
              Onde comprar: {materialName}
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
        </div>

        <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-4">
          {vendors.map((vendor, index) => (
            <li
              key={`${vendor.location}-${index}`}
              className="flex items-center justify-between gap-2 bg-panel px-2 py-1.5 text-sm font-chrome"
            >
              <span className="text-rune-paper">{vendor.location}</span>
              <span className="flex shrink-0 items-center gap-1 text-ash-steel">
                <img
                  src={assetUrl("icons/rupee.svg")}
                  alt=""
                  className="h-4 w-4 object-contain"
                />
                {vendor.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
