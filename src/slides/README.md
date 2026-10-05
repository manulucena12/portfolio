# Slides con reveal.js (aislado)

Estructura por presentación (una carpeta, dos rutas):

```
src/pages/presentaciones/mi-presentacion/
  index.astro    → detalle + documento PDF bajo click (BaseLayout, 0 JS extra)
  slides.astro   → presentación (SlidesLayout, único lugar con reveal.js)
public/presentaciones/mi-presentacion/documento-tecnico.pdf
src/assets/presentaciones/mi-presentacion/*  → imágenes vía <Image>
```

Reglas para no ensuciar el sitio liviano:

1. `reveal.js` se importa SOLO en `src/layouts/SlidesLayout.astro` (standalone, sin `BaseLayout` porque `global.css` chocaría con `reveal.css`).
2. Nada de reveal en `BaseLayout`, `site.js` ni el resto de páginas. Astro lo empaqueta solo en las rutas de slides.
3. El PDF vive en `public/` y el `<iframe>` se inyecta solo al hacer click en "Ver documento".
