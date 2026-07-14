import type { Effect } from "./types";

export const effects: Effect[] = [
  {
    id: "extra-hearts",
    name: { "pt-br": "Corações Extras", en: "Hearty" },
    icon: "icons/hearty.svg",
  },
  {
    id: "restore-stamina",
    name: { "pt-br": "Recupera Vigor", en: "Energizing" },
    icon: "icons/energizing.svg",
  },
  {
    id: "extra-stamina",
    name: { "pt-br": "Vigor Extra", en: "Enduring" },
    icon: "icons/enduring.svg",
  },
  {
    id: "attack",
    name: { "pt-br": "Ataque", en: "Mighty" },
    icon: "icons/mighty.svg",
  },
  {
    id: "defense",
    name: { "pt-br": "Defesa", en: "Tough" },
    icon: "icons/tough.svg",
  },
  {
    id: "speed",
    name: { "pt-br": "Velocidade", en: "Hasty" },
    icon: "icons/hasty.svg",
  },
  {
    id: "stealth",
    name: { "pt-br": "Furtividade", en: "Sneaky" },
    icon: "icons/sneaky.svg",
  },
  {
    id: "cold-resist",
    name: { "pt-br": "Resistência ao Frio", en: "Spicy" },
    icon: "icons/spicy.svg",
  },
  {
    id: "heat-resist",
    name: { "pt-br": "Resistência ao Calor", en: "Chilly" },
    icon: "icons/chilly.svg",
  },
  {
    id: "electric-resist",
    name: { "pt-br": "Resistência Elétrica", en: "Electro" },
    icon: "icons/electro.svg",
  },
  {
    id: "fireproof",
    name: { "pt-br": "À Prova de Fogo", en: "Fireproof" },
    icon: "icons/fireproof.svg",
  },
];
