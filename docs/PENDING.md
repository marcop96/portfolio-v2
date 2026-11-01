# Faltantes

Checklist de lo que queda abierto en el sitio nuevo. Cada ítem dice el archivo exacto y el
valor que hay hoy, para que se pueda resolver sin buscar. Lo que está en **Bloqueante**
no sale a producción sin resolverse.

Estado del build al 2026-11-01: `lint.mjs` 0 FAIL / 0 WARN · `inspect.mjs` 0 FAIL / 2 WARN
(1440, 768, 390) · 7,5 KB HTML + 4,4 KB CSS gzip.

---

## Bloqueante para publicar

- [ ] **El PDF del CV todavía dice "Frontend Developer".** `public/cv/marco-pianaroli-cv.pdf`
      es el PDF viejo, sin tocar. La primera línea dice
      `IT Support - Frontend Developer`, el ABOUT ME habla de front-end, y las
      certificaciones listan Vue/Nuxt. Si alguien hace clic en *Download CV* desde la página
      nueva, recibe el candidato viejo. Hay que rehacerlo con la misma tesis del sitio:
      IT support y administración, homelab, Cloudflare Tunnel, DNS, Docker.
      Mientras tanto, la página nueva y el PDF se contradicen.

- [ ] **Confirmar el deploy y el dominio.** El sitio es estático en `dist/`. `marcopianaroli.com`
      tiene que apuntar al proyecto nuevo en Vercel, y los subdominios de los proyectos
      (`short.`, `incremental.`, `vuello.`, `vuecommerce.`, `expenses.`) tienen que seguir
      funcionando o retirarse a propósito. Ojo: el `vercel.json` viejo tenía un rewrite
      catch-all `/(.*) → /` que habría dado 404 a `/cv/*.pdf`; ya está corregido, pero hay que
      confirmar que Vercel no lo esté tomando de un deploy anterior.

- [ ] **Números del homelab.** Todos los puse yo con lo que me contaste. Si alguno es falso,
      se cae en la primera entrevista. Archivo: `src/content/homelab.ts`

      | campo | valor actual | ¿correcto? |
      |---|---|---|
      | `host.os` | `Ubuntu Server 24.04` | |
      | `host.uptimeDays` | `214` | |
      | CPU 24h (`cpuSeries`) | serie inventada, pico 31% | |
      | `containers[].up` | cloudflared 211d · pihole 214d · pocketbase 189d · grafana 189d | |
      | `containers[].ports` | pihole `53 · 8053`, pocketbase `8090`, grafana `3000`, cloudflared `–` | |
      | `ingress[]` | 4 hostnames + catch-all 404 | |
      | `collections[]` | jobs, applications, workouts, exercises, videos, pipeline_runs | |
      | registros totales | `5 108` (suma de la tabla, tiene que dar) | |
      | reglas regex | `13` en tres listas | |

---

## Alto impacto

- [ ] **Tres fotos con el teléfono.** Es lo único que separa esto de estar terminado, y mata
      los 2 WARN que quedan (`no-real-pictures`, `no-footage`).
      1. La notebook, apagada o encendida, donde vive.
      2. La pantalla con Grafana abierto.
      3. `docker ps` en la terminal.

      Con eso: la foto de la notebook reemplaza el `GrafanaPanel` del hero o se suma a la
      sección del homelab, y una captura real de Grafana se usa como imagen del posteo social.
      Las fotos van a `src/assets/` y se importan con `astro:assets` (como
      `marcoprofile.jpg`), así Astro las convierte a webp y les pone width/height.

- [ ] **Cantidad de equipos en Okapi.** Hoy el copy evita el número a propósito
      ("every laptop in the building"). Si vas a decir un número, tiene que ser uno que
      puedas sostener: `src/content/site.ts` → `letter.paragraphs[1]`.

- [ ] **Network+ o Security+.** Hoy la carta dice, y es literalmente verdad:
      *"Next step is a first certification: Network+ or Security+, and I am deciding which
      between them."* El día que te anotes, cambiar por
      *"Studying for Network+"*. Archivo: `src/content/site.ts` → `letter.nextStep`.
      Si te anotás, además suma poner la fecha de examen.

- [x] ~~Imagen para compartir (Open Graph)~~ — hecha. `public/og.png`, 1200×630 reales, sacada del
      hero con Chrome headless y recortada con sharp (23 KB). Con `og:image`,
      `og:image:width`/`height`/`alt`, `twitter:card` y `og:site_name`. Para regenerarla:
      capturar a 1200×750 y recortar los primeros 630 px.

- [ ] **Los otros dos proyectos.** REPS y el pipeline de video siguen siendo placeholder
      (una línea genérica cada uno). Job-Hub ya está reescrito con datos reales de tu wiki:
      scrapers de Playwright sobre 8 portales, corrida diaria en GitHub Action, scoring con
      Claude, PocketBase como tablero. Falta lo mismo para los otros dos.
      Archivo: `src/content/ledger.ts` (buscar los `// TODO`).

- [ ] **Reglas reales de Pi-hole.** El simulador corre con 13 reglas que escribí yo, todas
      con forma `(\.|^)dominio$`. Si exportás los regex de tus listas reales, el simulador
      pasa de "demo convincente" a "esto es exactamente lo que corre en mi casa".
      Archivo: `src/lib/dns.ts` → `rules`. Ojo: si agregás reglas con alternancia
      (`(com|de)`) el toggle de subdominios deja de funcionar bien, porque `baseDomain()` solo
      sabe leer la forma simple.

---

## Decisiones pendientes (no bloquean)

- [ ] **VLANs: ¿sí o no?** No lo puse porque no me confirmaste. Si tocaste VLANs, va en
      `src/content/tools.ts`, grupo `Network`. Si no, se queda afuera y está bien.

- [ ] **Analytics.** El sitio viejo tenía `@vercel/analytics` y lo eliminé junto con el plugin
      de Nuxt. Decidir si vuelve (una línea de script en `Base.astro`) o si no hace falta.

- [x] ~~`robots.txt` y `sitemap`~~ — hechos, y la descripción se recortó a 153 caracteres.

- [ ] **Prueba de teclado a mano.** Lighthouse da 100 en accesibilidad y el DOM verificado está
      bien (un h1, cuatro landmarks, todas las imágenes con alt, un `aria-live`), pero eso cubre
      solo una parte: el recorrido real con Tab — skip link, el `<details>` de la libreta, el
      input del simulador, los 3 toggles y los 2 selects — todavía no lo hizo una persona de
      punta a punta.

- [x] ~~Lighthouse~~ — medido. Móvil (4x CPU, slow 4G): 100 performance / 100 accessibility /
      100 best-practices / 100 SEO. LCP 0,8 s, CLS 0, TBT 0 ms. Desktop: los mismos 100, LCP 0,2 s.

- [ ] **Versión en alemán.** Fuera de alcance por ahora: el sitio es solo inglés. Si en algún
      momento apuntás al Mittelstand, hace falta una segunda versión con URLs propias.

- [ ] **Email.** El sitio unifica todo en `me@marcopianaroli.com` (el CV también). El
      `pianarolimarco@gmail.com` del sitio viejo quedó eliminado por completo.

---

## SEO — cerrado el 2026-11-01

Auditoría corrida con `coreyhaines31/marketingskills@seo-audit` (57,7k ⭐) más
`addyosmani/web-quality-skills@seo` y Lighthouse. Encontrado y corregido:

| Hueco | Estado |
|---|---|
| Sin `rel="canonical"` | ✅ self-referencing a `https://marcopianaroli.com/` |
| Sin datos estructurados | ✅ JSON-LD `Person` (name, jobTitle, address Berlín, knowsAbout, sameAs) |
| Sin `og:image` | ✅ `public/og.png` 1200×630, 23 KB |
| Sin `og:site_name` ni `twitter:title/description/image` | ✅ |
| Sin `robots.txt` ni `sitemap.xml` | ✅ |
| Meta description de 180 caracteres (Google corta en ~155) | ✅ 153 |
| Sin `max-image-preview:large` | ✅ en el meta robots |
| **Tap target del switch: 34×18 px** (falla WCAG 2.5.8, mínimo 24×24) | ✅ área de click 46×44 sin cambiar el aspecto, y el `<label>` ahora es clickeable |
| Selects de 28 px de alto | ✅ 32 en desktop, 44 en móvil |

Lo que queda y depende de vos, no de código:

- **Search Console**: dar de alta el dominio y enviar `https://marcopianaroli.com/sitemap.xml`.
- **www vs no-www**: decidir uno y redirigir el otro en Vercel (el canonical ya asume sin `www`).
- **HTTPS/HSTS**: Vercel lo da por defecto; confirmar que el dominio nuevo está verificado.
- **`og:locale`**: hoy dice `en_GB`. Si preferís `en_US`, es una línea en `src/layouts/Base.astro`.
