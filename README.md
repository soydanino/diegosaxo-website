<div align="center">
  <img src="./src/assets/DH_hero_desktop_V.png" alt="Diego Herrera — The Soul of the Saxophone" width="100%" style="max-height:480px; object-fit:cover; object-position:center 30%;" />
</div>

<br />

<div align="center">

# Diego Herrera — Portfolio Web

Sitio web portfolio para el saxofonista Diego Herrera. Página de una sola hoja (SPA) con animaciones de entrada, partículas musicales y diseño oscuro con paleta dorada.

</div>

---

## Tecnologias

| Herramienta | Version | Rol |
|---|---|---|
| React | 19 | UI / componentes |
| Vite | 8 | Bundler y dev server |
| Tailwind CSS | 3 | Estilos utility-first |
| GSAP | 3 | Animaciones de partículas |
| Oxlint | 1 | Linter |

## Estructura del proyecto

```
diegosaxo-website/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── DH_hero_desktop_V.png     # Imagen principal del hero
│   ├── components/
│   │   ├── Navbar.jsx                # Navegacion fija con menu movil
│   │   ├── Hero.jsx                  # Seccion hero con particulas GSAP
│   │   ├── Music.jsx                 # Ultimas releases con cards
│   │   ├── Tours.jsx                 # Proximas fechas de conciertos
│   │   └── Footer.jsx                # Pie de pagina con links sociales
│   ├── hooks/
│   │   └── useScrollReveal.js        # Hook reutilizable para animaciones de scroll
│   ├── App.jsx
│   ├── index.css                     # Estilos globales y clases de animacion
│   └── main.jsx
├── index.html
├── tailwind.config.js                # Tokens de diseno (colores, tipografia, espaciado)
├── vite.config.js
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

# Build de produccion
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## Diseno

El sistema de diseno esta definido en `tailwind.config.js` con tokens propios:

- **Colores** — Paleta oscura (`#131313` base) con acento dorado (`#f2ca50` primario) y naranja (`#fd8b00` secundario)
- **Tipografia** — Playfair Display (titulos) + Manrope (cuerpo), tamanhos con escala propia (`headline-lg`, `display-lg`, etc.)
- **Espaciado** — Margenes y gaps semanticos (`margin-desktop`, `section-gap-desktop`, `gutter`)

## Secciones

<table>
  <tr>
    <th>Seccion</th>
    <th>Descripcion</th>
  </tr>
  <tr>
    <td><strong>Hero</strong></td>
    <td>Imagen a pantalla completa con notas musicales flotantes animadas por GSAP y llamadas a la accion</td>
  </tr>
  <tr>
    <td><strong>Music</strong></td>
    <td>Grid de tres columnas con portadas de albums, titulo, ano y placeholder de embed de Spotify</td>
  </tr>
  <tr>
    <td><strong>Tours</strong></td>
    <td>Lista de proximas fechas con venue, ciudad y boton de compra de entradas</td>
  </tr>
  <tr>
    <td><strong>Footer</strong></td>
    <td>Logo, links de navegacion, iconos sociales y copyright</td>
  </tr>
</table>

---

<div align="center">
  <sub>Desarrollado por <a href="https://github.com/soydanino">soydanino</a></sub>
  <sub>- <a href="https://github.com/marco2712">marco2712</a></sub>
</div>
