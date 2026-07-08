# Hylian Cookbook

[![Deploy to GitHub Pages](https://github.com/leopinnheiro/hylian_cookbook/actions/workflows/deploy.yml/badge.svg)](https://github.com/leopinnheiro/hylian_cookbook/actions/workflows/deploy.yml)

Guia de receitas do *Zelda: Breath of the Wild* em pt-br, com busca, filtro por efeito e favoritos.

🔗 [leopinnheiro.github.io/hylian_cookbook](https://leopinnheiro.github.io/hylian_cookbook/)

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- `localStorage` para favoritos (sem backend)

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy

Publicado automaticamente no GitHub Pages via GitHub Actions a cada push em `master` (ver `.github/workflows/deploy.yml`).

## Documentação

- `docs/spec.md` — especificação de produto, modelo de dados, identidade visual
- `docs/cooking-formula.md` — fórmula de cálculo dos combos
