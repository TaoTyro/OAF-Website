# Orphans of Africa Foundation – Project Documentation

This documentation provides an in-depth overview of the key configuration and manifest files that compose this Vite+React+Tailwind CSS project. Each file's purpose, structure, and typical use are described for clarity and onboarding efficiency.

---

## ATTRIBUTIONS.md

This file provides legal and ethical attribution for assets and libraries used within the project.

- **Purpose:**  
  To credit external resources, both for UI components and images, in compliance with their respective licenses.

- **Content Overview:**
  - Acknowledges the use of [shadcn/ui](https://ui.shadcn.com/) (MIT License) for UI components.
  - Credits [Unsplash](https://unsplash.com) for photos, with a link to their usage license.

```markdown
This Figma Make file includes components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md). This Figma Make file includes photos from [Unsplash](https://unsplash.com) used under [license](https://unsplash.com/license).
```

---

## index.html

This is the main HTML entry point for the web application.

- **Purpose:**  
  To bootstrap the React app and define the basic DOM structure.

- **Key Elements:**
  - Declares the document as HTML5 and sets the language to English.
  - Contains meta tags for character encoding and responsive viewport.
  - The `<title>` is set to "Orphans of Africa Foundation".
  - The `<div id="root"></div>` element serves as the React mount point.
  - Loads the main React entry point (`src/main.tsx`) as a module.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Orphans of Africa Foundation</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## package.json

The manifest for this project, defining metadata, dependencies, scripts, and configuration overrides.

- **Purpose:**  
  To describe the project and manage its dependencies and scripts for development and build processes.

- **Sections:**

  | Section            | Description                                                                |
  |--------------------|----------------------------------------------------------------------------|
  | `name`             | Package name, here scoped under `@figma/`                                  |
  | `private`          | Marks the project as non-publishable to npm                                |
  | `version`          | Project version                                                            |
  | `type`             | Module type (`module` for ES modules)                                      |
  | `scripts`          | Shortcuts for build (`vite build`) and dev (`vite`)                        |
  | `dependencies`     | Runtime dependencies (React, MUI, Radix UI, Tailwind, etc.)                |
  | `devDependencies`  | Development tools (Vite, Tailwind, TypeScript types, etc.)                 |
  | `pnpm/overrides`   | Ensures specific package versions with pnpm and general override fields     |

- **Notable dependencies:**  
  - **UI:** MUI, Radix UI, shadcn/ui
  - **Styling:** Tailwind CSS, emotion, clsx, tailwind-merge
  - **Animation:** GSAP, framer-motion, tw-animate-css
  - **Form/UX:** react-hook-form, react-day-picker, embla-carousel
  - **Dev Tools:** Vite, Tailwind Vite plugin, TypeScript types

```json
{
  "name": "@figma/my-make-file",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "build": "vite build",
    "dev": "vite"
  },
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "...": "..."
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  },
  "pnpm": {
    "overrides": {
      "vite": "6.3.5"
    }
  },
  "overrides": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  }
}
```

---

## .gitignore

Specifies which files/directories Git should ignore, keeping the repository clean and focused on source code.

- **Purpose:**  
  Prevents versioning of dependencies, build output, environment files, logs, lockfiles, editor settings, OS files, and test coverage data.

- **Main Ignore Categories:**
  - **Dependencies:** `node_modules/`, `.pnp/`
  - **Build Outputs:** `dist/`, `build/`, `out/`
  - **Env Files:** `.env*`
  - **Logs:** `npm-debug.log*`, `logs/`
  - **TypeScript/Cache:** `.tsbuildinfo`, `.vite/`, `.eslintcache`
  - **Editor/OS files:** `.vscode/`, `.idea/`, `.DS_Store`, `Thumbs.db`
  - **Testing:** `coverage/`, `*.lcov`
  - **Optional lock files:** Commented out; uncomment to ignore if desired.

```gitignore
# Dependencies
node_modules/
.pnp/
.pnp.js
# Build outputs
dist/
build/
out/
# Environment variables
.env
.env.local
.env.development
.env.test
.env.production
.formspree
# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
logs/
*.log
# TypeScript
*.tsbuildinfo
# Cache & tooling
.vite/
.cache/
.eslintcache
.stylelintcache
.parcel-cache/
# Tailwind / PostCSS
.postcssrc
tailwind.config.js.bak
# Editor & OS files
.vscode/
.idea/
.DS_Store
Thumbs.db
*.swp
*.swo
# Testing
coverage/
*.lcov
# Optional: lock files (keep ONE, ignore others if needed)
# yarn.lock
# package-lock.json
# pnpm-lock.yaml
# Misc
*.pem
*.key
```

---

## postcss.config.mjs

Configures PostCSS for the project.

- **Purpose:**  
  To allow additional PostCSS plugins when building CSS (e.g., for CSS nesting or custom transforms).

- **Key Notes:**
  - Tailwind CSS v4 with the Vite plugin handles all required PostCSS plugins automatically.
  - You can leave this file empty unless you want extra plugins (e.g., `postcss-nested`).
  - The file is in ESM format (`.mjs`), suitable for modern toolchains.

```js
/**
 * PostCSS Configuration
 *
 * Tailwind CSS v4 (via @tailwindcss/vite) automatically sets up all required
 * PostCSS plugins — you do NOT need to include `tailwindcss` or `autoprefixer` here.
 *
 * This file only exists for adding additional PostCSS plugins, if needed.
 * For example:
 *
 * import postcssNested from 'postcss-nested'
 * export default { plugins: [postcssNested()] }
 *
 * Otherwise, you can leave this file empty.
 */
export default {}
```

---

## vite.config.ts

This is the main configuration file for the Vite build tool.

- **Purpose:**  
  To set up the build pipeline, specify plugins, and configure Vite for React and Tailwind CSS.

- **Plugins Used:**
  - `@vitejs/plugin-react`: Fast refresh for React.
  - `@tailwindcss/vite`: Integrates Tailwind v4 with Vite for fast CSS builds.

- **Config Structure:**
  - Uses `defineConfig` for type safety and better DX in TypeScript.
  - The plugins array enables both React and Tailwind support.

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### Build Process Flow

Below is a flowchart showing the build process from `vite.config.ts`:

```mermaid
flowchart TD
    A[Start Vite Dev Server] --> B[Apply Vite Plugins]
    B --> C[React Fast Refresh]
    B --> D[Tailwind CSS Processing]
    D --> E[PostCSS (additional plugins if any)]
    C --> F[Serve Bundled Files]
    E --> F
    F --> G[App Ready in Browser]
```

---

## tailwind.config.js

The Tailwind CSS configuration file.

- **Purpose:**  
  To configure Tailwind’s behavior and theming options.

- **Configuration:**
  - `darkMode: 'class'`: Enables dark mode toggling by adding a `class="dark"` to the root element.
  - `theme: { extend: {} }`: Placeholder for extending the default Tailwind theme.
  - `plugins: []`: Empty array; add plugins here to extend Tailwind’s functionality.

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## package-lock.json

An automatically generated file that locks dependencies to exact versions.

- **Purpose:**  
  To ensure reproducible installs for all developers and CI/CD systems.

- **Key Features:**
  - Records every installed package version and its tree.
  - Prevents version drift and unexpected bugs.
  - Should be committed to version control for consistent environments.

```json
{
  "name": "@figma/my-make-file",
  "version": "0.0.1",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "@figma/my-make-file",
      "version": "0.0.1",
      "dependencies": { ... },
      "devDependencies": { ... }
    },
    ...
  }
}
```

> **You should never manually edit `package-lock.json`. Always use npm or pnpm to manage dependencies.**

---

```card
{
  "title": "Best Practices",
  "content": "Keep configuration files under version control, avoid manual edits to lockfiles, and always credit third-party assets and libraries."
}
```

---

## Project Configuration Architecture

Below is a simplified C4 Container Diagram showing the relationships between the main configuration files and tooling:

```mermaid
C4Container
      title System Build and Configuration Context
      Person(dev, "Developer")
      Container(webapp, "React App", "Vite + React + Tailwind", "Main source code in src/")
      Container(vite, "Vite Config", "vite.config.ts", "Build tool configuration")
      Container(tailwind, "Tailwind Config", "tailwind.config.js", "CSS utility configuration")
      Container(postcss, "PostCSS Config", "postcss.config.mjs", "PostCSS plugin configuration")
      Container(pkg, "package.json", "NPM Manifest", "Declares dependencies, scripts, and overrides")
      Container(lock, "package-lock.json", "Dependency Lockfile", "Ensures reproducible installs")

      dev -> pkg : Installs dependencies
      dev -> vite : Configures build
      dev -> tailwind : Tweaks design system
      dev -> postcss : Adds extra CSS transforms
      dev -> lock : Ensures reproducibility
      pkg -> lock : Generates
      vite -> webapp : Builds and serves
      tailwind -> vite : Tailwind plugin for Vite
      postcss -> vite : Additional CSS processing
```

---

# Summary Table

| File                   | Type            | Purpose                                      |
|------------------------|-----------------|----------------------------------------------|
| `ATTRIBUTIONS.md`      | Markdown        | Legal attributions for UI/image assets       |
| `index.html`           | HTML            | App entry point, React mount target          |
| `package.json`         | JSON            | Manifest: metadata, deps, scripts            |
| `.gitignore`           | Text            | Git ignored files/directories                |
| `postcss.config.mjs`   | JS (ESM)        | PostCSS config, extra CSS plugins            |
| `vite.config.ts`       | TS              | Vite build/dev server config                 |
| `tailwind.config.js`   | JS (ESM/CJS)    | Tailwind CSS config                          |
| `package-lock.json`    | JSON            | Dependency lockfile                          |

---

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```
2. **Run the dev server:**
   ```bash
   npm run dev
   ```
3. **Build the app:**
   ```bash
   npm run build
   ```
4. **Open `index.html` in browser:**  
   The React app will mount at the `#root` element.

---

```card
{
  "title": "Need More Help?",
  "content": "Consult the official Vite, React, and Tailwind documentation for advanced configuration and troubleshooting."
}
```

---

**This documentation covers the main project configuration and setup. For source code, refer to the `/src` directory and component files.**