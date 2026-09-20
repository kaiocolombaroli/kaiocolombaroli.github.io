# kaiocolombaroli.github.io

Portfólio pessoal, publicado via [GitHub Pages](https://kaiocolombaroli.github.io) usando o tema
[portfolYOU](https://github.com/YoussefRaafatNasry/portfolYOU) (via `remote_theme`).

## Estrutura

- [_config.yml](_config.yml) — configuração do site, tema e dados do autor (nome, foto, links sociais)
- [pages/](pages/) — páginas do site (início, sobre, projetos, 404)
- [_projects/](_projects/) — cada arquivo é um card na página de Projetos
- [_data/programming-skills.yml](_data/programming-skills.yml) e [_data/other-skills.yml](_data/other-skills.yml) — barras de skills exibidas em "Sobre"
- [_data/timeline.yml](_data/timeline.yml) — linha do tempo (experiência/formação) exibida em "Sobre"

## Editar conteúdo

Todos os textos de exemplo têm "Substitua" indicando onde trocar pelo conteúdo real:
bio em [pages/about.md](pages/about.md), dados pessoais em [_config.yml](_config.yml) (seção `author`)
e projetos em [_projects/](_projects/).

## Rodar localmente

```
bundle install
bundle exec jekyll serve
```
