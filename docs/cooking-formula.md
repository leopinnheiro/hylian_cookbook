# Fórmula de cozimento (BOTW)

Validada empiricamente no jogo (ver seção 8).

Os nomes de campo abaixo usam a nomenclatura de `types.ts` (`Material`/`Recipe`).

## 1. Entrada

Uma lista de materiais escolhidos, um por slot de `Recipe.ingredients` (`IngredientSlot.materialIds`
é um grupo OR — você escolhe 1 item de cada slot). Repetições do mesmo material contam como
"múltiplas cópias" e afetam potência/duração/preço de formas diferentes (seções 3-5).

## 2. Determinar a categoria (efeito) do prato

Percorre todos os materiais escolhidos. Só materiais com `Material.effect` definido participam:

- Se nenhum material tem `effect` → prato sem efeito (`Recipe.effect` fica `undefined`).
- Se todos os materiais com `effect` concordam → esse é o efeito do prato.
- Se **dois materiais com `effect` divergem entre si** → o prato perde o efeito (`Recipe.effect`
  fica `undefined`), mesmo que outros campos ainda sejam calculados normalmente.

Importante: só contam pra essa regra os materiais que o jogo trata como "fonte de efeito real".
Partes de monstro (caudas, chifres, presas, vísceras, gelecas, asas — mesmo as variantes elementais
como Cauda de Lagalfos Ígneo) **nunca** têm `effect`, mesmo quando o nome sugere resistência
elemental — confirmado no jogo (seção 9). Só bichos capturados vivos (insetos, lagartos, sapos,
grilos, besouros) carregam efeito de fato, além das plantas/comidas "normais" com efeito.

## 3. Elixir vs. prato de comida

Se **qualquer** ingrediente tiver `Material.forElixir: true` (insetos e partes de monstro), o
resultado é um elixir (`Recipe.isElixir: true`). Isso muda a regra de corações (seção 5).

## 4. Duração (`Recipe.durationSeconds`)

- Se o prato não tem efeito (categoria nula) → duração é `null`/não relevante — normalmente vira
  Comida Duvidosa ("Gororoba") em vez de um prato/elixir válido de verdade quando não há nenhum
  ingrediente com efeito real (confirmado no jogo, seção 9).
- Se o efeito for **Hearty/extra-hearts, Enduring/extra-stamina ou Energizing/restore-stamina** →
  duração é `null` (esses efeitos não usam timer, usam corações/rodas de estamina — seção 6).
- Caso contrário, soma por ingrediente:
  - Primeira cópia de um material: usa `Material.durationSecondsForFirstCopy` se existir, senão
    `Material.durationSeconds`.
  - Cópias seguintes do mesmo material: sempre `Material.durationSeconds` (a regra "primeira cópia"
    não se repete).
  - Soma tudo, incluindo o(s) ingrediente(s) "neutro(s)"/de preenchimento normalmente.

**Validado no jogo** (Libélula Gélida `durationSeconds: 150` + Chifre de Koboblin
`durationSeconds: 70`, repetido):

| Chifres | Duração calculada        | Duração no jogo                                                                       |
| ------- | ------------------------ | ------------------------------------------------------------------------------------- |
| 1       | 150 + 70 = 220s (3:40)   | 3:40 ✓                                                                                |
| 2       | 150 + 70×2 = 290s (4:50) | 4:50 ✓                                                                                |
| 3       | 150 + 70×3 = 360s (6:00) | 6:00 ✓                                                                                |
| 4       | 150 + 70×4 = 430s (7:10) | 7:10 ✓ (um teste anterior deu 12:10 — bônus aleatório de cozimento, não reproduzível) |

## 5. Potência (`potency`)

Só calculada se o prato tem efeito (categoria não-nula). Por ingrediente:

- Se `Material.potency` é uma **tabela** (`PotencyTable`): só conta na **primeira**
  cópia daquele material, indexando pela posição `quantidadeDeCópias - 1` (ex.: 3 Endura Shroom
  numa receita usam `potency[2]`). Repetir o mesmo material além da 1ª cópia não soma nada extra —
  a posição na tabela já embute o efeito da quantidade total escolhida.
- Se `Material.potency` é um **número simples**: soma a cada cópia adicional — potência cresce
  linear (usar 3 unidades de um material com `potency: 1` dá potência 3, não 1).

**Só materiais de categoria Hearty/extra-hearts usam potência escalar** (Durião/Trufa/Rabanete/
Salmão/Perca/Caracol/Lagarto Nutritivos) — todos os outros efeitos usam tabela. Faz sentido: como o
`hp` de um prato Hearty é sempre fixo em 120 (cura total, não somado — seção 6), a potência não
serve pra calcular cura ali; ela vira os **corações-bônus temporários** (os amarelos, acima do
máximo), que fazem mais sentido crescendo linear por cópia do que "platôs" por tabela. Reparar
também que o valor escalar acompanha o `hp` cru do próprio ingrediente (ex.: Rabanete Nutritivo
Grande tem o maior `hp` e o maior `potency`, Trufa Nutritiva tem os menores dos dois).

**Tamanho da tabela**: a maioria tem 5 posições (1 a 5 cópias), mas materiais com `forElixir: true`
(insetos/lagartos/sapos/grilos/besouros que viram elixir) têm só **4** posições. Motivo: um elixir
só é válido com pelo menos 1 parte de monstro/reagente além do bicho-efeito (confirmado no jogo —
seção 9); numa panela de 5 vagas, isso deixa no máximo 4 cópias do mesmo bicho numa receita válida,
então a tabela nunca precisa ir até 5 pra esses materiais.

Depois de somar a potência de todos os ingredientes distintos, se o efeito for Enduring/Energizing/
Hearty, o total é limitado por um teto por categoria:

| Efeito                       | Teto de potência |
| ---------------------------- | ---------------- |
| Chilly (heat-resist)         | 2                |
| Electro (electric-resist)    | 3                |
| Enduring (extra-stamina)     | 10               |
| Energizing (restore-stamina) | 15               |
| Fireproof                    | 2                |
| Hasty (speed)                | 3                |
| Hearty (extra-hearts)        | 25               |
| Mighty (attack)              | 3                |
| Sneaky (stealth)             | 3                |
| Spicy (cold-resist)          | 2                |
| Tough (defense)              | 3                |

## 6. Corações (`Recipe.hearts`)

`Recipe.hearts` usa a mesma unidade de `Material.hp`: **quarto-de-coração**. Não tem mais conversão
de unidade no meio do caminho — o valor final é a soma acumulada direto, sem dividir por nada. Pra
exibir com precisão de quarto (ícones `heart-0.svg`..`heart-4.svg`, um "notch" por quarto igual ao
indicador de vida clássico da série), use `getHeartIcons()` em `src/lib/format.ts` (mesmo padrão de
`getWheelIcons()` pro vigor). Pra mostrar só o número de corações reais (sem ícone), divida por 4.

Exemplo (Maçã): `hp: 2` = 0,5 coração cru. Cozinhando 1 Maçã sozinha (receita "Cozido de Frutas"),
acumulador = `2 × 2 = 4` quarto-de-coração = 1 coração real — e é esse `4` que vai direto pra
`Recipe.hearts`.

Cálculo do acumulador, por ingrediente (com 3 exceções hardcoded por material específico — não
seguem a regra geral e não dependem do campo `hp` desse material):

- Se não há ingredientes → 0.
- Se o efeito é **Hearty/extra-hearts** → sempre **120** (valor-sentinela de cura total, não é uma
  soma — é fixo independente dos ingredientes usados, contanto que o efeito seja Hearty; ver seção
  10 — essa regra é uma simplificação do site que não reflete a cura real de combos Hearty fracos;
  nesses casos confie no valor já gravado no catálogo, vindo da wiki, em vez de recalcular).
- Senão, soma por ingrediente:
  - Se o prato é elixir (`isElixir`) **e** o ingrediente não é Fada → **não conta hp nenhum** pra
    esse ingrediente (elixires não curam, só a exceção da Fada abaixo).
  - **Fada** (`fairy`): só soma um bônus fixo de **+28** na primeira cópia, e só se: a receita tem
    só 1 ingrediente no total, OU há mais de 1 Fada, OU o prato já é elixir por outro motivo. Fora
    disso a Fada não contribui aqui (a Poção de Fada de verdade tem sua própria mecânica à parte —
    ver seção 7).
  - **Bolota / Fruto-de-árvore Chickaloo** (`acorn`, `chickaloo-tree-nut`): contribuição **fixa**
    (+4 na primeira cópia, +2 nas repetições), **ignorando o campo `hp` desses materiais**.
  - Qualquer outro material: soma `2 × Material.hp` (a cozinha sempre dobra o valor cru de cura).
- Se depois de tudo o acumulado deu 0 → resultado é 0 (se elixir) ou 1 quarto-de-coração (se prato
  de comida — piso mínimo de cura, "não pode curar zero corações num prato válido"; ver seção 10,
  esse piso ainda não foi confirmado no jogo pra unidade de quarto).
- Senão, o resultado é a soma acumulada, sem mais nenhuma divisão.

## 7. Poção de Fada (Tônico Feérico)

A Fada foge inteiramente dessa fórmula quando é o único ingrediente da receita — o jogo trata isso
como um item especial fixo, testado manualmente (ver `recipes.ts`, receitas `fairy-tonic-*`):

| Quantidade | Corações                      |
| ---------- | ----------------------------- |
| 1 Fada     | 7                             |
| 2 Fadas    | 17                            |
| 3 Fadas    | 27                            |
| 4 Fadas    | cura total (`fullHeal: true`) |

Também revive automaticamente 1x ao morrer.

## 8. Preço de venda (`sellPrice`, se você quiser exibir isso)

Soma por ingrediente: `Material.sellPrice × multiplicador`, onde o multiplicador depende de quantas
cópias daquele mesmo material entram na receita:

| Cópias do mesmo material | Multiplicador |
| ------------------------ | ------------- |
| 1                        | 1.5×          |
| 2                        | 1.8×          |
| 3                        | 2.1×          |
| 4                        | 2.4×          |
| 5                        | 2.8×          |

O total é arredondado pra cima, múltiplo de 10 (`10 × ceil(soma / 10)`).

## 9. Confirmações feitas no jogo (Switch, pt-br)

- **Libélula Gélida (Cold Darner) + Chifre de Koboblin** → Elixir Gélido, 3:40 (bate com a fórmula,
  seção 4).
- **Cauda de Lagalfos Ígneo/Elétrico + parte de monstro neutra** → **Comida Duvidosa (Gororoba)**,
  não um elixir de resistência elemental. Confirma que essas caudas não têm `effect` de verdade,
  apesar do nome.
- **Geleca de Chuchu (variante elemental) + parte de monstro neutra** → mesmo resultado, Gororoba.
- Regra geral confirmada: **bicho vivo capturado com rede/na mão (inseto, lagarto, sapo, grilo,
  besouro) carrega efeito real; parte de monstro (derrubada em combate) nunca carrega efeito**,
  mesmo quando o nome é elemental (só serve pela duração/preenchimento).
- **1 Libélula sozinha, ou 1 Cauda sozinha** → Gororoba (comida). Item com `forElixir` sozinho, sem
  mais nada, não forma prato/elixir válido — precisa de pelo menos mais 1 ingrediente.
- Testes de duração com múltiplas cópias do mesmo ingrediente (seção 4) confirmaram a soma linear;
  um resultado fora da curva (12:10 em vez de 7:10 pra 4 cópias) foi atribuído ao bônus aleatório de
  "crítico de cozimento" do jogo — um novo teste limpo confirmou o valor previsto pela fórmula.
- **Maçã crua = 0,5 coração**; cozinhar 1 Maçã sozinha ("Cozido de Frutas") = **1 coração real**.
  Confirmou a unidade de `Material.hp` (quarto-de-coração) — ver seção 6.

## 10. O que ainda não foi confirmado/está em aberto

- `Recipe.hearts` passou a usar quarto-de-coração direto (antes tinha uma divisão por 2 pro meio-
  coração, removida — ver seção 6). A tabela da Poção de Fada (`FAIRY_ONLY_HEARTS`, seção 7) e o
  piso mínimo de 1 pra prato sem ingrediente com hp (seção 6) foram escritos/testados sob a unidade
  antiga e **não foram reconferidos** contra a unidade nova — se algum desses valores estiver errado
  agora, é aqui que precisa ajustar.
- A regra especial da Especiaria Goron (`durationSecondsForFirstCopy: 90` vs. `durationSeconds: 30`)
  não foi testada no jogo ainda (falta o item). Usada como extraída da base, mas sem confirmação
  empírica direta.
- 22 receitas do catálogo (`recipes.ts`) tinham duração divergente da fórmula antes de serem
  corrigidas (basicamente todo elixir "básico" e alguns espetos com Especiaria Goron) — corrigidas
  usando esta fórmula como fonte de verdade, mas sem reteste individual de cada uma no jogo.
