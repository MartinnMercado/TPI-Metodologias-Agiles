import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Los unit tests corren en Node, sin navegador
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    coverage: {
      // Solo medimos cobertura del dominio (la logica del juego)
      include: ['src/domain/**'],
      thresholds: { lines: 90, functions: 90, branches: 90, statements: 90 }
    }
  },
});
