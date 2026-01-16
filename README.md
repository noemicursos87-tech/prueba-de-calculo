# Calculadora Aritmética Interactiva

Aplicación web interactiva de cálculo aritmético optimizada para SEO 2026. Genera dos números aleatorios y permite realizar operaciones básicas: suma, resta, multiplicación y división.

## Características

- ✅ Generación de números aleatorios (1-100)
- ✅ Cuatro operaciones aritméticas básicas
- ✅ Manejo de división por cero
- ✅ Interfaz visual moderna y accesible
- ✅ Diseño responsivo para móviles
- ✅ Optimizado para SEO 2026
- ✅ Datos estructurados JSON-LD
- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Accesibilidad mejorada (ARIA labels)
- ✅ Core Web Vitals optimization
- ✅ Progressive Web App ready

## Optimizaciones SEO Implementadas

### Meta Tags
- Título optimizado con palabras clave
- Descripción meta completa (150-160 caracteres)
- Keywords meta (aunque Google ya no lo usa, otros motores sí)
- Robots meta con directivas completas
- Canonical URL
- Theme color para mobile

### Open Graph & Social Media
- OG title, description, type, url
- OG site_name y locale
- Twitter Card (summary_large_image)

### Datos Estructurados (JSON-LD)
- Schema.org WebApplication
- EducationalApplication category
- LearningResourceType
- EducationalLevel y EducationalUse

### Accesibilidad
- HTML5 semántico (main, header, section, footer)
- ARIA labels y live regions
- Navegación por teclado
- Focus visible en elementos interactivos
- Contrast ratios mejorados

### Core Web Vitals
- Optimización de carga
- Imágenes optimizadas
- CLS reducido (evitando layout shifts)
- JavaScript optimizado

### SEO Técnico
- Sitemap.xml
- Robots.txt
- .htaccess con caching y headers
- Manifest.json para PWA

## Cómo usar

1. **Abre el archivo `index.html`** en tu navegador web
2. **Haz clic en "Generar Nuevo"** para obtener dos números aleatorios
3. **Selecciona una operación:** Sumar, Restar, Multiplicar o Dividir
4. **El resultado aparecerá** arriba de cada botón

## Personalización

### Cambiar URL del sitio
Reemplaza `https://tusitio.com/` con tu URL real en:
- `index.html`: línea 24, 36, 39
- `sitemap.xml`: línea 4
- `robots.txt`: línea 5
- `manifest.json`: línea 5

### Agregar imágenes para redes sociales
1. Crea una imagen OG (1200x630px) en `img/og-image.png`
2. Crea una imagen Twitter (1200x600px) en `img/twitter-card.png`

### Agregar iconos para PWA
1. Crea icon-192x192.png en la raíz
2. Crea icon-512x512.png en la raíz

## Checklist SEO 2026

- [x] Meta tags esenciales
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] JSON-LD structured data
- [x] HTML5 semántico
- [x] ARIA labels
- [x] Responsive design
- [x] Core Web Vitals optimization
- [x] Sitemap.xml
- [x] Robots.txt
- [x] .htaccess
- [x] PWA manifest

## Estructura de archivos

```
prueba calculadora/
├── node/
│   ├── index.html          (Aplicación principal con SEO)
│   ├── robots.txt          (Directivas para crawlers)
│   ├── sitemap.xml         (Mapa del sitio)
│   ├── manifest.json       (PWA manifest)
│   └── .htaccess           (Configuración servidor)
├── css/
│   └── style.css
├── js/
│   ├── index.js
│   └── operaciones-aritmeticas.mjs
├── img/
│   └── fondo.png
└── README.md
```

## Próximos pasos (Opcional)

- [ ] Subir a hosting SSL (HTTPS requerido para PWA)
- [ ] Verificar con Google Search Console
- [ ] Agregar favicon.ico
- [ ] Crear imágenes para redes sociales
- [ ] Implementar Service Worker para offline
- [ ] Agregar Google Analytics
- [ ] Registrar con Bing Webmaster Tools

## Licencia

Este proyecto es de código abierto y está disponible para uso educativo.
