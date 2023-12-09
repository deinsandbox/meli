import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
    setupFiles: '.vitest/setup.js',
  },
})
