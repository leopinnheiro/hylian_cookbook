# CLAUDE.md — Hylian Cookbook

Guia de receitas do Zelda: Breath of the Wild em pt-br, com busca, filtro por efeito e favoritos. Estático, mobile-first, publicado no GitHub Pages.

Este arquivo é o ponto de entrada. Os documentos completos estão em:

- `docs/spec.md` — especificação de produto, modelo de dados, identidade visual, fases
- `docs/cooking-formula.md` — fórmula de cálculo dos combos (fonte usada pra preencher `recipes.ts`)

Leia os dois antes de implementar qualquer coisa. As regras abaixo resumem o que não pode ser esquecido/quebrado.

## Regras inegociáveis

- **Sem shadcn/ui e sem outra lib de componentes.** Tailwind puro, componentes próprios. Decisão já tomada — não reintroduzir.
- **Dados em `.ts` tipados, nunca `.json`.** Ver `src/data/types.ts`, `materials.ts`, `recipes.ts`, `effects.ts`.
- **Sem calculadora ao vivo.** O app não deixa o usuário marcar ingredientes que tem e calcular combo na hora. Todos os combos em `recipes.ts` já vêm pré-calculados (ver `docs/cooking-formula.md`).
- **Nenhuma menção à Anthropic/Claude em commits.** Sem `Co-authored-by: Claude`, sem rodapé de ferramenta de IA, sem menção a "generated with" nada parecido. Mensagem de commit só descreve a mudança.
- **Todo texto visível ao usuário tem `pt-br` como idioma principal.** Campos de dado usam `LocalizedText = { "pt-br": string; en: string }`; `en` existe só pra permitir busca por nome em inglês, não é usado como fallback de UI.
- **Nomes de campo, tipos, chaves internas: sempre em inglês.** Só o conteúdo (`name`, `notes`, textos de UI) é bilíngue/pt-br.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- `localStorage` para favoritos (sem backend)
- Deploy: GitHub Pages

## Estrutura de assets

```
public/assets/
  icons/       → ícones de efeito e tier
  materials/   → imagem de cada ingrediente
  recipes/     → imagem de cada prato
```

Convenção: nome do arquivo = `id` do dado (kebab-case), referenciado por caminho relativo direto (sem `import.meta.glob`).

## Identidade visual (resumo — detalhe completo em `docs/spec.md`)

Contraste frio/quente: chrome do app (nav, filtro, badge, borda de card) no registro Sheikah — anguloso, `clip-path` hexagonal, nunca `border-radius`, tipografia Rajdhani. Conteúdo da receita (nome do prato) em serifa quente (Zilla Slab). Números/estatísticas em mono (JetBrains Mono). Cor por categoria de efeito: âmbar (`#E3A548`) pra ofensivo/vital, ciano (`#5FE1E8`) pra defensivo/técnico. Glow reservado só pro favorito ativo — não espalhar em tudo.

Paleta completa, tabela de tokens e o mockup de referência (`mockup-visual-sheikah-slate.html`) estão no `docs/spec.md` — seguir à risca, não inventar variação em cima.

## Modelo de dados (resumo — schema completo em `docs/spec.md`)

- `Material`: `id`, `name`, `image`, `hp`, `effect?`, `points?`, `durationSeconds`, `overridesDurationSeconds?`, `category?`
- `Recipe`: `id`, `effect`, `variantLabel`, `name`, `hearts`, `durationSeconds`, `ingredients: IngredientSlot[]`, `isGeneric?`, `notes?`
- `IngredientSlot`: `materialIds: string[]` (intercambiáveis), `label?`
- `EffectId`: `heal | extra-hearts | restore-stamina | extra-stamina | attack | defense | speed | stealth | cold-resist | heat-resist | electric-resist | fireproof`

Dentro do mesmo `effect`, várias `Recipe` podem existir com `variantLabel` diferente (Tier 1/2/3, ou com/sem chifre de dragão etc.). Ordenar sempre com `isGeneric` (undefined/false) primeiro, `isGeneric: true` por último.

## Ordem de implementação (fases — detalhe em `docs/spec.md`)

1. Setup do projeto + carregar dados + grid de receitas por efeito + busca (pt-br e en) + filtro por efeito
2. Favoritos (ícone no card + página própria + `localStorage`)
3. Identidade visual completa + polimento mobile + estados vazios

Não pular pra fase 3 antes das anteriores estarem funcionais.

## Pendências conhecidas (não travar implementação por causa disso, só não inventar valor)

- Combos de `restore-stamina` (Energizing) ainda não têm todos os valores numéricos confirmados — ver gap documentado em `docs/cooking-formula.md`, seção 9.
- Decisão em aberto: se partes de monstro (elixir) entram no v1 como filler de receita normal, ou ficam de fora — ver `docs/spec.md`, seção Modelo de dados.
