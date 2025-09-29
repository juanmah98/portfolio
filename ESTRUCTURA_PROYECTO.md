# Estructura del Proyecto - Landing Page Portfolio

## 📁 Estructura de Carpetas

```
src/
├── app/
│   ├── components/           # Componentes de la aplicación
│   │   ├── header/          # Componente de navegación
│   │   ├── footer/          # Componente de pie de página
│   │   ├── hero/           # Sección principal/hero
│   │   ├── about/          # Sección sobre mí
│   │   └── contact/        # Sección de contacto
│   ├── services/           # Servicios de Angular
│   │   └── portfolio.service.ts
│   ├── models/            # Interfaces y tipos TypeScript
│   │   └── portfolio.model.ts
│   ├── shared/            # Componentes compartidos
│   └── app.component.*    # Componente principal
├── assets/
│   ├── images/           # Imágenes del portfolio
│   └── icons/            # Iconos SVG
└── styles.scss           # Estilos globales
```

## 🎯 Componentes Principales

### 1. **Header Component**
- Navegación fija con menú responsive
- Logo personalizable
- Enlaces de navegación suave

### 2. **Hero Component**
- Sección principal de presentación
- Título, subtítulo y descripción
- Botones de acción (Contacto, Proyectos)
- Imagen de perfil

### 3. **About Component**
- Información personal
- Habilidades técnicas con barras de progreso
- Estadísticas destacadas
- Datos cargados desde el servicio

### 4. **Contact Component**
- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales
- Validación de formularios

### 5. **Footer Component**
- Información adicional
- Enlaces de navegación
- Redes sociales
- Copyright

## 🛠️ Servicios

### **PortfolioService**
- `getPersonalInfo()`: Información personal
- `getSocialLinks()`: Enlaces a redes sociales
- `getSkills()`: Habilidades técnicas
- `getProjects()`: Proyectos realizados
- `getExperience()`: Experiencia laboral
- `getEducation()`: Formación académica

## 📊 Modelos de Datos

### **Interfaces Principales**
- `PersonalInfo`: Información personal
- `SocialLink`: Enlaces sociales
- `Skill`: Habilidades técnicas
- `Project`: Proyectos
- `Experience`: Experiencia laboral
- `Education`: Formación

## 🎨 Estilos

### **Variables CSS**
- Colores primarios y secundarios
- Espaciado consistente
- Sombras y efectos
- Responsive design

### **Componentes Estilizados**
- Header con navegación fija
- Hero con gradiente y animaciones
- Secciones con grid layout
- Formularios estilizados
- Footer con información completa

## 🚀 Características

- ✅ **Responsive Design**: Adaptable a todos los dispositivos
- ✅ **Navegación Suave**: Scroll suave entre secciones
- ✅ **Formulario Funcional**: Validación y envío de mensajes
- ✅ **Animaciones**: Transiciones y efectos visuales
- ✅ **SEO Friendly**: Estructura semántica
- ✅ **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Tecnologías Utilizadas

- **Angular 19**: Framework principal
- **TypeScript**: Tipado estático
- **SCSS**: Preprocesador CSS
- **Standalone Components**: Arquitectura moderna
- **Services**: Gestión de datos
- **Models**: Interfaces TypeScript

## 📝 Próximos Pasos

1. **Personalizar Contenido**: Actualizar información personal en el servicio
2. **Agregar Imágenes**: Subir fotos de perfil y proyectos
3. **Configurar Backend**: Implementar envío real de formularios
4. **Optimizar SEO**: Meta tags y structured data
5. **Testing**: Añadir pruebas unitarias
6. **Deploy**: Configurar despliegue en producción

## 🎯 Cómo Personalizar

1. **Editar `portfolio.service.ts`** con tu información
2. **Cambiar imágenes** en `src/assets/images/`
3. **Modificar colores** en `src/styles.scss`
4. **Actualizar contenido** en los templates HTML
5. **Añadir nuevas secciones** siguiendo el patrón existente
