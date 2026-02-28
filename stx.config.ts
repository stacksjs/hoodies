import type { StxConfig } from '@stacksjs/stx'

const config: StxConfig = {
  // Pages directory for file-based routing
  pagesDir: 'pages',

  // Partials directory (where @include resolves from)
  partialsDir: '.',

  // Components directory
  componentsDir: 'components',

  // Public assets directory
  publicDir: 'public',

  // Enable caching in production
  cache: process.env.NODE_ENV === 'production',

  // Debug mode in development
  debug: process.env.NODE_ENV !== 'production',
}

export default config
