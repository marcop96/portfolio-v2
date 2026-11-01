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

- [ ] **Imagen para compartir (Open Graph).** `Base.astro` tiene `og:title`,
      `og:description` y `og:url`, pero **no `og:image`**. Cuando pegues el link en LinkedIn
      o en un mail, aparece solo texto. Necesita una imagen 1200×630: el headline
      `I'M THE IT DEPARTMENT.` sobre el verde botella alcanza y sobra. Va en
      `public/og.png` + la meta tag en `src/layouts/Base.astro`.

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

- [ ] **`robots.txt` y `sitemap`.** No existen. Con una página sola no es urgente, pero es
      gratis y evita que Google indexe cualquier cosa rara.

- [ ] **Prueba de teclado a mano.** El inspector mide contraste y nombres accesibles, pero el
      recorrido real con Tab (skip link, el `<details>` de la libreta, el input del simulador,
      los 3 toggles, los 2 selects) lo tengo que hacer yo de punta a punta. Nunca ocurrió
      con un usuario real.

- [ ] **Lighthouse.** Los 17 criterios del spec piden Performance ≥ 95 y Accessibility 100 en
      móvil, y todavía no lo corrí. El peso (12 KB) hace pensar que sí, pero no está medido.

- [ ] **Versión en alemán.** Fuera de alcance por ahora: el sitio es solo inglés. Si en algún
      momento apuntás al Mittelstand, hace falta una segunda versión con URLs propias.

- [ ] **Email.** El sitio unifica todo en `me@marcopianaroli.com` (el CV también). El
      `pianarolimarco@gmail.com` del sitio viejo quedó eliminado por completo.
