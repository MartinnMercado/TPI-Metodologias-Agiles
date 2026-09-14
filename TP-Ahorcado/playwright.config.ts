import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// playwright-bdd genera los tests de Playwright a partir de los .feature + steps
const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'features/steps/**/*.ts',
});

export default defineConfig({
  testDir,
  use: {
    // La app corre en este puerto cuando hacemos npm run dev
    baseURL: 'http://localhost:5173',
  },
  // El webServer levanta la app automaticamente antes de correr los AT
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
