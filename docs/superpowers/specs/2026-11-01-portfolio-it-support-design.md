# marcopianaroli.com — spec de diseño y contenido

**Fecha:** 2026-11-01
**Objetivo:** reemplazar el portfolio actual (frontend developer) por un sitio orientado a
conseguir un rol de **IT Support Specialist / Systems Administrator** en Berlín o remoto UE.

---

## 1. Estado de partida

Repo `portfolio-v2`: Vue 3 + Vite + Tailwind + Vercel. Dos rutas (`/`, `/resume`).
5 proyectos, todos de frontend. Copy de "front-end developer con pasión".
Cero rastro de homelab, Docker, DNS, Linux, networking o del trabajo real de soporte.

`lint.mjs` sobre el código actual: **8 FAIL, 12 WARN** (sombras en reposo, gradiente radial de
fondo, `backdrop-blur` en el navbar, `transition: all` ×9, `100vh` en móvil). El sitio se reescribe
entero: no se conserva ningún componente.

---

## 2. Sujeto

Marco Pianaroli. Argentino-italiano, **ciudadano UE** (sin necesidad de visa ni patrocinio en
Alemania). Vive en Berlín. Inglés C1, alemán B1, español nativo.

**Inventario — lo que sólo este candidato tiene:**

1. Es **la totalidad del departamento de IT** de una empresa de 25 personas en Berlín.
2. **Cuatro años** en Okapi GmbH (webmaster + soporte + administración de sistemas).
3. Antes: **soporte de nivel 1** en Compañía Urbana, Buenos Aires (ServiceDesk Plus, Active Directory).
4. Un **homelab que corre sobre una notebook vieja** con Ubuntu Server.
5. **Pi-hole** — entiende DNS a nivel de resolución, no de "reiniciá el router".
6. **PocketBase** alojando las bases de datos de todos sus proyectos.
7. **Grafana** monitoreando el servidor *y* su computadora de escritorio.
8. **Cloudflare Tunnels** en vez de port forwarding: cero puertos abiertos.
9. Construye sus propias herramientas (Job-Hub) en lugar de esperar a que existan.
10. Ciudadanía italiana → contratarlo en Alemania no requiere trámite migratorio.
11. Sabe front-end (Vue, TypeScript) — relevante porque automatiza tickets en vez de abrirlos.

**Frase de la idea (obligatoria antes de construir):**

> En esta página, **la libreta de servicio de una persona que mantiene viva una infraestructura
> con una notebook que nadie más quería** se convierte en **un instrumento de precisión: una
> columna angosta, demostraciones chicas y exactas, y silencio alrededor.**

**Test del competidor:** poner a otro candidato a IT Support de Berlín en la frase y deja de
funcionar — la notebook vieja con Pi-hole, PocketBase, Grafana y Cloudflare Tunnels es de Marco.

**La cosa viva:** un **simulador de bloqueo de Pi-hole**. El visitante escribe un dominio y ve si
el Pi-hole de Marco lo bloquearía y **por qué** (qué regex de qué lista lo matchea). Corre 100 % en
cliente. DNS es el ticket nº 1 de cualquier helpdesk: prueba conocimiento en cinco segundos sin un
párrafo.

---

## 3. Dirección de arte: *The quiet instrument*

Sorteada por `design-taste-frontend` de una librería destilada de 247 sitios reales, y elegida por
criterio entre tres: `type-only-statement` (sólo tipografía gigante), `contact-sheet` (decenas de
miniaturas — imposible: no hay fotos) y `quiet-instrument`. Elegida porque **saca la idea del
sujeto**: un buen sysadmin es silencioso y exacto; la infraestructura que funciona no grita. Todo el
resto de los portfolios de dev gritan.

**Principios**

- Una columna de 440–560 px, borde izquierdo al 22 % del ancho. Todo comparte ese eje.
- Nada ocupa el ancho completo hasta la banda de contacto.
- Separación entre secciones **sólo por espacio** (96–140 px). Cero líneas, cero cards, cero sombras.
- Un solo gesto valiente: la banda de contacto se vuelve un **campo amarillo completo**.

### 3.1 Tipografía — Jost

Una familia, dos pesos (400 / 700). Geométrica, circular, de cartel de los años 20: se lee como
"ingeniero con criterio", no como "hacker".

**Cero monospace en toda la página.** Es la decisión más importante del proyecto: la terminal verde
fósforo es el cliché nº 1 del portfolio IT y la skill lo prohíbe por default. Los datos tabulares
(tabla de servicios, log de queries) usan `font-variant-numeric: tabular-nums` sobre Jost.

Auto-hospedada vía `@fontsource/jost` (**no** Google Fonts CDN): coherente con el mensaje del sitio
y elimina una dependencia externa.

```css
--step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);    /* 13–14px */
--step-body:  clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);      /* 17–19px */
--step-lead:  clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);        /* 20–26px */
--step-head:  clamp(2rem, 1.3rem + 3.2vw, 4rem);               /* 32–64px */
--step-h1:    clamp(2.5rem, 1.4rem + 4.4vw, 4.25rem);          /* 40–68px */
```

**Desviación documentada:** la carta pide 5–7 vw para el headline y la §11 advierte que un headline
demasiado chico se lee inacabado, mientras la referencia `Rows` usa 27 px. Se resuelve en 4,4 vw
(40–68 px): decisivo contra el cuerpo (salto > 3×, requisito de la pasada 6), sin romper el susurro.
Cuerpo de texto nunca por debajo de 17 px; gris sólo para notas secundarias.

### 3.2 Paleta — verde botella / amarillo, invertida a oscuro

La carta sortea fondo off-white, tinta verde botella y acento amarillo. El pedido de modo oscuro por
default es una **restricción de marca declarada**, así que se **invierten las proporciones, no los
colores**:

```css
--bg:            #0B1A13   /* verde botella casi negro — no es "negro puro + acento ácido" */
--surface:       #14261C
--surface-2:     #1B2F23
--ink:           #F2F1EA   /* off-white cálido, nunca #fff */
--muted:         #8FA396
--accent:        #F6E016
--accent-ink:    #0B1A13
--field-contact: #F6E016   /* la banda final, campo completo */
```

Contrastes calculados: `--ink` sobre `--bg` ≈ 15:1 · `--muted` sobre `--bg` ≈ 6,7:1 ·
`--accent` sobre `--bg` ≈ 13,3:1 · `--accent-ink` sobre `--accent` ≈ 14:1. Todo pasa AA y AAA.

**Regla del acento:** el amarillo aparece **una sola vez por pantalla**. En la banda de contacto se
convierte en campo completo. Un acento en diez lugares no significa nada (pasada 7).

### 3.3 Geometría global

- Márgenes exteriores iguales a todo ancho. Asimetría **dentro** de la grilla, nunca en el marco.
- Un solo radio de esquina en toda la página: **0** (esquinas rectas), con una sola excepción: el
  retrato de 44 px de la carta, que va redondo.
- Un solo shape de botón en toda la página.
- Ninguna sección con texto en una mitad y la otra mitad vacía.
- Ningún tramo de página más alto que media pantalla sin contenido.

---

## 4. Secciones, en orden

Cada sección existe porque tiene un claim y su prueba. Lo que no tiene prueba, no entra.

| # | Sección | Claim | Prueba |
|---|---------|-------|--------|
| 1 | Hero | "Una sola persona sostiene toda la IT." | h1 + una frase con números reales + email + CV |
| 2 | Carta | Cómo trabajo y por qué acá. | Retrato real, 4 párrafos, ciudadanía UE |
| 3 | Libreta | Dónde estuve y qué construí. | 5 filas de trabajo + 4 de proyectos |
| 4 | Homelab | Corro infraestructura real, elegida por mí, sin presupuesto. | El simulador de Pi-hole |
| 5 | Herramientas | El cinturón real, agrupado como lo lee un hiring manager. | ~24 filas, cada tool con *dónde la usé* |
| 6 | Contacto | Banda amarilla. | Email, LinkedIn, ciudad, tiempo de respuesta |
| 7 | Footer | Una sola línea. | — |

**Explícitamente fuera:** testimonios (no existen), barras de porcentaje de skills, contador de años
en tipografía gigante, grid de logos de tecnología, certificaciones inventadas.

### 4.1 Hero

```
                    (22 % desde la izquierda, borde superior a ~30 vh)

                    I'M THE IT
                    DEPARTMENT.                    ← h1, Jost 700, mayúsculas, 40–68px

                    Marco Pianaroli. Four years running all the IT at a
                    25-person company in Berlin — the laptops, the network,
                    the tickets. And a homelab that runs on an old laptop     ← 17–19px, --ink
                    nobody else wanted.

                    [ Email me ]   Download CV (PDF)                          ← un botón, un link
```

Primera pantalla compuesta mayormente de vacío. El vacío es una decisión: la columna arranca al
30 % de la altura del viewport y el resto respira.

### 4.2 Carta

Columna centrada de 520 px, 160 px de aire arriba y abajo. Retrato real de 44 px redondo arriba a la
izquierda. Sin heading. Cuatro o cinco párrafos de 16–17 px, interlínea 1.55, en primera persona.
Una sola frase lleva fondo de marcador plano (amarillo al 100 %, tinta verde). Firma con el nombre a
22 px en itálica y el rol a 14 px en `--muted`.

Texto (a confirmar por Marco antes de publicar):

> I came into IT through the ticket queue, not a degree: first-level support in Buenos Aires in
> 2019, replacing hard drives and resetting passwords for people who had a deadline that afternoon.
>
> Since 2022 I've been the entire IT function at Okapi in Berlin — twenty-five people, something
> like twenty-five tickets a week, every laptop in the building, and the webmaster work on top of
> it. When something network-adjacent breaks, I'm the call.
>
> Nobody asked me to build a homelab. I built it because I'd rather understand what I'm supporting
> than relay it to a vendor. It runs on an old laptop with Ubuntu Server: Pi-hole for DNS,
> PocketBase for every project database, Grafana watching the server and my desktop, Cloudflare
> Tunnels instead of a single open port.
>
> I'm an Italian citizen. Hiring me in Germany needs no sponsorship and no paperwork.
>
> *Marco Pianaroli* — IT Support & Systems Admin, Berlin

**Slot de certificación:** una frase, hoy literalmente verdadera —
*"Next step is a first certification: Network+ or Security+, I'm deciding which between them."*
Se reemplaza por *"studying for Network+"* en cuanto Marco esté efectivamente anotado.

### 4.3 Libreta

Columna de 560 px con borde izquierdo al 22 %. Heading de dos o tres palabras a 24–28 px en 500.
Filas de 44 px: nombre a 16 px en `--ink` a la izquierda, tipo de trabajo a 14 px en `--muted`
empezando al 55 % de la columna, año alineado a la derecha con cifras tabulares. **Nada dibujado
entre filas**: las tres posiciones fijas hacen las columnas. Dos grupos separados por 28 px de aire
extra, cada uno encabezado por una palabra llana en `--muted`.

Al hover o focus: la fila queda en `--ink`, las demás bajan a `--muted`, y en el espacio a la derecha
de la columna aparece un panel de 300 px alineado a la fila, a 64 px del borde derecho de la columna,
con fade de 150 ms, que dice **qué fue ese trabajo concretamente**.

**Desviación documentada:** la carta pide ahí una foto 4:3 del proyecto. No existen fotografías de
los lugares de trabajo pasados, y fabricar un screenshot de una cola de tickets que nunca existió
sería deshonesto. El panel muestra hechos verificables (4 líneas + herramientas), no una imagen.

Grupo **Work**

| Nombre | Rol | Año |
|---|---|---|
| Okapi GmbH | IT Support & SysAdmin | 2022–now |
| Okapi GmbH | Warehouse | 2021–2022 |
| Compañía Urbana | IT Support L1 | 2019–2020 |
| Cencosud | Admin / help desk | 2016–2018 |
| TEDxSanIsidro | Volunteer, event ops | 2015–2019 |

Grupo **Built**

| Nombre | Rol | Año |
|---|---|---|
| Homelab | Ubuntu · Docker · Pi-hole · PocketBase · Grafana · Cloudflare Tunnel | ongoing |
| Job-Hub | search automation | *placeholder* |
| REPS | training tracker | *placeholder* |
| Faceless video pipeline | scripts + AI | *placeholder* |

En móvil: columna a ancho completo con 20 px de margen, filas de 52 px (nombre + año en la primera
línea, tipo de trabajo en una segunda a 13 px). No hay hover: se muestra el panel de los tres
primeros ítems inline, a ancho de columna.

### 4.4 Homelab — el showcase

Heading: *"It's not a lab if nothing depends on it."* Panel de 720 px de ancho por ~640 px de alto,
esquinas rectas, en `--surface`, con 15 vh de aire arriba y abajo. Dividido 62/38 en dos áreas planas
que difieren en un tono (`--surface-2`).

**Izquierda (62 %) — el instrumento.** Un campo de consulta y el veredicto:

```
  domain    ▸ cdn.doubleclick.net

  verdict   BLOCKED                    ← campo amarillo, tinta verde
  matched   (\.|^)doubleclick\.net$    ← en --muted, cifras tabulares
  list      StevenBlack · Ads & Tracking
  action    sinkhole → 0.0.0.0
```

**Derecha (38 %) — los controles.** Seis filas de 44 px, cada una con un nombre a 14 px y un toggle,
selector o valor a la derecha. Cambiar cualquiera cambia el veredicto de inmediato:

| Control | Tipo | Efecto |
|---|---|---|
| Ads & Tracking | toggle | activa/desactiva esa lista |
| Malware & Phishing | toggle | idem |
| Social & Telemetry | toggle | idem |
| Upstream resolver | selector | Cloudflare / Quad9 / sin upstream |
| Query type | selector | A / AAAA / CNAME |
| Regex matching | toggle | exacto vs. regex |

Debajo del panel, una línea de instrucción. **Fallback sin JS:** una tabla estática con 6 dominios
de ejemplo y su veredicto, siempre visible, que el island reemplaza.

Antes del panel, un fragmento de interfaz real: el **panel de Grafana** con uptime del servidor,
CPU, RAM y disco, y la tabla de `docker ps` con los servicios reales (imagen, puerto, política de
reinicio, edad). Datos reales provistos por Marco.

### 4.5 Herramientas

Columna de 520 px. Filas de 34–38 px, sin caja y nada dibujado entre ellas, con dos extremos: a la
izquierda la herramienta a 15–16 px en `--ink`, al extremo derecho de la columna **dónde la usé** a
13 px en `--muted`. Grupos separados por 40 px, cada uno encabezado por una palabra llana en
`--muted`. Sin iconos, sin logos, sin puntos de color.

| Grupo | Filas |
|---|---|
| Systems | Windows · Linux (Ubuntu, Debian) · macOS · Active Directory · hardware repair and build |
| Network | DNS and DHCP · Pi-hole · Cloudflare Tunnel · LAN diagnostics |
| Containers | Docker · Docker Compose · volumes and restart policies · Ubuntu Server |
| Support | ServiceDesk Plus · TeamViewer · AnyDesk · remote triage · user onboarding |
| Build | Bash · Python · TypeScript · Vue · Git · Grafana metrics |

> **A confirmar:** VLANs sólo si Marco efectivamente las tocó. Si no, se elimina.

### 4.6 Contacto — la banda amarilla

Campo completo `--field-contact`, tinta `--accent-ink`, sobre grilla de 12 columnas. 160 px de aire
arriba, 120 px abajo. Sin formulario.

- Columnas 1–5: una frase de 12–18 palabras a **36 px máximo, tres líneas**, en vez del display de
  44 px que pide la carta (la carta misma advierte que los jurados leen una frase grande como un
  headline largo).
  > *Looking for an IT support or systems admin role in Berlin, or remote in the EU.*
- Columnas 8–9: retrato de 150 px cuadrado, esquinas rectas. Es lo único que no es amarillo.
- Columnas 10–12: pregunta corta a 18 px en 500, y 20 px debajo dos links subrayados a 18 px
  (`me@marcopianaroli.com`, LinkedIn), y una línea a 14 px con cuidad y tiempo de respuesta
  (*Berlin · I answer within a day*).
- Columnas 6–7 vacías, deliberadamente.

### 4.7 Footer

Sin bloque de footer. Tras 30 svh de vacío, una línea de base a 30 px del borde inferior, grilla
`1fr auto 1fr`: a la izquierda qué es esto en tres o cuatro palabras, centrado dos o tres links con
24 px entre ellos, a la derecha el año. Sin logo, sin línea arriba, sin cambio de fondo.

---

## 5. Imágenes

Piso de la skill: **4 imágenes reales mínimo**, idealmente 6–12, y ninguna pantalla falsa hecha de
barras grises. Un fragmento de interfaz construido en HTML cuenta como imagen real para software.

Plan (6 piezas):

1. Retrato de Marco (existe: `src/assets/marcoprofile.jpg`).
2. Panel de Grafana — fragmento HTML con datos reales.
3. Tabla de `docker ps` — fragmento HTML con los servicios reales.
4. Log de queries de Pi-hole — parte del instrumento.
5. Reglas de ingress de Cloudflare Tunnel — fragmento HTML.
6. Lista de colecciones de PocketBase — fragmento HTML.

**Vía de mejora (pedido a Marco, 10 minutos de trabajo):** dos o tres fotos con el teléfono — la
notebook, la pantalla con Grafana abierto, el `docker ps` en la terminal. Una foto real de la
notebook reemplaza el mejor fragmento dibujado que yo pueda hacer. Una captura real de Grafana
resuelve además la "imagen en movimiento" de forma honesta.

**Cero fotos de stock genérico.** Si algo no existe, se dibuja en código o se dice.

---

## 6. Movimiento

La dirección es *stillness*, pero la skill exige ≥ 8 elementos que realmente se muevan (falla por
debajo de eso). Se resuelve poniendo el movimiento donde **responde a una acción**, nunca como
decoración de entrada:

1. Firma: el veredicto del simulador cambiando de estado (BLOCKED / ALLOWED).
2. Hover/focus de fila de la libreta → el panel lateral aparece (150 ms, opacidad).
3. Feedback de press del botón (140 ms).
4. Cambio de color de links (180 ms).
5. Focus rings sin delay.
6. Toggles del instrumento → veredicto + regex que matchea.
7. La sparkline de Grafana dibujándose una vez al entrar el panel.
8. Entrada del heading de sección: 16 px de subida, opacidad, 60–90 ms de stagger **sólo en el
   heading y la primera línea**, no un fade-up por bloque.

Reglas duras: sólo `transform` y `opacity`. Todo con fallback `prefers-reduced-motion` que conserva
el contenido y elimina el desplazamiento. Nunca contenido que queda oculto si falla el JS.
**Prohibido** el fade-and-slide-up genérico en cada sección y las transiciones en cada card (lo que
tiene el sitio hoy, 9 veces).

---

## 7. Arquitectura

Migración a **Astro**. Razones: 0 KB de JS por defecto (la página es HTML estático, sin pantalla
vacía al cargar), el island del simulador son ~3 KB de TypeScript vanilla, y un candidato a SysAdmin
con un SPA de 400 KB cuenta en su contra.

```
/
├── astro.config.mjs
├── package.json
├── public/
│   ├── cv/marco-pianaroli-cv.pdf
│   ├── favicon.svg
│   └── og.png
└── src/
    ├── layouts/Base.astro          ← <head>, fuentes, tokens
    ├── pages/index.astro
    ├── components/
    │   ├── Hero.astro
    │   ├── Letter.astro
    │   ├── Ledger.astro            ← genérico: recibe grupos de filas
    │   ├── Homelab.astro
    │   ├── Toolbelt.astro
    │   ├── ContactBand.astro
    │   ├── Footer.astro
    │   └── fragments/              ← los fragmentos de interfaz en HTML
    │       ├── GrafanaPanel.astro
    │       ├── DockerTable.astro
    │       ├── CloudflareIngress.astro
    │       └── PocketBaseList.astro
    ├── islands/DnsSimulator.ts     ← el único JS que se envía
    ├── content/
    │   ├── jobs.ts                 ← filas de la libreta
    │   ├── projects.ts
    │   ├── tools.ts
    │   ├── homelab.ts              ← servicios reales de Docker
    │   └── piHoleRules.ts          ← regex reales exportadas del Pi-hole
    └── styles/
        ├── tokens.css
        ├── base.css
        └── sections.css
```

**Se elimina:** `src/components/CardComponent.vue`, `CardComponent2.vue`, `PaletteTester.vue`,
`NavBar.vue`, `PillButton.vue`, `sections/*`, `composable/useStore.ts`, `consts/Projects.ts`,
`consts/InfoTexts.ts`, `consts/colors.ts`, `views/resume.vue`, `routes.ts`, `App.vue`, `main.ts`,
`types.d.ts`, `tailwind.config.js`, `postcss.config.js`, `.eslintrc.cjs`, los 5 PNG de proyectos y
los SVG de Vue.

**Se conserva:** `src/assets/marcoprofile.jpg`, `src/assets/resume.pdf` (hasta que haya PDF nuevo),
`vercel.json`, `plugins/analytics.client.ts` (portado a script inline de Astro o descartado).

Ruta `/resume` eliminada. El CV pasa a ser un botón *Download CV (PDF)* en el hero.

---

## 8. Criterios de aceptación

Nada de esto es opinión: se mide.

- [ ] `lint.mjs` sobre `src/`: **0 FAIL**. Todo WARN justificable en una frase a un diseñador.
- [ ] `inspect.mjs` sobre el **build de producción** (`astro build && astro preview`), a 1440, 768 y
      390 px: **0 FAIL**. Se inspecciona lo que se sirve, no el dev server.
- [ ] Screenshots de los tres viewports abiertos y criticados con las 14 pasadas de `critique.md`.
      Máximo 3 rondas, arreglando los 3 problemas más graves entre rondas.
- [ ] Pasada 1: en un segundo se ve **una** cosa; en cinco se sabe quién es, qué hace y qué hacer.
- [ ] Pasada 3: tapando el nombre, la página **no** funciona para otro candidato.
- [ ] Pasada 4: máximo 3 posiciones X distintas en todo el eje de texto.
- [ ] Pasada 9: dos secciones adyacentes nunca comparten layout.
- [ ] Pasada 7: el amarillo aparece una vez por pantalla.
- [ ] Pasada 8: ≥ 4 imágenes reales, una de ellas en movimiento, ningún rectángulo gris.
- [ ] Contraste AA mínimo en todo texto, medido con el inspector.
- [ ] Un solo `<h1>`, heading con nombre propio en cada una de las 6 secciones.
- [ ] Navegación completa por teclado en orden de lectura, con focus visible en todos los controles,
      incluido el simulador.
- [ ] `prefers-reduced-motion`: todo el contenido presente, cero desplazamiento.
- [ ] El simulador funciona con el pulgar a 390 px, tiene nombre accesible y fallback estático
      visible sin JS.
- [ ] Lighthouse móvil: Performance ≥ 95, Accessibility 100.
- [ ] Cero fuentes o requests a dominios de terceros (fuentes auto-hospedadas).
- [ ] `height: 100svh` en lugar de `100vh` en todos lados.

---

## 9. Pendientes

El checklist vivo está en [`docs/PENDING.md`](../PENDING.md), agrupado por bloqueante / alto impacto /
no bloqueante, con el archivo exacto y el valor actual de cada dato a corregir.

Resumen de lo bloqueante: el PDF del CV todavía dice "Frontend Developer"; falta confirmar el
deploy y el dominio (incluidos los subdominios de los proyectos); y los números del homelab que
puse yo (uptime, registros de PocketBase, años de los contenedores) tienen que ser confirmados.

## 10. Fuera de alcance

- Blog, CMS o cualquier contenido dinámico.
- Versión en alemán (sólo inglés por ahora).
- Formulario de contacto (el email es el canal; un formulario agrega back-end y spam).
- Modo claro / theme switcher.
- Rediseño del PDF del CV (se hace después, por separado).

---

## 11. Registro de desviaciones

La skill exige documentar cada slot redibujado y por qué. Orden de prevalencia aplicado:
reglas de la casa → dirección → sistema de tipo y paleta → blueprint del hero → blueprints de sección.

| Slot | Desviación | Motivo |
|---|---|---|
| **paleta** | Proporciones invertidas: el suelo pasa a verde botella casi negro y la tinta a off-white. Colores y proporciones conservados. | El modo oscuro por default es una restricción de marca declarada por Marco. |
| **hero** | Redibujado: se usa la composición del §2 de la carta (headline a 5vw + frase de apoyo + un botón + un link) en lugar de "Two doors on a dark wall". El lateral derecho lo cierra el fragmento de Grafana. | El blueprint pedía dos retratos 3:4 para una elección entre dos mitades. No existen esas fotos, y la primera pantalla tiene que decir quién y qué hace en un `h1`, no ofrecer una bifurcación. |
| **hero** | `--step-h1` a 5vw (72 px a 1440) en vez del punto medio 5–7vw. | Medido: 2 líneas a 1440, 1 línea a 768, 2 líneas a 390. El mínimo de la regla `focal-point` es 4,5vw. |
| **work (libreta)** | La previsualización fotográfica al hover se reemplaza por un `<details>` nativo cuyo detalle se abre en la mitad derecha. | No existen fotografías de los lugares de trabajo pasados. Fabricar un screenshot de una cola de tickets que nunca existió sería deshonesto. Además elimina todo el JS de esa sección. |
| **work + list** | Filas a lo ancho del marco en vez de una columna de 520 px arrancando al 22%. | Medido: con la columna angosta, la libreta dejaba 76% del ancho vacío y la lista de herramientas 86%, lo que dispara `lopsided` (FAIL). El regla del marco tiene prioridad sobre el ancho de columna del blueprint. Se conservan las lecturas de dos extremos y de tres posiciones fijas. |
| **about (carta)** | Anclada al borde izquierdo en vez de centrada, más una columna de datos a la derecha (dónde vive, idiomas, derecho a trabajar). | Medido: centrada dejaba 820 px vacíos (`lopsided`, FAIL). La columna de datos además es lo primero que escanea un reclutador en Berlín. |
| **contact** | La frase se limita a 36 px / 3 líneas, y a 23,4 px en móvil, en vez de los 44 px del display. | Medido: a 44 px un jurado lee una frase de tres líneas como un headline largo (`headline-lines`, FAIL a 390 px). |
| **motion** | La dirección es *stillness* y prohíbe animaciones de entrada; las reglas de la casa exigen ≥ 8 elementos en movimiento. | Resuelto abajo: secuencia de carga del hero, entrada por heading de sección, apertura del `<details>`, feedback de controles, cambio de veredicto, dibujo de la sparkline. `prefers-reduced-motion` conserva todo el contenido y elimina el desplazamiento. |
| **tokens** | `--ink` de `#f2f1ea` a `#edede8`. | El off-white cálido caía en la familia "cream" del detector de paleta (`palette-cream`, WARN). |
| **imágenes** | 4 fragmentos de interfaz construidos en HTML + 1 fotografía, en vez de fotografías del mundo del sujeto. | El sujeto es software: la skill indica que para software su propia interfaz cuenta como imagen real. La "imagen en movimiento" es la sparkline de Grafana dibujándose. Quedan 2 WARN (`no-real-pictures`, `no-footage`) pendientes de fotos propias de Marco. |

## 12. Resultado medido (2026-11-01)

```
lint.mjs  src/                          0 FAIL, 0 WARN
inspect.mjs  build de producción        0 FAIL, 2 WARN  @1440 / 768 / 390
  tipografías   Jost 100% (auto-hospedada)
  headline      72px (5vw), 2 líneas a 1440, 2 a 390
  tamaños       14 / 19 / 26 / 36 / 48 / 72 px
  color         suelo #0b1a13 · campo #f6e016 · botón #f6e016
  peso          7,5 KB HTML + 4,4 KB CSS (gzip), 0 KB de runtime de framework
```

Los dos WARN restantes son el piso de imágenes (`no-real-pictures`, `no-footage`) y se
resuelven con material propio de Marco, no con stock.
