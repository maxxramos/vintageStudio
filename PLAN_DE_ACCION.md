# PLAN DE ACCIÓN — Vintage Studio Web Demo

---

## Prompt de contexto para Copilot

Eres un desarrollador web experto. Debes construir una **web demo minimalista, prolija y 100% responsive** para **Vintage Studio**, una barbería tradicional con servicio de micropigmentación capilar ubicada en Montevideo, Uruguay.

**Stack:** HTML5 + CSS3 + JavaScript vanilla (sin frameworks).

**Referencia de estructura y estilo:** `EJEMPLOS/lumierCosmetologia-main/` — seguir su arquitectura de archivos (`index.html`, `styles.css`, `script.js`), sus patrones responsive, animaciones scroll-reveal, lógica de carrusel y modales. **No modificar nada dentro de `/EJEMPLOS/`.**

**Colores:**
- Principal: `#000000`
- Secundario: `#FFFECD` (crema/amarillo suave)
- Blanco: `#ffffff`

**Tipografías (Google Fonts):**
- Serif elegante para títulos (ej. Cormorant Garamond o similar)
- Sans-serif para cuerpo (ej. Inter)

**Assets disponibles:**
- `img/logo.png` — logo de la marca
- `img/imagenInicio.png` — imagen hero

**Objetivo:** web de una sola página con las secciones: NavBar, Inicio, Servicios, Nosotros (con carrusel de reseñas), Contacto y Footer. Incluye botón WPP flotante (abajo a la izquierda).

---

## Fases de desarrollo

### FASE 1 — Estructura base y NavBar
**Archivo:** `index.html` (esqueleto completo) + `styles.css` (variables, reset, utilitarios)

- Crear `index.html` con estructura HTML semántica completa (todas las secciones en el orden correcto, con sus `id`).
- Definir variables CSS: colores (`--primary: #000`, `--secondary: #FFFECD`, `--white`, etc.), tipografías, sombras, radios y `--nav-height`.
- Implementar **NavBar fija**:
  - Logo (`img/logo.png`) a la izquierda.
  - Links de secciones a la derecha: Inicio, Servicios, Nosotros, Contacto.
  - Hamburger (3 líneas) visible solo en mobile (`≤ 660px`): toggle desplegable vertical responsive.
  - Efecto `box-shadow` al hacer scroll.
  - Link activo resaltado según sección visible.

---

### FASE 2 — Sección Inicio (Hero)
**Sección:** `#inicio`

- Layout de 2 columnas: texto a la izquierda, imagen a la derecha.
- **Título:** `Vintage Studio`
- **Slogan:** *"Un caballero siempre: viste bien, cuida su imagen y lleva un buen peinado."*
- Imagen: `img/imagenInicio.png` con animación `float` suave.
- En mobile: columna única, texto centrado arriba, imagen abajo.

---

### FASE 3 — Sección Servicios + Modal
**Sección:** `#servicios`

6 servicios en grid de cards (icono + título + descripción corta + "Ver más →"):

| Servicio | Icono sugerido (Font Awesome) |
|---|---|
| Barbería | `fa-scissors` |
| Cortes Clásicos | `fa-cut` |
| Fade | `fa-layer-group` |
| Corte y Líneas | `fa-pen-nib` |
| Corte y Barba | `fa-user` |
| Barba y Micropigmentación Capilar | `fa-droplet` |

- Al hacer click en una card → abre **modal popup** con información extendida (generada por Copilot, coherente con barbería).
- Modal: overlay con blur, animación de entrada, botón cerrar (X), CTA "Reservar turno" que scrollea a `#contacto`.
- En mobile: modal se despliega desde abajo (bottom sheet).
- Grid responsive: 3 col → 2 col → 1 col.

---

### FASE 4 — Sección Nosotros + Carrusel de Reseñas
**Sección:** `#nosotros`

**Bloque "Sobre nosotros":**
- Texto biográfico generado (coherente con 5 años de trayectoria, barbería tradicional, calidad y reputación).

**Badge Google Rating:**
- Ícono Google + `★★★★★` + `5.0` + `+57 opiniones en Google`

**Carrusel de reseñas** (una reseña a la vez, deslizamiento con botones prev/next y dots):
- Avatar circular con inicial del nombre (letra grande, fondo degradado negro).
- Nombre del reviewer.
- 5 estrellas doradas.
- Texto de la reseña en cursiva.
- Texto dinámico: el tamaño del contenedor debe ajustarse al largo de la reseña sin superponer elementos.

**Reseñas a incluir (7):**
1. **Fabricio Giudici** — *"Excelente peluquería. Cortes a niños y adultos. Tremenda atención. Recomiendo."*
2. **Jose Martin** — *"Excelente atención, muy recomendable!"*
3. **Eduardo** — *"Muy amable, muy prolijo todo"*
4. **Washington Rosa** — *"Muy buena atención."*
5. **Alvaro Silva** — *(sin texto — mostrar sólo nombre + estrellas)*
6. **Martin Duque Estevez** — *"Muy buen servicio a buen precio, cordialidad en la atención. Muy recomendable"*
7. **VALERIA LOPEZ** — *"Excelente servicio. Muy buen ambiente. Súper recomendable."*
8. **Eduardo Beltrán** — *"Profesionales."*

---

### FASE 5 — Sección Contacto
**Sección:** `#contacto`

**Cards de contacto:**
- Llamadas: `098 568 354` → `tel:598098568354`
- WhatsApp: `098 568 354` → `https://wa.me/598098568354`
- Instagram: `@vintagestudio1643` → `https://www.instagram.com/vintagestudio1643/`
- Dirección: `Dr. Domingo Aramburu 1643, 11800 Montevideo`

**Barra de horarios:**
| Día | Horario |
|---|---|
| Lunes a Viernes | 11:00 — 19:00 |
| Sábado | 10:00 — 16:00 |
| Domingo | Cerrado |

**Mapa embed (Google Maps iframe):**
- Usar el link de ubicación provisto para generar el embed de Vintage Studio.
- URL de referencia: `https://www.google.com/maps/place/VINTAGE+STUDIO+...`

---

### FASE 6 — Footer + WPP FAB
**Footer:**
- Layout horizontal (flex, space-between):
  - **Izquierda:** Logo + nombre `Vintage Studio` + slogan
  - **Derecha:** Lista de links a secciones (Inicio, Servicios, Nosotros, Contacto)
- Fondo `#000000`, textos en blanco/gris claro.
- En mobile: columna única centrada.

**WhatsApp FAB (botón flotante):**
- Posición: fijo **abajo a la izquierda** (`bottom: 24px; left: 24px`)
- Ícono WPP verde, animación `pulse`
- Link: `https://wa.me/598098568354`

---

### FASE 7 — JavaScript (script.js)
Implementar en `script.js`:

1. **Hamburger menu** — toggle open/close, cierre al hacer click en un link.
2. **Navbar scroll** — añadir clase `scrolled` al pasar 20px de scroll.
3. **Active nav link** — resaltar link según sección visible (IntersectionObserver o scroll listener).
4. **Scroll reveal** — IntersectionObserver para animar `.reveal` → `.visible`.
5. **Service modals** — objeto `serviceData` con datos de los 6 servicios; apertura/cierre del modal; cierre con Escape y click en overlay.
6. **Reviews carousel** — navegación prev/next con dots; una reseña a la vez; auto-ajuste de altura del contenedor.

---

### FASE 8 — Revisión responsive y QA final

Verificar en todos los breakpoints:
- `≤ 960px`: hero en columna, about en columna.
- `≤ 660px`: hamburger activo, grid servicios 2 col → 1 col, modal bottom-sheet, carrusel legible, footer en columna, texto de reseñas sin superposición, padding/margin de secciones correctos.
- WPP FAB visible y funcional en mobile.
- Mapa iframe responsivo.
- Imágenes sin desbordamiento.
- Animaciones suaves y sin parpadeos.

---

## Archivos a generar

```
vintageStudio/
├── index.html
├── styles.css
└── script.js
```

> Los archivos deben crearse en la raíz de `vintageStudio/`, siguiendo exactamente la estructura del ejemplo `lumierCosmetologia-main`.
