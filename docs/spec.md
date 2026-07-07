# Hylian Cookbook — Especificação do Projeto

> Guia de receitas do Zelda: Breath of the Wild, em pt-br, com busca, filtro por efeito e favoritos. PWA-friendly, mobile-first, publicado no GitHub Pages.

## Nomes sugeridos

- **Nome do app:** Hylian Cookbook
- **Nome do repositório:** `hylian-cookbook`

(Fica livre pra trocar, mas evita nome genérico tipo "botw-recipes" pra não colidir com forks/clones parecidos no GitHub.)

## Stack

- Vite + React + TypeScript
- Tailwind CSS (componentes próprios, sem lib de UI — o app é simples o suficiente pra não precisar de shadcn/ui: pouquíssimo input, mais leitura/busca/filtro)
- Dados: arquivos `.ts` tipados dentro do projeto (sem backend, sem `.json`)
- Persistência de favoritos: `localStorage`
- Deploy: GitHub Pages

## Identidade visual

**Direção:** não é "tema escuro genérico tech" — é o contraste entre a Sheikah Slate (fria, tecnológica, angulosa) escaneando comida (quente, artesanal). O _chrome_ do app (nav, filtros, bordas de card, ícones) fica no registro Sheikah; o _conteúdo_ da receita (nome do prato, corações) usa tipografia quente, como se fosse uma ficha real sendo exibida dentro do scanner. Protótipo de referência: `mockup-visual-sheikah-slate.html`.

### Paleta

| Nome                 | Hex       | Uso                                                                                             |
| -------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| Obsidian Circuit     | `#0A1620` | fundo da página                                                                                 |
| Deep Steel           | `#10202A` | fundo de card                                                                                   |
| Panel                | `#142832` | fundo de elemento dentro do card (tag de ingrediente)                                           |
| Sheikah Glow (ciano) | `#5FE1E8` | acento frio — efeitos defensivos/técnicos (resistências, furtividade, velocidade), chrome ativo |
| Ember (âmbar)        | `#E3A548` | acento quente — efeitos ofensivos/vitais (ataque, cura, hearty), favorito ativo                 |
| Rune Paper           | `#EDE6D6` | texto principal (branco quente, não branco puro)                                                |
| Ash Steel            | `#7C8A93` | texto secundário, bordas neutras                                                                |

Cor por **categoria de efeito**, não decorativa: tudo que é "quente/ofensivo" (ataque, cura, hearty) usa âmbar; tudo "frio/defensivo/técnico" (resistências, furtividade, velocidade, vigor) usa ciano.

### Tipografia

- **Chrome do app** (nav, filtros, labels, badges): Rajdhani — angulosa, técnica, maiúsculas com letter-spacing
- **Conteúdo da receita** (nome do prato): Zilla Slab — serifa quente, sensação de ficha/cookbook
- **Números/estatísticas** (corações, duração): JetBrains Mono — leitura tipo "readout" de HUD

### Layout e forma

- Cantos **cortados em hexágono** (`clip-path`), nunca `border-radius` — é a assinatura visual mais reconhecível da Sheikah Slate
- Badge de efeito como selo hexagonal no canto do card, cor por categoria
- Favoritar = mesmo selo hexagonal, com glow sutil de âmbar quando ativo (único uso de glow no app — reservado pra esse momento, não decorar tudo)
- Ingrediente "coringa"/filler (Vísceras etc.) com borda tracejada, visualmente diferenciado do ingrediente específico

### Regra de contenção

O glow é o "um acessório" do conjunto (referência: tirar um antes de sair de casa) — usar só no favorito ativo, nunca espalhar em todo botão/borda, pra não virar o clichê de "neon em fundo preto".

## Modelo de dados

Dados como **arquivos `.ts` tipados**, não `.json` — já que ninguém edita isso em tempo de execução, tipagem estática pega erro de digitação/campo faltando na hora de compilar, em vez de só descobrir em runtime. Todos os nomes de campos e chaves internas em **inglês**. Só o conteúdo que o usuário lê na tela (nome, efeito, texto) tem versão `pt-br`.

**Decisão de escopo (fechada):** o app **não** é uma calculadora ao vivo onde o usuário marca o que tem em mãos — isso seria pedir muita manutenção do usuário toda vez que o inventário muda. Em vez disso, os combos são **pré-calculados** usando a fórmula oficial do jogo, e guardados como dados estáticos.

**Fórmula de referência:** ver documento separado `cooking-formula.md`, com a fórmula completa (corações, duração, potência/tier por efeito, regras especiais de partes de dragão, elixires, e o gap ainda aberto do vigor "Energizing").

**Pendente de decisão:** os combos "ótimos" de menor duração usam partes de monstro (ex: Vísceras de Bocoblin) como ingrediente de preenchimento em receitas normais (não só em elixir dedicado) — isso pode empurrar "modo elixir" de volta pro escopo do v1, ao invés de ficar só no backlog (ver seção de Fases). Decidir antes de popular `recipes.ts` com esses combos.

**Por que voltar a enriquecer o material:** pra pré-calcular os combos com o menor número de ingredientes possível, o material precisa carregar `hp`, `effect` (se tiver) e `points` (potência daquele efeito) — não dá pra derivar isso só do nome.

**Por que a receita agora é "por variante":** o mesmo efeito pode ser alcançado com combos diferentes dependendo de quais materiais o jogador tem — então em vez de 1 combo fixo por efeito, guardamos várias variantes (uma por tier/nível), pra a pessoa escolher a que ela consegue fazer agora.

### `types.ts`

```ts
export type LocalizedText = { "pt-br": string; en: string };

export type EffectId =
  | "heal"
  | "extra-hearts" // Hearty
  | "restore-stamina" // Energizing
  | "extra-stamina" // Enduring
  | "attack" // Mighty
  | "defense" // Tough
  | "speed" // Hasty
  | "stealth" // Sneaky
  | "cold-resist" // Spicy
  | "heat-resist" // Chilly
  | "electric-resist" // Electro
  | "fireproof"; // Fireproof — só via inseto/parte de monstro em elixir, sem ingrediente de comida

export interface Material {
  id: string;
  name: LocalizedText;
  image: string;
  hp: number; // valor cru de cura (antes de multiplicar por 2)
  effect?: EffectId; // se o material contribui pra algum efeito
  points?: number; // potência do efeito, só existe se "effect" existir (pode ser fracionário, ex: 0.5)
  durationSeconds: number; // duração que soma ao prato ao ser incluído
  overridesDurationSeconds?: number; // se presente, IGNORA a soma normal e fixa a duração total nesse valor (uso: Chifre de Dragão = 1800)
  category?: string; // opcional, filtro futuro tipo "peixe", "cogumelo"
}

export interface IngredientSlot {
  materialIds: string[]; // um ou mais materiais que servem nesse slot (intercambiáveis)
  label?: LocalizedText; // opcional, texto tipo "Qualquer fruta" quando o slot é bem genérico
}

export interface Recipe {
  id: string;
  effect: EffectId;
  variantLabel: LocalizedText; // ex: "Tier 1" / "Tier 2" / "Tier 3", ou "+1 vigor" pra energizing/enduring
  name: LocalizedText; // nome do prato exibido
  hearts: number; // já calculado: soma(hp) × 2
  durationSeconds: number; // já calculado: soma das durações
  ingredients: IngredientSlot[]; // cada posição é um slot, pode ter mais de 1 material equivalente
  isGeneric?: boolean; // true = combo "coringa"/genérico, ordenado por último dentro do mesmo tier
  notes?: string;
}

export interface Effect {
  id: EffectId;
  name: LocalizedText;
  icon: string;
}
```

### `materials.ts`

```ts
import { Material } from "./types";

export const materials: Material[] = [
  {
    id: "hearty-durian",
    name: { "pt-br": "Durião Robusto", en: "Hearty Durian" },
    image: "hearty-durian.png",
    hp: 12,
    effect: "extra-hearts",
    points: 4,
    durationSeconds: 0,
    category: "fruit",
  },
  // ...
];
```

### `recipes.ts`

```ts
import { Recipe } from "./types";

export const recipes: Recipe[] = [
  {
    // combo específico e otimizado — aparece primeiro na lista do Tier 1
    id: "cold-resist-tier-1-optimal",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Nível 1", en: "Tier 1" },
    name: {
      "pt-br": "Fritura Apimentada de Carne e Frutos do Mar",
      en: "Spicy Meat and Seafood Fry",
    },
    hearts: 5,
    durationSeconds: 600,
    ingredients: [
      { materialIds: ["raw-meat", "raw-prime-meat"] }, // qualquer uma das duas serve nesse slot
      { materialIds: ["hyrule-bass"] },
      { materialIds: ["spicy-pepper"] },
    ],
  },
  {
    // combo genérico/coringa do mesmo tier — aparece por último, é o "não tenho nada específico, mas funciona"
    id: "cold-resist-tier-1-generic",
    effect: "cold-resist",
    variantLabel: { "pt-br": "Nível 1", en: "Tier 1" },
    name: {
      "pt-br": "Prato Apimentado (genérico)",
      en: "Spicy Dish (generic)",
    },
    hearts: 4,
    durationSeconds: 600,
    ingredients: [
      {
        materialIds: ["spicy-pepper"],
        label: {
          "pt-br": "Qualquer ingrediente picante",
          en: "Any spicy ingredient",
        },
      },
    ],
    isGeneric: true,
  },
  // ...
];
```

Na UI, dentro do mesmo `effect` + `variantLabel`, ordenar com `isGeneric` (undefined/false) primeiro e `isGeneric: true` por último — assim o usuário vê a melhor opção específica antes do "coringa" genérico.

### `effects.ts`

Lista fechada de efeitos possíveis (o filtro principal do app), na mesma ordem do `EffectId`:

```ts
import { Effect } from "./types";

export const effects: Effect[] = [
  {
    id: "heal",
    name: { "pt-br": "Cura", en: "Restore Hearts" },
    icon: "heal.svg",
  },
  // ...
];
```

Chaves de efeito previstas:

- `heal` — cura pura (corações normais)
- `extra-hearts` — corações amarelos (máximo temporário)
- `restore-stamina` — recupera vigor atual
- `extra-stamina` — vigor amarelo/temporário além do máximo
- `attack` — força de ataque
- `defense` — defesa
- `speed` — velocidade de movimento
- `stealth` — furtividade
- `cold-resist` / `heat-resist` / `electric-resist` — resistências elementais
- `fireproof` — resistência a fogo/lava (só via elixir, nenhum ingrediente de comida dá esse efeito)

### Nota fixa de UI (não é dado, é componente)

Um aviso curto e fixo (rodapé da página de receita, ou tooltip) explicando que existe ~10% de chance de bônus aleatório por prato (100% durante a lua de sangue), e que o resultado real no jogo pode variar um pouco pra mais. Não entra como campo em `recipes.ts`.

## Organização de assets

Tudo em `public/assets/`, referenciado direto por caminho relativo nos dados (`.ts`) — sem `import.meta.glob`, sem processamento do Vite (decisão já tomada: simplicidade > otimização pros ~150 ícones fixos).

```
public/assets/
  icons/       → ícones de efeito e tier (chilly.svg, electro.svg, hasty.svg, enduring-1.svg .. enduring-5.svg, energizing-1.svg .. energizing-5.svg, etc.)
  materials/   → imagem de cada ingrediente (hearty-durian.png, spicy-pepper.png, ...)
  recipes/     → imagem de cada prato/receita
```

Convenção de nome de arquivo: sempre igual ao `id` do dado (kebab-case), pra dar pra montar o caminho direto a partir do `id` sem precisar de mais um campo redundante tipo `image: "hearty-durian.png"` — já dá pra assumir `materials/${id}.png` na maioria dos casos. Se algum ícone quebrar essa convenção (extensão diferente, nome legado), aí sim mantém o campo `image` explícito no dado pra sobrescrever.

## Convenções de commit

- **Nenhuma menção à Anthropic/Claude nos commits** — sem rodapé tipo `Co-authored-by: Claude`, sem menção a ferramenta de IA usada. Mensagens de commit só descrevem a mudança em si.

## Origem dos dados

Extração manual feita pelo usuário a partir dos arquivos do próprio jogo (mensagens/textos oficiais em pt-br), garantindo fidelidade total com o que aparece no jogo. Os combos de `recipes.ts` (com hearts/duração/tier já calculados pela fórmula oficial) também são preparados fora do app, antes da implementação — o app só consome os `.ts` já prontos, sem calcular nada em runtime.

## Fases de desenvolvimento

### Fase 1 — MVP de dados e busca

- Estrutura do projeto (Vite + Tailwind configurados)
- Carregar `materials.ts` / `recipes.ts` / `effects.ts`
- Tela por efeito mostrando as variantes disponíveis (Tier 1/2/3 etc.) com seus respectivos combos
- Busca por texto (nome pt-br **e** en)
- Filtro por efeito (componente próprio simples, tipo dropdown/lista de chips)

### Fase 2 — Favoritos

- Ícone de favoritar no card (persistido no `localStorage`)
- Página/aba separada "Favoritos"
- Estado sincronizado entre lista principal e página de favoritos

### Fase 3 — Identidade e polimento mobile

- Aplicar tema visual (cores, tipografia, ícones por efeito)
- Revisão de responsividade — prioridade total pro mobile
- Estados vazios (nenhum favorito ainda, nenhum resultado de busca)

### Backlog / v2 (fora do escopo inicial)

- Mapa do Hyrule com waypoints indicando onde encontrar cada ingrediente
- Compartilhar lista de favoritos
- ~~Modo elixir separado~~ — reavaliar: partes de monstro aparecem como filler em combos "ótimos" de receitas normais (ver Modelo de dados), então elixir pode precisar entrar no v1 em vez de ficar aqui

## Fora de escopo na v1

- Qualquer backend/API — tudo estático
- Mapa interativo
- Multi-idioma além de pt-br/en na busca (a interface do site pode ser só pt-br)
