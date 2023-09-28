# cv.konx.dev

Vue 3 with vite SPA for my current cv, hosted via netlify

## Project Setup

```sh
pnpm install
```

The project uses Prettier and ESLint, the first is configured to format on commit, with the latter on save. Prettier uses husky to perform a pre-commit hook.

```sh
pnpm prepare
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

## Code Quality & Formatting

### Code Quality

This is handled by Eslint and the various associated plugins, it leverages vite (vite-plugin-eslint) in order to check CODE QUALITY ONLY and will fail on any rules not passed, warnings such as missing indexes are automatically fixed.

### Formatting

Handled by Prettier, this aims to introduce consistent formatting throughout the project such as tabs rather than spaces, trailing commas etc. To format either run the command `pnpm format` before committing or if using a supported IDE such as vscode configure via the prettier extension to format on save.
A Prettier plugin is configured on this project to re-order the tailwind classes as per the plugins preference (base > components > utilities). media queries and modifiers also follow after.
