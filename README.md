# 🖥️ Setup 3D Studio — Diseñador de Habitaciones y Setups en 3D

Aplicación web interactiva en **Three.js + WebGL** para visualizar, personalizar y diseñar habitaciones y setups de escritorio a escala real (`1 unidad = 1 cm`), con iluminación física, tira LED RGB perimetral, física de superficies, cotas arquitectónicas en tiempo real, editor de planos 2D y taller de muebles a medida estilo SketchUp.

---

## ✨ Características Principales

1. **Pantalla de Bienvenida y Plantillas**:
   - **Explorar Setup-Base**: Demo completa con habitación a medida, escritorio con cajonera ALEX, torre PC suspendida con ventiladores ARGB, doble monitor con ScreenBar, estantería Kallax, mesita de lectura, cama esculpida y más de 25 accesorios independientes.
   - **Empezar con Habitación Vacía**: Cuarto limpio listo para amueblar desde cero.
   - **Dibujar mi Plano 2D**: Creador interactivo de habitaciones a medida.
2. **Editor de Planos 2D → Generador 3D Automático**:
   - Cuadrícula interactiva con imán (`5 cm` / `10 cm`), asistencia de ángulos a `90°`, introducción de medidas exactas por pared y plantillas rápidas (Setup-Base, rectangular, en L).
   - Colocación de **puertas, ventanas, radiadores y paneles de listones de madera** directamente sobre cualquier muro.
   - Extrusión 3D automática de suelo de parquet, rodapiés, techo, paredes inteligentes (bajan solas al orbitar) y tira LED RGB en el perímetro.
3. **Catálogo Completo + Muebles Paramétricos**:
   - Añade escritorios, cajoneras ALEX, estanterías Kallax, camas, armarios, sillas, monitores, PCs, plantas y figuras.
   - Modifica **Ancho × Fondo × Alto (cm)** y acabados de color/madera en tiempo real.
4. **Taller de Muebles 3D (Estilo SketchUp)**:
   - Construye muebles propios ensamblando y extruyendo tableros, patas, cajones, divisiones y cilindros con medidas en centímetros.
   - Aplica materiales del proyecto y guárdalos en tu catálogo o expórtalos en `.GLB` / `.JSON`.
5. **Compartir y Exportar**:
   - **Enlace compartible (URL)** con el estado comprimido de la habitación para enviarlo a cualquier persona con un clic.
   - Exportación e importación de proyecto completo en `.JSON` y exportación de modelos 3D en `.GLB` (`GLTFExporter`).

---

## 🚀 Cómo Ejecutar en Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo (Vite)
npm run dev

# 3. Auditoría de seguridad antes de publicar
npm run security-check

# 4. Compilar para producción
npm run build
```

---

## 🌐 Publicación Automática en GitHub Pages

Este repositorio incluye el flujo de trabajo [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
1. Sube el repositorio a GitHub (`git push origin main`).
2. En GitHub, entra en **Settings → Pages → Build and deployment**.
3. En **Source**, selecciona **GitHub Actions**.
4. Cada `push` a la rama `main` compilará y publicará automáticamente la web en `https://<tu-usuario>.github.io/<nombre-repo>/`.

---

## 📂 Estructura del Proyecto

```text
setup-3d-designer/
├── index.html                        # Aplicación principal
├── package.json                      # Configuración de Vite y Three.js
├── vite.config.js                    # Configuración de build con rutas relativas
├── scripts/
│   └── security-check.mjs            # Escáner de seguridad previo a GitHub
├── .github/workflows/deploy.yml      # Despliegue automático en GitHub Pages
└── src/
    ├── presets/
    │   ├── setup-base.json           # Esquema 2D/3D del Setup-Base por defecto
    │   └── room-templates.json       # Plantillas base de habitaciones 2D
    ├── core/
    │   └── index.js                  # Motor Three.js, luces, post-procesado Bloom y cámaras
    ├── room/
    │   ├── FloorPlan2D.js            # Editor interactivo de planos 2D (paredes, puertas, ventanas)
    │   └── RoomBuilder3D.js          # Generador de geometría 3D de habitación a partir del plano 2D
    ├── catalog/
    │   └── index.js                  # Catálogo de muebles paramétricos y accesorios 3D
    ├── builder/
    │   └── FurnitureWorkshop3D.js    # Taller de creación de muebles a medida estilo SketchUp
    └── state/
        └── ShareAndExport.js         # Enlaces compartibles por URL, exportación .JSON y .GLB
```
