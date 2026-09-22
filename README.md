# kaiocolombaroli.github.io

Landing page de serviços (automação, software, agentes de IA e tráfego pago), publicada via
[GitHub Pages](https://kaiocolombaroli.github.io). HTML/CSS/JS estático, sem build.

## Estrutura

- [index.html](index.html) — todas as seções da página
- [style.css](style.css) — estilos (tokens de cor, sombra, fonte e transição no `:root`)
- [script.js](script.js) — menu mobile, animação de entrada das seções, link ativo do menu e botão flutuante do WhatsApp
- [favicon.svg](favicon.svg) — ícone da aba

## Como adicionar um projeto no portfólio

Os cards ficam na seção `#portfolio` do [index.html](index.html), dentro de `.project-grid`.
Há um comentário logo acima da seção com o template pronto pra copiar. Cada projeto é um
`<article class="project">` e termina de um destes dois jeitos:

- **com link público** — `<a class="project-link" href="https://…">Ver site …</a>`
- **só descrição** — `<span class="project-note">Projeto interno</span>`

Classes opcionais no `<article>`: `project-featured` (fundo em destaque) e `project-wide`
(ocupa a linha inteira no desktop).

> Os projetos que estão lá hoje, fora o primeiro, são exemplos de preenchimento —
> troque pelos reais antes de divulgar o site.

## Rodar localmente

Abra `index.html` direto no navegador, ou sirva a pasta:

```
npx serve .
```
