# Bucket List

## English

Bucket List is a small Angular app for keeping track of life goals and ideas worth doing. It lets you add new goals, see the current total, switch the interface between English and Spanish, and remove items once they are done.

The project has been updated from Angular 8 to Angular 21 and now uses standalone Angular components, the modern Angular application builder, and Vitest-based unit tests.

### Tech Stack

- Angular `21`
- TypeScript `5.9`
- RxJS `7.8`
- SCSS
- Vitest

### Requirements

- Node.js `22.12` or newer
- npm `11`

The repo includes a `packageManager` field and an `engines` field so hosts such as Netlify know which runtime family to use.

### Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:4200/
```

### Build

Create a production build:

```bash
npm run build
```

Angular writes the deployable browser files to:

```text
dist/todo-list/browser
```

### Tests

Run unit tests once:

```bash
npm test -- --watch=false
```

### Netlify Deploy

This project is ready to deploy to Netlify with the included `netlify.toml`.

Netlify settings:

```text
Build command: npm run build
Publish directory: dist/todo-list/browser
Node version: 22
```

The `netlify.toml` file also includes a single-page app redirect so Angular routes fall back to `index.html` instead of returning 404s on refresh.

### Project Structure

```text
src/app/app.config.ts      Angular application providers
src/app/app.routes.ts      Application routes
src/app/home/              Bucket list UI and behavior
src/app/data.service.ts    Shared bucket list state
netlify.toml               Netlify build and redirect config
```

## Español

Bucket List es una app pequeña de Angular para llevar registro de metas, planes e ideas que valen la pena hacer. Permite agregar objetivos, ver el total actual, cambiar la interfaz entre inglés y español, y quitar elementos cuando ya están completados.

El proyecto fue actualizado de Angular 8 a Angular 21 y ahora usa componentes standalone, el builder moderno de Angular y tests unitarios con Vitest.

### Stack

- Angular `21`
- TypeScript `5.9`
- RxJS `7.8`
- SCSS
- Vitest

### Requisitos

- Node.js `22.12` o superior
- npm `11`

El repo incluye los campos `packageManager` y `engines` para que servicios como Netlify sepan qué runtime usar.

### Desarrollo Local

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm start
```

Abrir:

```text
http://localhost:4200/
```

### Build

Crear un build de producción:

```bash
npm run build
```

Angular genera los archivos listos para deploy en:

```text
dist/todo-list/browser
```

### Tests

Correr los tests una vez:

```bash
npm test -- --watch=false
```

### Deploy en Netlify

Este proyecto está listo para deployar en Netlify con el archivo `netlify.toml` incluido.

Configuración de Netlify:

```text
Build command: npm run build
Publish directory: dist/todo-list/browser
Node version: 22
```

El archivo `netlify.toml` también incluye un redirect para single-page apps, así las rutas de Angular vuelven a `index.html` y no dan 404 al refrescar.

### Estructura del Proyecto

```text
src/app/app.config.ts      Providers de la aplicación Angular
src/app/app.routes.ts      Rutas de la aplicación
src/app/home/              UI y comportamiento de la bucket list
src/app/data.service.ts    Estado compartido de la bucket list
netlify.toml               Configuración de build y redirects para Netlify
```

## Credit / Crédito

© fuzzdea. Made with ♥.
