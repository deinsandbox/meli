import { defineConfig } from 'vitest/config'

export default defineConfig({
   test: {
     globals: true,
     resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
     environment: 'jsdom',
     setupFiles: '.vitest/setup.js',
   },
})