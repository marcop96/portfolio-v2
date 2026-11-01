# Faltantes

Checklist de lo que queda abierto en el sitio nuevo. Cada ítem dice el archivo exacto y el
valor que hay hoy, para que se pueda resolver sin buscar. Lo que está en **Bloqueante**
no sale a producción sin resolverse.

Estado del build al 2026-11-01: `lint.mjs` 0 FAIL / 0 WARN · `inspect.mjs` 0 FAIL / 2 WARN
(1440, 768, 390) · 7,5 KB HTML + 4,4 KB CSS gzip.

---

## Bloqueante para publicar

- [x] ~~El PDF del CV todavía dice "Frontend Developer"~~ — hecho. El CV se construyó como
      página Astro (`src/pages/cv.astro`, noindex) con los mismos tokens del sitio y se imprime a
      PDF con Chrome headless: **1 página A4, 37 KB, texto real** (el ATS lo parsea).
      Vive en `public/cv/marco-pianaroli-cv.pdf`, que es lo que sirve el botón del sitio.
      Regenerar con: `npm run build` → `astro preview` → Chrome `--print-to-pdf` sobre `/cv`.

      Corregido en ese CV: se sacó la mención a Ströer (lo hacía inutilizable en cualquier otra
      empresa), se sacó la certificación de EducaciónIT (no cuenta), se cambió "100% operational
      uptime" por afirmaciones sostenibles, y **se agregó el homelab** (Docker, Pi-hole, Grafana,
      Cloudflare Tunnel), que era lo más grave que faltaba.

      El CV es genérico por decisión: los custom por empresa los manda él por fuera.

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

---

## Auditoría SEO del 2026-11-01 (segunda pasada, completa)

Corrida con el framework entero de `seo-audit`. Resultado: la base técnica está
impecable; lo que falta es contenido y enlaces.

Arreglado en esa pasada:

- [x] **Los títulos de puesto que un reclutador teclea no aparecían en el texto.**
      Grep sobre `src/content/`: `IT Support Specialist` 0, `System Administrator` 0,
      `IT-Support` 0, `Systemadministrator` 0, `1st level` 0. Se agregó un párrafo a la
      carta que los nombra sin relleno ("I'm after the job the ads call IT Support
      Specialist or System Administrator, and that the German listings call IT-Support
      or Systemadministrator") y el rol de Compañía Urbana pasó a "IT support, 1st level".
- [x] **No existía página 404.** Ahora `src/pages/404.astro`, con `noindex, follow`.
- [x] **Sitemap sin `lastmod`.** Pasó a ruta (`src/pages/sitemap.xml.ts`) que lo genera
      con la fecha del build.

Queda pendiente, y necesita datos tuyos:

- [ ] **La página no linkea a ningún proyecto propio.** Es el hallazgo de impacto alto que
      quedó sin resolver: el ledger nombra Job-Hub, REPS y el pipeline, pero ninguno tiene
      URL. Un reclutador de IT no puede ver tu código y no hay señal saliente de E-E-A-T.
      Necesito, para cada uno: repo público, demo viva, o "no es público" (en cuyo caso se
      deja sin link, honestamente). Archivo: `src/content/ledger.ts`, agregar un campo
      `url` opcional a cada fila de grupo "Built".

Decisiones que tomé y conviene que sepas:

- **El `h1` se queda como está** ("I'm the IT department.") aunque no contenga la keyword
  primaria. Cambiarlo destruiría el golpe de la página entera; la keyword ya está en el
  `<title>`, en la meta description, en el JSON-LD y ahora en el cuerpo de la carta.
- **El anchor del email sigue siendo la dirección literal** (`me@marcopianaroli.com`) en
  vez de un "Email me". Un reclutador necesita copiar la dirección al ATS.
- **Sin política de privacidad**: cero analytics, cero cookies, cero formularios.

Y lo estratégico, por si en algún momento te tienta invertir acá: esta página tiene tres
trabajos de SEO y los tres están hechos (búsqueda por tu nombre, tarjeta linda al pegar el
link, no parecer rota). Nadie consigue un trabajo junior de IT Support por Google. El
tiempo rinde más en el PDF del CV y en las tres fotos.

---

## Analytics (Umami self-hosted) — cableado, esperando el servidor

Decidido: Umami en el homelab, publicado por el Cloudflare Tunnel que ya existe.
Motivo: mantiene la propiedad de **cero requests a terceros** (el browser habla
con `analytics.marcopianaroli.com`, que es dominio propio) y sin cookies no hace
falta banner de consentimiento, que destruiría el diseño.

Lo que ya está en el repo:

- [x] `docker/umami/docker-compose.yml` — Umami + Postgres, bindeado a
      `127.0.0.1:3001`, telemetría apagada, healthchecks, red `cloudflared`.
- [x] Eventos cableados en el sitio con atributos `data-umami-event`:
      `cv-download`, `email` (con `place`), `linkedin`, `github`. Más
      `dns-lookup` disparado desde el island, una vez por visita.
- [x] El script solo se emite si **las dos** variables están seteadas, así el
      build queda limpio si algún día se apaga.
- [x] `docs/analytics.md` — runbook completo, incluidos los dos casos de
      cloudflared (host vs contenedor) y el orden del ingress.

Lo que falta y solo podés hacer vos, porque necesita tu servidor y tu cuenta:

- [ ] `cd docker/umami && cp .env.example .env`, generar los dos secretos con
      `openssl rand -base64 32`, `docker compose up -d`.
- [ ] Agregar `analytics.marcopianaroli.com` al ingress del túnel **antes** del
      catch-all `http_status:404`.
- [ ] Entrar a Umami (`admin` / `umami`), **cambiar la contraseña**, activar 2FA,
      crear el website y copiar el UUID.
- [ ] Setear `PUBLIC_UMAMI_SRC` y `PUBLIC_UMAMI_WEBSITE_ID` en Vercel
      (Production) y redesplegar. Son de build time: guardar no alcanza.

Advertencia: no mirar el contador de visitas. Va a dar decenas por mes y es ruido.
El único número que significa algo es **`cv-download`**: alguien bajando el CV es
una persona real considerándote.
