# 🔮 Portafolio Cyberpunk - Kapocha

```
k4pocha@portfolio:~$ whoami
Nicolás Oñate | Desarrollador Fullstack | Ciberseguridad
```

Un portafolio personal de alta tecnología con diseño **cyberpunk** construido con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. Presenta una interfaz interactiva con efectos neon, animaciones fluidas y una experiencia de usuario moderna.

## ✨ Características

### 🎨 Diseño Cyberpunk
- **Paleta de colores neón**: Púrpura (`#ff00ff`) y Cian (`#00ffff`)
- **Efectos visuales avanzados**:
  - Scanlines sutiles (efecto CRT)
  - Glow neon en textos y bordes
  - Glitch effects en títulos
  - Grid cyberpunk animado
  - Gradientes fluorescentes

### 🚀 Componentes Interactivos
- **Hero Section** con animación de tipos y prompt terminal
- **About Section** con avatar con efectos de escaneo
- **Projects Grid** con cards con bordes neon y hover effects
- **Skills Grid** con iconos interactivos
- **Contact Section** con botones de redes sociales
- **Responsive Design** optimizado para móvil y desktop

### ⚙️ Tecnologías

```
Frontend Stack:
├── Next.js 15+ (React Framework)
├── TypeScript (Type Safety)
├── Tailwind CSS (Estilos)
├── Framer Motion (Animaciones)
├── React Type Animation (Escritura animada)
├── Lucide React (Iconos)
└── React Icons (Más iconos)

Herramientas:
├── ESLint (Linting)
├── PostCSS (CSS Processing)
└── Vercel (Deployment)
```

## 📋 Requisitos Previos

- **Node.js**: 18.x o superior
- **npm** o **yarn**

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/k4pocha/portafolio.git
cd portafolio-k4pocha
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en navegador**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
portafolio-k4pocha/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   ├── ProjectModal.tsx
│       │   ├── ThemeToggle.tsx
│       │   └── sections/
│       │       ├── Hero.tsx
│       │       ├── About.tsx
│       │       ├── Projects.tsx
│       │       ├── Skills.tsx
│       │       └── Contact.tsx
│       ├── context/
│       │   └── ThemeContext.tsx
│       ├── types/
│       │   └── index.ts
│       ├── api/
│       │   └── projects/
│       │       └── route.ts
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
│   ├── data/
│   │   └── ownProjects.json
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

## 🎯 Secciones Principales

### Hero
Presenta una bienvenida animada con efecto terminal y TypeAnimation para crear una experiencia cinematográfica.

### About
Muestra información personal con un avatar con efectos de escaneo y barras de carga de habilidades.

### Projects
Galería de proyectos con cards interactivas, modal expandible y filtrado por tecnologías.

### Skills
Grid visual de tecnologías y herramientas con efectos de hover y brillo neon.

### Contact
Sección con botones de contacto directo a email, LinkedIn y GitHub.

## 🚀 Scripts Disponibles

```bash
# Desarrollo con Turbopack (más rápido)
npm run dev

# Build para producción
npm run build

# Ejecutar versión producción
npm start

# Linting
npm run lint
```

## 🌐 Despliegue

Este proyecto está optimizado para desplegarse en **Vercel** (recomendado):

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. El despliegue se hará automáticamente en cada push

Alternativamente:
```bash
npm run build
npm start
```

## 🎨 Personalización

### Cambiar colores cyberpunk
Edita `src/app/globals.css`:
```css
.dark {
  --background: 260 30% 5%;
  --foreground: 180 100% 90%;
  --primary: 270 100% 50%;      /* Púrpura */
  --secondary: 180 100% 50%;    /* Cian */
  --accent: 0 100% 50%;         /* Rojo */
}
```

### Agregar proyectos
Modifica `public/data/ownProjects.json`:
```json
{
  "id": "nuevo-proyecto",
  "name": "Mi Proyecto",
  "shortDescription": "Descripción corta",
  "description": "Descripción completa",
  "technologies": ["React", "Next.js"],
  "imageUrl": "/images/proyecto.png",
  "links": {
    "github": "https://github.com/...",
    "live": "https://..."
  }
}
```

## 📊 Rendimiento

- ⚡ **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- 🎯 **Core Web Vitals**: Optimizados
- 📱 **Mobile First**: Diseño responsive
- ♿ **Accesibilidad**: WCAG compliant

## 🛠️ Tecnologías & Librerías

- **Next.js**: Framework React moderno con SSR/SSG
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Librería de animaciones profesional
- **TypeScript**: Lenguaje tipado para mayor seguridad
- **Turbopack**: Compilador rápido para desarrollo

## 📝 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👤 Autor

**Nicolás Oñate Martínez**
- 🔗 [GitHub](https://github.com/k4pocha)
- 💼 [LinkedIn](https://cl.linkedin.com/in/nicolas-o%C3%B1ate-045132238)
- 📧 [Email](mailto:nicolas.onate.m@mail.pucv.cl)

---

```
$ echo "Built with passion and cyberpunk vibes 🔮"
>> /dev/k4pocha
```
