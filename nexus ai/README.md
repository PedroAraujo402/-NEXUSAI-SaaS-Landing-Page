# [NEXUSAI] — SaaS Landing Page

> Landing page comercial dark mode para produto SaaS fictício de marketing automation com IA.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Zero deps](https://img.shields.io/badge/dependencies-zero-brightgreen?style=flat)

## Sobre

Projeto de estudo e portfólio. Landing page single-page sem frameworks, sem npm, sem build step — abre direto no browser.

Estética **cyberpunk-minimalista** com dark mode, glassmorphism, animações via Intersection Observer e layout responsivo de 360px a 1920px.

## Features

- Navbar sticky com glassmorphism ao scroll + menu mobile
- Hero com app mockup simulado em CSS puro
- Features grid com glassmorphism e hover elevation
- Pricing toggle mensal/anual com transição suave
- FAQ accordion animado
- Scroll animations via Intersection Observer
- 100% responsivo

## Estrutura

```
├── index.html
├── style.css
└── main.js
```

## Como rodar

```bash
git clone https://github.com/SEU_USER/nexus-ai-landing
cd nexus-ai-landing
python3 -m http.server 8080
# abre http://localhost:8080
```

Ou simplesmente arrasta o `index.html` pro browser.

## Stack

- HTML5 semântico
- CSS3 (Grid, Flexbox, Custom Properties, backdrop-filter)
- Vanilla JS ES6+ (Intersection Observer, DOM API)

---

MIT License
