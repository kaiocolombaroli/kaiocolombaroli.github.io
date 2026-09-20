---
layout: page
title: Sobre
permalink: /about/
weight: 2
---

# **Sobre mim**

Olá, eu sou **{{ site.author.name }}** :wave:,<br>
Substitua este parágrafo por uma breve apresentação: sua trajetória, áreas de interesse
(ex. front-end, back-end, dados) e o que você busca no momento (oportunidades, projetos, estudos).

<div class="row">
{% include about/skills.html title="Skills de Programação" source=site.data.programming-skills %}
{% include about/skills.html title="Outras Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>
