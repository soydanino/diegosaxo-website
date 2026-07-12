<div align="center">
  <img src="./public/DH_hero_desktop_V.png" alt="Diego Herrera — The Soul of the Saxophone" width="100%" style="max-height:480px; object-fit:cover; object-position:center 30%;" />
</div>

<br />

<div align="center">

# Diego Herrera — Portfolio Web

Sitio web portfolio para el saxofonista Diego Herrera. Pagina estatica generada con Astro (SSG) con componentes React solo donde hay interactividad real (islands architecture).

</div>

---

## Tecnologias

| Herramienta | Version | Rol |
|---|---|---|
| Astro | 5 | Framework SSG + islands architecture |
| React | 19 | Islands interactivos (Navbar, Hero) |
| Tailwind CSS | 3 | Estilos utility-first |
| GSAP | 3 | Animaciones de particulas en Hero |
| Oxlint | 1 | Linter |

## Estructura del proyecto

```
diegosaxo-website/
├── public/
│   ├── DH_hero_desktop_V.png         # Imagen principal del hero
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Island React (client:load) — menu movil
│   │   ├── Hero.jsx                  # Island React (client:load) — particulas GSAP
│   │   ├── Music.astro               # HTML estatico — cards de albums
│   │   ├── Tours.astro               # HTML estatico — fechas de conciertos
│   │   └── Footer.astro              # HTML estatico — pie de pagina
│   ├── layouts/
│   │   └── Layout.astro              # Shell HTML + IntersectionObserver global
│   ├── pages/
│   │   └── index.astro               # Unica pagina — orquesta todos los componentes
│   └── styles/
│       └── global.css                # Tailwind directives + clases de animacion
├── astro.config.mjs                  # Configuracion de Astro e integraciones
├── tailwind.config.js                # Tokens de diseno (colores, tipografia, espaciado)
└── package.json
```

## Empezar

### Requisitos

- Node.js >= 18

### Instalacion y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo con HMR
npm run dev

# Build de produccion (genera HTML estatico en /dist)
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## Islands Architecture

Solo dos componentes reciben JavaScript en el cliente:

| Componente | Directiva | Motivo |
|---|---|---|
| `Navbar.jsx` | `client:load` | Estado del menu hamburguesa en movil |
| `Hero.jsx` | `client:load` | Animaciones GSAP de particulas musicales |

El resto (`Music`, `Tours`, `Footer`) se genera como HTML puro en tiempo de build. Sin hidratacion, sin JS en esas secciones.

## Diseño

El sistema de diseno esta definido en `tailwind.config.js` con tokens propios:

- **Colores** — Paleta oscura (`#131313` base) con acento dorado (`#f2ca50` primario) y naranja (`#fd8b00` secundario)
- **Tipografia** — Playfair Display (titulos) + Manrope (cuerpo), con escala propia (`headline-lg`, `display-lg`, etc.)
- **Espaciado** — Margenes y gaps semanticos (`margin-desktop`, `section-gap-desktop`, `gutter`)

## Secciones

<table>
  <tr>
    <th>Seccion</th>
    <th>Tipo</th>
    <th>Descripcion</th>
  </tr>
  <tr>
    <td><strong>Hero</strong></td>
    <td>Island React</td>
    <td>Imagen a pantalla completa con notas musicales flotantes animadas por GSAP</td>
  </tr>
  <tr>
    <td><strong>Music</strong></td>
    <td>HTML estatico</td>
    <td>Grid de tres columnas con portadas de albums y placeholder de Spotify</td>
  </tr>
  <tr>
    <td><strong>Tours</strong></td>
    <td>HTML estatico</td>
    <td>Lista de proximas fechas con venue, ciudad y boton de entradas</td>
  </tr>
  <tr>
    <td><strong>Footer</strong></td>
    <td>HTML estatico</td>
    <td>Logo, links de navegacion, iconos sociales y copyright</td>
  </tr>
</table>

---

<div align="center">
  <sub>Desarrollado por <a href="https://github.com/soydanino">soydanino</a></sub>
  <sub>- <a href="https://github.com/marco2712">marco2712</a></sub>
</div>
