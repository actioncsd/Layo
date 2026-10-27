# Layo Mkt

Landing page da Layo Mkt — *Soluções em Marketing e Automações*

Feita com React, TypeScript e Vite, publicada no GitHub Pages.

## Rodando localmente

```bash
npm install
npm run dev
```

A página abre em `http://localhost:5173/`.

## Scripts

| Comando           | O que faz                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento            |
| `npm run build`   | Checagem de tipos e build em `dist/`   |
| `npm run preview` | Serve o build de `dist/` localmente    |
| `npm run lint`    | Lint com oxlint                        |

## Estrutura

```
src/
  assets/        logos, foto da Lucilene, posts, feeds e capas dos vídeos do portfólio
  components/    Header, Footer, faixas animadas, asterisco, sublinhado, seta e chamada do WhatsApp
  sections/      seções da página (Hero, Quem somos, Serviços, Portfólio, Dúvidas...)
  config.ts      WhatsApp, e-mail e Instagram
  index.css      cores, tipografia, animações e classes globais
```

## Alterando contatos

Número do WhatsApp, e-mail e perfis do Instagram ficam em `src/config.ts`.

## Deploy

Todo push na branch `master` dispara o workflow `.github/workflows/deploy.yml`, que gera o build e publica no GitHub Pages.

No repositório, em **Settings → Pages**, a origem (*Source*) deve estar como **GitHub Actions** e o domínio personalizado (*Custom domain*) como `www.layo.com.br`.

O site fica em `https://www.layo.com.br/`. Se o site voltar a ser publicado em `https://actioncsd.github.io/Layo/`, ajuste o `base` em `vite.config.ts` para `/Layo/`.
