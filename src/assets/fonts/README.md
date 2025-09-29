# Fuentes Personalizadas

Esta carpeta está destinada a almacenar las fuentes personalizadas que descargues.

## 📁 Estructura Recomendada

```
src/assets/fonts/
├── README.md
├── custom-fonts.css
├── mi-fuente/
│   ├── mi-fuente.woff2
│   ├── mi-fuente.woff
│   └── mi-fuente.ttf
└── otra-fuente/
    ├── otra-fuente.woff2
    ├── otra-fuente.woff
    └── otra-fuente.ttf
```

## 🔧 Cómo Agregar una Nueva Fuente

1. **Descarga la fuente** en formato WOFF2, WOFF y TTF
2. **Crea una carpeta** con el nombre de la fuente
3. **Coloca los archivos** en la carpeta
4. **Actualiza** `custom-fonts.css` con el `@font-face`

### Ejemplo:

```css
@font-face {
  font-family: 'MiFuentePersonalizada';
  src: url('./mi-fuente/mi-fuente.woff2') format('woff2'),
       url('./mi-fuente/mi-fuente.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## 🎯 Uso en el Proyecto

### Variables CSS:
```css
:root {
  --font-custom: 'MiFuentePersonalizada', sans-serif;
}
```

### Clases utilitarias:
```html
<h1 class="font-custom">Mi Título</h1>
```

### En estilos:
```scss
.mi-clase {
  font-family: var(--font-custom);
}
```

## 📝 Formatos Recomendados

- **WOFF2**: Mejor compresión, navegadores modernos
- **WOFF**: Fallback para navegadores más antiguos
- **TTF**: Fallback universal

## ⚡ Optimización

- Usa `font-display: swap` para mejor rendimiento
- Prefer WOFF2 sobre WOFF
- Mantén solo los pesos que necesites
