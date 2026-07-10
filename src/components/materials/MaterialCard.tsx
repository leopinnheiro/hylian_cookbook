import { Clock } from "lucide-react";
import type { Material } from "../../data/types";
import { effects } from "../../data";
import { assetUrl, formatDuration } from "../../lib/format";

interface MaterialCardProps {
  material: Material;
}

export function MaterialCard({ material }: MaterialCardProps) {
  const effect = material.effect
    ? effects.find((entry) => entry.id === material.effect)
    : undefined;

  return (
    <article className="flex items-center gap-3 border border-ash-steel/30 bg-deep-steel p-3">
      <img
        src={assetUrl(material.image)}
        alt=""
        className="h-12 w-12 shrink-0 object-contain"
        loading="lazy"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="font-dish text-base leading-none text-rune-paper">
          {material.name["pt-br"]}
        </h3>
        <p className="font-chrome text-[11px] text-ash-steel">
          {material.name.en}
        </p>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ash-steel">
          <span className="flex items-center gap-1">
            <img
              src={assetUrl("icons/heart.svg")}
              alt=""
              className="h-4 w-4 object-contain"
            />
            {material.hp}
          </span>
          {material.durationSeconds > 0 && (
            <span
              className="flex items-center gap-1"
              title="Duração adicionada"
            >
              <Clock className="h-3.5 w-3.5" />
              {formatDuration(material.durationSeconds)}
            </span>
          )}
        </div>
      </div>
      {effect && (
        <div className="flex h-full shrink-0 flex-col items-center gap-1 justify-between">
          <img
            src={assetUrl(effect.icon)}
            alt={effect.name["pt-br"]}
            title={effect.name["pt-br"]}
            className="h-6 w-6 object-contain"
            loading="lazy"
          />
          {material.points !== undefined && (
            <span className="font-mono text-xs text-ash-steel">
              +{material.points}
            </span>
          )}
        </div>
      )}
    </article>
  );
}
