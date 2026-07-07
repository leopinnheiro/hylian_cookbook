# Fórmula de Culinária do BOTW — Documento de Referência

> Consolidado a partir de: planilha "BOTW Cooking" (abas `Ingredients` / `Ingredients True Potency`), post do Reddit "Cooking Math (Complete)", e post "Perfect Recipes". Serve de fonte única pra preencher `recipes.ts` com valores calculados corretamente — não é pra virar lógica de runtime no app (decisão já fechada: dados pré-calculados, sem calculadora ao vivo).

## 1. Corações (Hearts)

```
hearts = soma(hp de cada ingrediente) × 2
```

## 2. Duração

Cada **efeito** (não o ingrediente) tem uma duração-base fixa, somada uma vez por ingrediente que contribui esse efeito:

| Efeito | Duração base |
|---|---|
| Attack Up | 0:20 |
| Defense Up | 0:20 |
| Speed Up | 0:30 |
| Cold Resistance | 2:00 |
| Heat Resistance | 2:00 |
| Shock Resistance | 2:00 |
| Fireproof | 2:00 |
| Stealth Up | 1:30 |

```
duration = soma(duração_base_do_efeito por ingrediente que dá efeito)
         + 30s × (quantidade total de ingredientes no prato)
         + bônus de "time boost" (ingredientes neutros, ver seção 4)
```

## 3. Potência / Tier do efeito (CORRIGIDO — fonte: Zelda Dungeon Wiki, com exemplos resolvidos oficiais)

**Atualização importante:** a versão anterior deste documento usava um threshold "global" (30/45) vindo de um post do Reddit, cruzado com a aba `Ingredients` da planilha (escala 7/14/21). Isso está **errado como modelo oficial** — era uma re-normalização inventada pelo autor daquela planilha, só pra usar um único par de threshold pra todos os efeitos. A escala real e pequena (1/2/3 pontos por ingrediente) da aba `Ingredients True Potency` é a correta, confirmada agora com exemplos oficiais da wiki:

> 4× Armoranth (1pt cada = 4 pts) < threshold Mid de Tough (5) → resultado **Low**
> 3× Ironshroom (2pts cada) + 1× Armored Porgy (3pts) = 9pts ≥ 7 (threshold High de Tough) → resultado **High**

### Thresholds oficiais por efeito

| Efeito (nome do jogo) | Nosso `EffectId` | Low | Mid | High |
|---|---|---|---|---|
| Mighty | `attack` | 1 | 5 | 7 |
| Tough | `defense` | 1 | 5 | 7 |
| Sneaky | `stealth` | 1 | 6 | 9 |
| Hasty | `speed` | 1 | 5 | 7 |
| Electro | `electric-resist` | 1 | 4 | 6 |
| Spicy | `cold-resist` | 1 | 6 | — (só 2 níveis) |
| Chilly | `heat-resist` | 1 | 6 | — (só 2 níveis) |
| Fireproof | (sem ingrediente de comida — só elixir) | — | — | — |
| Hearty | `extra-hearts` | linear, +1 coração amarelo por ponto, sem tier |
| Energizing | `restore-stamina` | escala própria, ver seção 9 |
| Enduring | `extra-stamina` | escala própria, ver seção 9 |

Efeitos com só 2 linhas (Spicy/Chilly) não têm um terceiro nível — o "Mid" já é o teto.

```
potência total = soma(points de cada ingrediente pro efeito)
resultado = comparar contra a linha do efeito na tabela acima
```

### Tabela de pontos por ingrediente (fonte oficial, substitui qualquer estimativa anterior)

**Mighty (Attack Up):** Mighty Thistle=1 · Mighty Bananas=2, Mighty Carp=2, Razorshroom=2, Razorclaw Crab=2 · Mighty Porgy=3

**Tough (Defense Up):** Armoranth=1 · Armored Carp=2, Ironshroom=2, Fortified Pumpkin=2, Ironshell Crab=2 · Armored Porgy=3

**Sneaky (Stealth Up):** Blue Nightshade=1, Sneaky River Snail=1 · Silent Shroom=2, Stealthfin Trout=2 · Silent Princess=3

**Hasty (Speed Up):** Rushroom=1, Swift Carrot=1 · Swift Violet=2, Fleet-Lotus Seeds=2 (não tem tier 3)

**Electro (Shock Resistance):** Electric Safflina=1, Voltfruit=1 · Zapshroom=2 · Voltfin Trout=3

**Spicy (Cold Resistance):** Warm Safflina=1, Spicy Pepper=1 · Sunshroom=2, Sizzlefin Trout=2 (não tem tier 3)

**Chilly (Heat Resistance):** Cool Safflina=1, Hydromelon=1 · Chillshroom=2, Chillfin Trout=2 (não tem tier 3)

**Energizing (vigor atual):** Stamella Shroom=1 · Courser Bee Honey=2, Bright-Eyed Crab=2 · Staminoka Bass=4

**Enduring (vigor máximo temporário):** Endura Shroom=0.5 · Endura Carrot=2

**Hearty (corações amarelos):** Hearty Truffle=1 · Hearty Bass=2 · Hearty Blueshell Snail=3, Hearty Radish=3 · Hearty Salmon=4, Hearty Durian=4, Big Hearty Truffle=4 · Big Hearty Radish=5

(Insetos/monstros usados em elixir têm pontos próprios, já cobertos pela aba `ELIXIRS` da planilha — não repetidos aqui.)

## 4. Time boosts (ingredientes neutros)

Ingredientes tipo Casca-de-Árvore-Chickaloo, Bolota, Arroz Hyliano, Halita, Trigo de Tabantha, Açúcar, Leite Fresco, Manteiga de Cabra, Ovo, Especiaria Goron somam um bônus de duração **fixo por tipo**, mas:
- Não contam pra potência.
- **O bônus só se aplica uma vez por tipo de ingrediente na receita.** Um segundo item do mesmo tipo conta só como ingrediente comum (+30s genérico), sem repetir o bônus especial.

## 5. Partes de dragão (regra especial)

- **Escama:** +1:00 de duração (funciona como time boost comum)
- **Garra:** +3:00 de duração
- **Chifre:** **substitui** (não soma) a duração total do prato — fixa em **30:00**, ignorando o resto do cálculo de duração
- Qualquer parte de dragão também força um crítico garantido (ver seção 7)

No modelo de dados, isso vira um campo tipo `overridesDurationSeconds` no material, usado só pelo Chifre.

## 6. Elixires

- Pra virar elixir, precisa incluir pelo menos 1 reagente de monstro junto dos ingredientes de efeito. Sem reagente, mesmo com ingredientes corretos, o prato sai "duvidoso".
- Reagentes têm 3 tiers de duração, aplicados como time boost: **Tier 1 = 0:40, Tier 2 = 1:20, Tier 3 = 2:40**.
- Cada monstro tem drops em ordem Comum → Incomum → Raro mapeando pra Tier 1 → 2 → 3 (ex: Bocoblin: Chifre=T1, Presa=T2, Vísceras=T3). Exceção: Geleca de Chulchul normal = T1, colorida = T2 (só 2 tiers pra chulchul).
- É possível misturar ingredientes de comida normal com reagente de monstro — o resultado vira elixir mesmo assim.

## 7. Crítico (bônus aleatório — NÃO entra nos dados, é RNG)

~10% de chance por prato cozido, **exceto** quando: já tem Estrela Cadente ou parte de dragão (crítico garantido), ou o prato é Comida Duvidosa/Rock-Hard (nunca cricam). Garantido também das 23:30 à 00:30 durante lua de sangue. Um dos 5 bônus abaixo é aplicado com chance igual entre as opções válidas pro prato (não é sempre o mesmo, e só considera bônus que fazem sentido pro tipo de prato — ex: um prato de Tough não pode rolar vigor extra):
- +3 corações restaurados
- +5:00 de duração
- +1 tier de potência (Low→Mid, Mid→High)
- +1 coração amarelo extra
- +2 ou +5 de vigor (verde/amarelo)

**Decisão de modelagem:** isso continua fora do `recipes.ts` — vira nota fixa de UI, como já decidido antes.

## 8. Monster Extract (também RNG, também fora dos dados)

Randomiza corações (1/4 do valor base / sem mudança / +3 corações), potência (-1 tier / sem mudança / +1 tier) e duração (1:00 / 10:00 / 30:00) — com percentuais próprios pra cada resultado. Nunca dá o bônus de crítico normal (são mutuamente exclusivos). Mesma decisão: fica de fora dos dados calculados, vira nota de UI.

## 9. Hearty e Vigor/Endura (efeitos sem tier)

- **Hearty (`extra-hearts`):** linear, sem tier — soma direta dos pontos de cada ingrediente Hearty = quantidade de corações amarelos extras. Há um **teto de 30 corações totais** (base + amarelos) por prato, segundo os testes da comunidade.

- **Enduring/`extra-stamina` (RESOLVIDO):** cada ponto = **1/5 de uma roda de vigor**, arredondado pra baixo, ciclando a cada 5 pontos (1 roda cheia). Confirmado pela nota oficial da wiki: *"5 Endura Shrooms (2,5 pontos) só dá 2/5 de roda"* — e exceção: se Endura Shroom for o único ingrediente Enduring do prato, o mínimo garantido é 1/5, mesmo dando menos que isso na conta.
  ```
  rodas_de_vigor_extra = floor(soma_de_pontos_enduring) / 5
  // pontos 1,2,3,4 → 1/5,2/5,3/5,4/5 de roda
  // 5 → 1 roda cheia · 6,7,8,9 → 1 roda + 1/5,2/5,3/5,4/5 · 10 → 2 rodas cheias
  ```

- **Energizing/`restore-stamina` (AINDA EM ABERTO):** a wiki tem uma tabela de pontos 1 a 11 mapeando pra ícones visuais de quantidade de vigor restaurado, mas os nomes dos arquivos de ícone (Energizing1 a Energizing5, combinados de forma não-linear) não deixam claro o valor numérico exato de cada ponto — ao contrário do Enduring, não segue o padrão simples "1 ponto = 1/5". Pra fechar esse gap com certeza, precisaríamos ver as imagens dos ícones (quantos "gomos" da roda cada uma preenche) ou achar uma fonte que já traduza isso em número. Fica como pendência.

- Ingredientes Hearty e Endura sempre restauram vida/vigor **por completo**, independente de outros ingredientes de cura no prato.

## 10. Conclusões práticas (pra escolher que combos virar receita "otimizada")

- "Prato perfeito" = bater o mais perto possível do threshold de 45 (High) com o menor número de ingredientes de efeito, preenchendo os slots restantes com Vísceras de Bocoblin/Moblin (potência 0, servem só pra ocupar espaço e reduzir a chance de precisar de ingrediente raro).
- Combos com Chifre de Dragão são o teto absoluto de duração (30:00 fixos) mas dependem de item raro — por isso faz sentido ter as duas variantes lado a lado na mesma tela (com e sem Chifre), como já decidido no `spec.md`.
- Ingredientes de "time boost" (tempero) valem mais a pena em efeitos de duração curta (Attack Up, Defense Up = 0:20 base) do que em efeitos que já têm duração base longa (Cold/Heat/Shock Resistance = 2:00), onde o ganho proporcional é menor.
