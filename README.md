# Hermanos AVE — Tequila Website

Sitio web oficial de **Tequila Hermanos AVE**. Construido con HTML, CSS y JavaScript puro — sin frameworks, sin dependencias, listo para subir a GitHub Pages de forma gratuita.

---

## Estructura de archivos

```
hermanos-ave/
├── index.html          ← Página principal (Home)
├── products.html       ← Nuestros Tequilas (Silver & Reposado)
├── story.html          ← Nuestra Historia + significado de AVE
├── contact.html        ← Formulario de contacto
├── css/
│   └── style.css       ← Todos los estilos del sitio
└── js/
    └── main.js         ← Age gate, navegación, animaciones
```

---

## Cómo subir a GitHub (paso a paso)

### Paso 1 — Crear cuenta en GitHub
1. Ve a **github.com**
2. Haz clic en **"Sign up"**
3. Llena tu nombre, email y contraseña
4. Verifica tu email

---

### Paso 2 — Crear un repositorio nuevo
1. Una vez dentro de GitHub, haz clic en el botón verde **"New"** (o el ícono `+` arriba a la derecha → "New repository")
2. En **"Repository name"** escribe exactamente: `hermanos-ave`
3. Selecciona **"Public"** (necesario para GitHub Pages gratis)
4. NO marques ninguna casilla adicional
5. Haz clic en **"Create repository"**

---

### Paso 3 — Subir los archivos
1. En la página del repositorio vacío verás un botón **"uploading an existing file"** — haz clic ahí
2. Arrastra y suelta **TODOS** los archivos y carpetas de este proyecto:
   - `index.html`
   - `products.html`
   - `story.html`
   - `contact.html`
   - La carpeta `css/` (con `style.css` dentro)
   - La carpeta `js/` (con `main.js` dentro)
3. En el campo de abajo escribe un mensaje como: `Initial commit - Hermanos AVE website`
4. Haz clic en **"Commit changes"**

---

### Paso 4 — Activar GitHub Pages (tu sitio queda LIVE)
1. En tu repositorio, haz clic en **"Settings"** (la pestaña de la rueda dentada)
2. En el menú izquierdo, haz clic en **"Pages"**
3. Bajo **"Branch"**, selecciona `main` en el primer dropdown y `/ (root)` en el segundo
4. Haz clic en **"Save"**
5. Espera 1-2 minutos
6. Tu sitio estará disponible en:

```
https://TU-USUARIO.github.io/hermanos-ave/
```

¡Listo! Tu sitio ya está en vivo, gratis, para siempre.

---

## Personalización importante

### Agregar tus fotos reales
1. Crea una carpeta llamada `images/` dentro del proyecto
2. Copia tus fotos de las botellas ahí (formatos: `.jpg`, `.png`, `.webp`)
3. En cada página HTML, busca la sección donde quieras agregar la imagen
4. Usa esta etiqueta donde la necesites:
```html
<img src="images/nombre-de-tu-foto.jpg" alt="Hermanos AVE Tequila Reposado" style="width:100%;border-radius:4px;" />
```

### Cambiar el email de contacto
En `contact.html`, busca esta línea y cambia el email:
```html
<a href="mailto:info@hermanosave.com">info@hermanosave.com</a>
```

### Agregar tus redes sociales
En todas las páginas, busca los enlaces `href="#"` de Instagram, Facebook y TikTok y reemplázalos con tus URLs reales:
```html
<a href="https://www.instagram.com/TU-USUARIO">Instagram</a>
```

### Cambiar el año del copyright
En el footer de cada página, busca y actualiza:
```html
© 2025 Hermanos AVE Tequila.
```

---

## Características del sitio

- **Age gate** — Verificación de edad en cada página (requerido legalmente para alcohol)
- **Responsive** — Se adapta a móvil, tablet y escritorio
- **Animaciones** — Elementos que aparecen suavemente al hacer scroll
- **Navegación fija** — El menú siempre visible al hacer scroll
- **Menú móvil** — Hamburger menu para pantallas pequeñas
- **Formulario de contacto** — Con mensaje de confirmación al enviar
- **Colores de marca** — Forest green `#364120`, gold `#F2B90C`, teal `#609FA6`
- **Tipografía** — Montserrat (títulos) + Ibarra Real Nova (cuerpo)

---

## Colores de marca (Brandbook)

| Color | Hex | Uso |
|-------|-----|-----|
| Forest green | `#364120` | Fondo secciones, tarjetas |
| Deep green | `#0e1a0a` | Fondo principal, nav |
| Gold | `#F2B90C` | Títulos, CTAs, acentos |
| Gold dark | `#F2A007` | Hover de botones |
| Teal | `#609FA6` | Eyebrows, detalles Silver |
| Teal light | `#9AC7D8` | Acentos Silver edition |
| Cream | `#f0ead8` | Texto principal |

---

## Próximos pasos recomendados

1. **Agregar dominio propio** — En GitHub Pages Settings puedes conectar `hermanosave.com` si lo compras
2. **Agregar fotos reales** — Reemplazar los bloques de texto con tus imágenes de botella
3. **Conectar formulario** — Usar [Formspree.io](https://formspree.io) (gratis) para recibir los mensajes del formulario por email
4. **Google Analytics** — Agregar tracking gratuito para ver cuántas visitas recibes

---

*Hermanos AVE Tequila · Wings of tradition, elevated taste · Product of Mexico*
