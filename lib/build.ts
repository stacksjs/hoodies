/**
 * Build script to bundle stores for browser use
 */
import { build } from 'bun'
import { writeFileSync, readFileSync } from 'fs'

const result = await build({
  entrypoints: ['./lib/stores/index.ts'],
  outdir: './public/js',
  target: 'browser',
  format: 'iife',
  naming: 'stores.js',
  minify: false,
  define: { 'process.env.NODE_ENV': '"production"' }
})

if (!result.success) {
  console.error('Build failed:', result.logs)
  process.exit(1)
}

// Wrap to export globally
const bundlePath = './public/js/stores.js'
let bundle = readFileSync(bundlePath, 'utf-8')
bundle = bundle.replace(/^\(\(\) => \{/, 'window.AppStores = (function() {')
bundle = bundle.replace(/\}\)\(\);?\s*$/, '  return exports_stores;\n})();')

writeFileSync(bundlePath, `/**
 * App Stores - Browser Bundle
 * Auto-generated, do not edit
 */
${bundle}
`)
console.log('Stores built to public/js/stores.js')
