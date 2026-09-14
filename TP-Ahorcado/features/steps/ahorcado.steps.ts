import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

// Abre la app sin palabra especifica (pantalla de inicio)
Given('que abro la aplicacion', async ({ page }) => {
  await page.goto('/');
});

// Abre la app inyectando la palabra por URL (seam de testing)
Given('que abro la aplicacion con la palabra {string}', async ({ page }, palabra: string) => {
  await page.goto(`/?word=${palabra}`);
});

// Verifica que existe el boton para iniciar
Then('veo un boton para iniciar la partida', async ({ page }) => {
  await expect(page.getByRole('button', { name: /iniciar partida/i })).toBeVisible();
});

// El jugador hace clic en el boton de inicio
When('hago clic en iniciar partida', async ({ page }) => {
  await page.getByRole('button', { name: /iniciar partida/i }).click();
});

// Verifica que la palabra aparece enmascarada con guiones separados por espacios
Then('veo la palabra oculta {string}', async ({ page }, esperada: string) => {
  await expect(page.getByTestId('word')).toHaveText(esperada);
});

// Verifica la cantidad de vidas disponibles al iniciar
Then('veo {int} vidas', async ({ page }, vidas: number) => {
  await expect(page.getByTestId('lives')).toHaveText(String(vidas));
});