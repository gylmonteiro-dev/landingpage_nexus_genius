# Nexus Genius

Landing page institucional (React + Vite + Tailwind CSS), portada a partir do
protótipo estático em `code.html` e do design system em `DESIGN.md`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/       # Uma seção da página por componente
    Header.jsx
    Hero.jsx
    ServicesTimeline.jsx
    FeatureHighlight.jsx
    Testimonial.jsx
    QuoteForm.jsx
    Footer.jsx
  data/
    services.js      # Conteúdo do timeline de serviços (fácil de editar)
  hooks/
    useScrollReveal.js
  App.jsx
  main.jsx
  index.css
tailwind.config.js    # Tokens de design (cores, tipografia, espaçamento) de DESIGN.md
```

## Design tokens

Todas as cores, fontes, espaçamentos e raios de borda vêm de `DESIGN.md` e
foram portados para `tailwind.config.js`. Para ajustar o tema (ex.: trocar a
cor de destaque "Insight Orange"), edite os valores lá — os componentes usam
as classes utilitárias geradas (`text-insight-orange`, `bg-primary`, etc.),
então a mudança se propaga automaticamente.

## Próximos passos sugeridos

- Conectar o formulário de orçamento (`QuoteForm.jsx`) a um endpoint real ou
  serviço de e-mail (ex.: Formspree, Resend, endpoint próprio).
- Substituir as imagens de placeholder (`src/data/services.js` e `Hero.jsx`)
  por assets próprios.
- Adicionar testes/lint conforme a necessidade do time.
