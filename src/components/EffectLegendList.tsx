import { Clock, Gauge } from "lucide-react";
import { effects } from "../data";
import { assetUrl } from "../lib/format";

export function EffectLegendList() {
  return (
    <div className="flex flex-col gap-3">
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

      <ul className="grid grid-cols-2 gap-2 border-t border-ash-steel/20 pt-3">
        <li className="flex items-center gap-2 bg-panel px-2 py-1.5">
          <img
            src={assetUrl("icons/heart.svg")}
            alt=""
            className="h-5 w-5 shrink-0 object-contain"
          />
          <span className="font-chrome text-xs text-rune-paper">
            Corações restaurados
          </span>
        </li>
        <li className="flex items-center gap-2 bg-panel px-2 py-1.5">
          <Gauge className="h-5 w-5 shrink-0 text-sheikah" aria-hidden="true" />
          <span className="font-chrome text-xs text-rune-paper">
            Potência do efeito
          </span>
        </li>
        <li className="flex items-center gap-2 bg-panel px-2 py-1.5">
          <Clock className="h-5 w-5 shrink-0 text-sheikah" aria-hidden="true" />
          <span className="font-chrome text-xs text-rune-paper">
            Duração do efeito
          </span>
        </li>
      </ul>
    </div>
  );
}
