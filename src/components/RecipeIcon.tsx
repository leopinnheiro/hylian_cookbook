import type { EffectId } from "../data/types";
import { effects } from "../data";
import { assetUrl } from "../lib/format";

interface RecipeIconProps {
  image: string | undefined;
  effect: EffectId;
  hearts: number;
  size?: "sm" | "md";
}

const SIZE_CLASS = {
  sm: "h-16",
  md: "h-18",
};

export function RecipeIcon({
  image,
  effect: effectId,
  hearts,
  size = "md",
}: RecipeIconProps) {
  if (!image) return null;

  const effect = effects.find((entry) => entry.id === effectId);

  return (
    <div className={`relative shrink-0 aspect-square ${SIZE_CLASS[size]}`}>
      <img
        src={assetUrl(image)}
        alt=""
        className="h-full w-full border-ash-steel/30 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-x-0 top-0.5 z-10 flex items-center gap-1">
        {effect && effectId !== "heal" && (
          <img
            src={assetUrl(effect.icon)}
            alt={effect.name["pt-br"]}
            title={effect.name["pt-br"]}
            className="h-5 w-5 object-contain drop-shadow"
            loading="lazy"
          />
        )}
        {hearts > 0 && (
          <img
            src={assetUrl("icons/heart.svg")}
            alt=""
            title="Restaura corações (quantidade exata depende dos ingredientes usados — ver gerador de receita)"
            className="ml-auto h-3.5 w-3.5 object-contain drop-shadow"
          />
        )}
      </div>
    </div>
  );
}
