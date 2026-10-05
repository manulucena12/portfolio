# Slides con reveal.js (futuro, aislado)

Para no ensuciar el sitio liviano:

1. `bun add reveal.js` (NO hacerlo hasta necesitarlo)
2. Crear `src/layouts/SlidesLayout.astro`:
```astro
---
import 'reveal.js/dist/reveal.css';
---
<link rel="stylesheet" href="reveal.css" />
<div class="reveal"><div class="slides"><slot /></div></div>
<script type="module">
  import Reveal from 'reveal.js';
  new Reveal().initialize();
</script>
```
3. Usar ese layout SOLO en `src/pages/charlas/mi-charla.astro`.

Así el resto (home, proyectos, contacto) sigue en 0 JS salvo `site.js` vanilla.
