import { useState } from "react";
import { Share } from "lucide-react";
import type { IngredientSlot, RecipeTemplate } from "../data/types";
import { effects, materialsById } from "../data";
import { assetUrl, groupIngredientSlots } from "../lib/format";
import {
  IngredientChipList,
  type IngredientChipData,
} from "./IngredientChipList";
import { IngredientSlotModal } from "./IngredientSlotModal";

interface RecipeTemplateCardProps {
  template: RecipeTemplate;
  possibleEffectIds: string[];
  onOpenInCreator?: () => void;
}

export function RecipeTemplateCard({
  template,
  possibleEffectIds,
  onOpenInCreator,
}: RecipeTemplateCardProps) {
  const [openSlot, setOpenSlot] = useState<IngredientSlot | null>(null);
  const possibleEffects = effects.filter((effect) =>
    possibleEffectIds.includes(effect.id),
  );

  return (
    <article className="flex flex-col overflow-hidden border border-ash-steel/30 bg-deep-steel">
      <header className="relative flex items-stretch gap-3 border-b border-ash-steel/20 p-3">
        {template.image && (
          <img
            src={assetUrl(template.image)}
            alt=""
            className="h-16 w-16 shrink-0 border-ash-steel/30 object-cover"
            loading="lazy"
          />
        )}
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-1">
          <div className="flex items-start gap-1">
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="font-dish text-lg leading-none text-rune-paper">
                {template.name["pt-br"]}
              </h3>
              <p className="font-chrome text-[11px] text-ash-steel">
                {template.name.en}
              </p>
            </div>
            {onOpenInCreator && (
              <button
                type="button"
                onClick={onOpenInCreator}
                aria-label="Montar essa receita no Criar Receita"
                title="Montar no Criar Receita"
                className="shrink-0 text-ash-steel hover:text-sheikah"
              >
                <Share className="h-5 w-5" />
              </button>
            )}
          </div>

          {possibleEffects.length > 0 && (
            <div className="flex flex-wrap items-center gap-1">
              {possibleEffects.map((effect) => (
                <img
                  key={effect.id}
                  src={assetUrl(effect.icon)}
                  alt={effect.name["pt-br"]}
                  title={effect.name["pt-br"]}
                  className="h-4 w-4 object-contain"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-col gap-3 p-4 justify-between flex-1">
        <IngredientChipList
          items={groupIngredientSlots(template.ingredients).map(
            ({ slot, count }, index): IngredientChipData => {
              const primary = materialsById[slot.materialIds[0]];
              const isFillerSlot =
                slot.materialIds.length > 1 || Boolean(slot.label);
              return {
                key: `${template.id}-slot-${index}`,
                image: primary?.image,
                label: slot.label?.["pt-br"] ?? primary?.name["pt-br"] ?? "",
                count,
                onClick: isFillerSlot ? () => setOpenSlot(slot) : undefined,
              };
            },
          )}
        />
        {template.notes && (
          <p className="text-xs italic text-ash-steel">{template.notes}</p>
        )}
      </div>

      {openSlot && (
        <IngredientSlotModal
          slot={openSlot}
          materials={openSlot.materialIds
            .map((id) => materialsById[id])
            .filter((material): material is NonNullable<typeof material> =>
              Boolean(material),
            )}
          onClose={() => setOpenSlot(null)}
        />
      )}
    </article>
  );
}
