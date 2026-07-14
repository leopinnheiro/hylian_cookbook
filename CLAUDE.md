# CLAUDE.md — Hylian Cookbook

Guia de receitas do Zelda: Breath of the Wild em pt-br, com busca, filtro por efeito, favoritos, Recipe Creator e uma calculadora de vantagem por corações/vigor. Estático, mobile-first, publicado no GitHub Pages.

Este arquivo é o ponto de entrada. Os documentos completos estão em:

- `docs/spec.md` — especificação de produto, modelo de dados, identidade visual, fases
- `docs/cooking-formula.md` — fórmula de cálculo dos combos (fonte usada pra preencher `recipes.ts`)

Leia os dois antes de implementar qualquer coisa. As regras abaixo resumem o que não pode ser esquecido/quebrado.

## Regras inegociáveis

- **Sem shadcn/ui e sem outra lib de componentes.** Tailwind puro, componentes próprios. Decisão já tomada — não reintroduzir.
- **Dados em `.ts` tipados, nunca `.json`.** Ver `src/data/types.ts`, `materials.ts`, `recipes.ts`, `effects.ts`.
- **Sem calculadora de inventário/ingredientes.** O app não deixa o usuário marcar quais ingredientes tem em mãos pra calcular um combo na hora. Todos os combos em `recipes.ts` já vêm pré-calculados (ver `docs/cooking-formula.md`). Exceção explícita e já implementada: a aba **Calculadora** (`src/components/calculator/`) deixa o usuário informar só **corações e rodas de vigor atuais** (não ingredientes) e reordena/filtra as receitas já pré-calculadas por vantagem — isso não é uma calculadora de combo ao vivo, é um filtro sobre dado estático. Não confundir os dois escopos.
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

**Exceção deliberada — filtro de categoria de Materiais:** `CategoryFilter` (`src/components/materials/CategoryFilter.tsx`) usa uma cor distinta por categoria (`CATEGORY_COLORS` em `src/components/materials/categoryLabels.ts`), fora da paleta âmbar/ciano — decisão consciente pra diferenciar categorias numa lista grande de relance. Não estender esse padrão de "cor por item" pra outros filtros (efeito, etc.) sem discutir antes; é uma exceção pontual, não um novo princípio geral de identidade.

## Modelo de dados (resumo — schema completo em `docs/spec.md`)

- `Material`: `id`, `name`, `image`, `hp`, `effect?`, `points?`, `durationSeconds`, `overridesDurationSeconds?`, `category?`
- `Recipe`: `id`, `effect`, `variantLabel`, `name`, `hearts`, `durationSeconds`, `ingredients: IngredientSlot[]`, `isGeneric?`, `notes?`
- `IngredientSlot`: `materialIds: string[]` (intercambiáveis), `label?`
- `EffectId`: `heal | extra-hearts | restore-stamina | extra-stamina | attack | defense | speed | stealth | cold-resist | heat-resist | electric-resist | fireproof`

Dentro do mesmo `effect`, várias `Recipe` podem existir com `variantLabel` diferente (Tier 1/2/3, ou com/sem chifre de dragão etc.). Ordenar sempre com `isGeneric` (undefined/false) primeiro, `isGeneric: true` por último — dentro disso, por nível de potência decrescente (`tierCount()` em `src/lib/format.ts`, lê `variantLabel.en` procurando "Tier N") e, empatado, por `durationSeconds` decrescente. Ver `App.tsx`'s `sortWithinEffect`.

### Indicador de nível de potência ("NV. X")

`tierCount()` só mostra o badge quando `variantLabel.en` contém "Tier N" (N ≥ 2) — receitas Tier 1 não mostram nada (comportamento esperado, não é bug). Hoje isso está populado pra `attack`, `defense`, `electric-resist`, `stealth`, `speed` (Tier 2 e 3) e `cold-resist`, `heat-resist` (só Tier 2, já que esses dois efeitos só têm 2 níveis no jogo — ver `docs/cooking-formula.md` seção 3). Cada receita de tier reaproveita nome/imagem de uma receita Tier 1 já existente (nome não muda com o tier, só a quantidade/tipo do ingrediente de efeito) e usa Especiaria Goron como filler pra maximizar duração sem afetar potência (ver seção 4 do cooking-formula). **Antes de adicionar mais tiers**, siga o mesmo padrão: reaproveitar donor existente, nunca inventar nome de prato novo.

### Filtro por efeito (ícone, empilhável)

`EffectIconFilter` (`src/components/EffectIconFilter.tsx`) é o filtro por efeito compartilhado — substituiu o antigo filtro de chips de texto. Tem uma prop `multiple`: `true` (padrão, usado em Receitas/Favoritos) permite selecionar vários efeitos ao mesmo tempo, com semântica **OR** (mostra receitas de qualquer um dos efeitos selecionados) — **nunca AND**, porque cada `Recipe` só tem 1 `effect`, então duas seleções em AND sempre dariam lista vazia. `multiple={false}` (usado na Calculadora) é seleção única. A prop `excludeEffectIds` permite tirar ícones que não fazem sentido no contexto (ex: a Calculadora exclui `extra-hearts`/`extra-stamina`, já que esses efeitos nunca aparecem nos buckets de corações/vigor).

## Ordem de implementação (fases — detalhe em `docs/spec.md`)

1. Setup do projeto + carregar dados + grid de receitas por efeito + busca (pt-br e en) + filtro por efeito
2. Favoritos (ícone no card + página própria + `localStorage`)
3. Identidade visual completa + polimento mobile + estados vazios
4. (Além do escopo original) Recipe Creator + Calculadora de vantagem — ambos já implementados, ver `src/components/creator/` e `src/components/calculator/`.

Não pular pra fase 3 antes das anteriores estarem funcionais.

## Pendências conhecidas (não travar implementação por causa disso, só não inventar valor)

- Elixires (partes de monstro como filler ou ingrediente principal) entram no v1 como receita normal — mesma listagem, sem "modo elixir" separado. Ver `docs/spec.md`.
- Cura total independente da vida atual: Fada como ingrediente já resolvido (`Recipe.fullHeal`, receitas `fairy-tonic-*`); Hearty/Endura crus (comidos sem cozinhar) ainda não modelado — ver `docs/cooking-formula.md` seção 9.1.
- Mapa/rota de farming de ingredientes — fora de escopo do v1, ver `docs/spec.md` seção "Backlog / v2".
- **`hp` dos itens "Hearty"** (Durião, Trufa, Rabanete, Bass, Salmão, Caracol-Concha-Azul, Lagarto — 9 materiais) não foi possível confirmar contra o site de referência (o script de auditoria não lê o valor quando o prato dá "cura total"/muito alta — precisa de outro método). Não foram alterados, ficam como estavam.
- **Duração com múltiplas unidades do mesmo ingrediente potente** (ex: 3x Truta Gélida) não segue a fórmula simples `base + 30×ingrediente + bônus_tempero` — parece escalar de forma não-linear conforme o nível de potência atingido, ainda não mapeado. Afeta as 12 receitas de Tier 2/3 adicionadas nesta sessão (`fish-skewer-*-tier-*`, etc.) — durações dessas ficam sob suspeita até isso ser resolvido.
