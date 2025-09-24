# LN Consultoría - Asesoría y Consultoría Empresarial

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.13-38B2AC.svg)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-brightgreen.svg)](https://pages.github.com/)

> **Confianza y soluciones para tu empresa** - Plataforma web moderna para servicios de consultoría financiera y empresarial, desarrollada con tecnologías de vanguardia.

## 🌟 Características Principales

### 🎨 **Diseño Moderno**
- **Tema Dark** elegante y profesional
- **Responsive Design** - Optimizado para todos los dispositivos
- **Interfaz Intuitiva** - Navegación fluida y moderna
- **Animaciones Suaves** - Transiciones profesionales

### 📱 **Funcionalidades Avanzadas**
- **Botón WhatsApp Dinámico** - Se mueve con el scroll y aparece estratégicamente
- **Navegación Responsiva** - Menú hamburguesa para móviles
- **Secciones Especializadas**:
  - Hero Section con imagen de fondo
  - Información de la empresa
  - Planes y servicios
  - Formulario de contacto
  - Footer con información corporativa

### ⚡ **Tecnología de Vanguardia**
- **React 18** - Framework moderno y eficiente
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos utility-first
- **Componentes Modulares** - Arquitectura escalable

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 5.4.8** - Herramienta de construcción y desarrollo
- **Tailwind CSS 3.4.13** - Framework CSS utility-first
- **PostCSS** - Herramienta para transformar CSS
- **Autoprefixer** - Plugin para agregar prefijos de navegadores

### Despliegue
- **GitHub Pages** - Plataforma de hosting gratuita
- **GitHub Actions** - CI/CD para despliegue automático
- **gh-pages** - Plugin para publicar en GitHub Pages

## 📋 Requisitos del Sistema

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **Git** >= 2.30.0

## ⚡ Instalación y Uso

### 1. Clonar el Repositorio
```bash
git clone https://github.com/iamjosealonso/LNconsultoria.github.io.git
cd LNconsultoria.github.io
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Desarrollo Local
```bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en:
# http://localhost:5173
```

### 4. Build de Producción
```bash
# Generar archivos de producción
npm run build

# Los archivos se generan en la carpeta 'dist/'
```

### 5. Preview del Build
```bash
# Previsualizar la build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
LNconsultoria.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Archivos estáticos
│   ├── hero.png               # Imagen principal
│   └── logo.jpg               # Logo de la empresa
├── src/                       # Código fuente
│   ├── components/            # Componentes React
│   │   ├── About.jsx         # Sección "Quiénes somos"
│   │   ├── Contact.jsx       # Formulario de contacto
│   │   ├── Footer.jsx        # Pie de página
│   │   ├── Hero.jsx          # Sección principal
│   │   ├── Navbar.jsx        # Navegación
│   │   ├── Plans.jsx         # Planes y servicios
│   │   └── WhatsAppButton.jsx # Botón flotante de WhatsApp
│   ├── styles/
│   │   └── index.css         # Estilos globales
│   ├── App.jsx               # Componente principal
│   └── main.jsx              # Punto de entrada
├── dist/                     # Build de producción (auto-generado)
├── .gitignore               # Archivos ignorados por Git
├── index.html               # Template HTML
├── package.json             # Dependencias y scripts
├── postcss.config.js        # Configuración PostCSS
├── tailwind.config.js       # Configuración Tailwind CSS
├── vite.config.js           # Configuración Vite
└── README.md                # Este archivo
```

## 🎨 Personalización

### Colores Personalizados
El proyecto utiliza una paleta de colores personalizada definida en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#0EA5E9',    // Azul primario
    dark: '#0284C7',       // Azul oscuro
  },
  brand: '#0B1B2B',        // Color de marca
  surface: '#0F172A',      // Superficie
  muted: '#94A3B8',        # Color muteado
}
```

### Configuración de WhatsApp
Para cambiar el número de WhatsApp, modifica el componente `WhatsAppButton.jsx`:

```jsx
<WhatsAppButton phone="51926896924" />
```

### Contenido de las Secciones
Cada sección puede ser personalizada editando los componentes correspondientes en la carpeta `src/components/`.

## 🌐 Despliegue en GitHub Pages

### ✅ **Configuración Actual (Funcional)**

**Tu aplicación React está desplegada y funcionando en:**
```
https://iamjosealonso.github.io/LNconsultoria.github.io/
```

### 🔧 **Configuración Técnica**

#### **Base Path Configurado:**
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/LNconsultoria.github.io/', // ✅ Correcto para GitHub Pages
})
```

#### **Archivos de Producción:**
```
dist/
├── index.html          # HTML principal con paths correctos
├── assets/             # JavaScript y CSS compilados
│   ├── index-[hash].js
│   └── index-[hash].css
├── hero.png           # Imagen de fondo
└── logo.jpg           # Logo de la empresa
```

### 🚀 **¿Cómo Funciona?**

1. **Build de Producción:** Los archivos se compilan en `dist/`
2. **Paths Correctos:** Todos los assets usan el base path `/LNconsultoria.github.io/`
3. **GitHub Pages:** Sirve los archivos estáticos desde `dist/`
4. **Aplicación React:** Se carga correctamente con todos los estilos y funcionalidades

### 📱 **Verificación de Funcionamiento**

Para verificar que tu aplicación React funciona correctamente:

1. **Abre tu navegador**
2. **Ve a:** https://iamjosealonso.github.io/LNconsultoria.github.io/
3. **Deberías ver:**
   - ✅ Aplicación React funcionando (no HTML estático)
   - ✅ Tema dark con diseño profesional
   - ✅ Botón WhatsApp que aparece al hacer scroll
   - ✅ Navegación responsive para móviles
   - ✅ Todas las secciones funcionando

### 🔄 **Actualización de la Página**

Para actualizar tu página en GitHub Pages:

```bash
# 1. Hacer cambios en el código
# 2. Generar nueva build
npm run build

# 3. Hacer commit y push
git add .
git commit -m "Update application"
git push origin main

# 4. Los cambios estarán disponibles en 2-3 minutos
```

## 🔧 Configuración Avanzada

### Variables de Entorno
Para desarrollo local, puedes crear un archivo `.env`:

```env
VITE_APP_TITLE="LN Consultoría"
VITE_APP_DESCRIPTION="Asesoría y Consultoría Empresarial"
```

### Configuración de Vite
El archivo `vite.config.js` contiene la configuración principal:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/LNconsultoria.github.io/', // Base path para GitHub Pages
})
```

## 📱 Responsive Design

### Breakpoints Utilizados
- **sm:** 640px - Tablets pequeñas
- **md:** 768px - Tablets
- **lg:** 1024px - Laptops
- **xl:** 1280px - Desktop

### Componentes Responsivos
Todos los componentes están optimizados para:
- ✅ Móviles (320px - 767px)
- ✅ Tablets (768px - 1023px)
- ✅ Desktop (1024px+)

## 🤝 Contribución

¡Agradecemos las contribuciones! Para contribuir:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Estándares de Código
- Utilizar **ESLint** para mantener la calidad del código
- Seguir las **convenciones de React** y **Tailwind CSS**
- Escribir **código legible** y bien documentado
- Usar **componentes funcionales** con hooks

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**LN Consultoría**
- GitHub: [@iamjosealonso](https://github.com/iamjosealonso)
- LinkedIn: [Perfil de LinkedIn]
- Email: [correo@empresa.com]

## 🙏 Agradecimientos

- **React Team** - Por el increíble framework
- **Vite Team** - Por la herramienta de desarrollo
- **Tailwind CSS** - Por el framework de estilos
- **GitHub** - Por la plataforma de hosting gratuita

---

**⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!**

---

## 📞 Contacto

¿Necesitas servicios de consultoría empresarial? ¡Contáctanos!

- 📱 **WhatsApp:** +51 926 896 924
- 🌐 **Sitio Web:** [https://iamjosealonso.github.io/LNconsultoria.github.io/](https://iamjosealonso.github.io/LNconsultoria.github.io/)
- 📧 **Email:** [info@lnconsultoria.com]

---

*Desarrollado con ❤️ por LN Consultoría*
