# Bucket List

Bucket List is a small Angular app for keeping track of life goals and ideas worth doing. It lets you add new goals, see the current total, and remove items once they are done.

The project has been updated from Angular 8 to Angular 21 and now uses standalone Angular components, the modern Angular application builder, and Vitest-based unit tests.

## Tech Stack

- Angular `21`
- TypeScript `5.9`
- RxJS `7.8`
- SCSS
- Vitest

## Requirements

- Node.js `22.12` or newer
- npm `11`

The repo includes a `packageManager` field and an `engines` field so hosts such as Netlify know which runtime family to use.

## Local Development

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

## Build

Create a production build:

```bash
npm run build
```

Angular writes the deployable browser files to:

```text
dist/todo-list/browser
```

## Tests

Run unit tests once:

```bash
npm test -- --watch=false
```

## Netlify Deploy

This project is ready to deploy to Netlify with the included `netlify.toml`.

Netlify settings:

```text
Build command: npm run build
Publish directory: dist/todo-list/browser
Node version: 22
```

The `netlify.toml` file also includes a single-page app redirect so Angular routes fall back to `index.html` instead of returning 404s on refresh.

## Project Structure

```text
src/app/app.config.ts      Angular application providers
src/app/app.routes.ts      Application routes
src/app/home/              Bucket list UI and behavior
src/app/data.service.ts    Shared bucket list state
netlify.toml               Netlify build and redirect config
```

## Credit

© fuzzdea. Made with ♥.
