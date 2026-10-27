import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

// Abre la app sin palabra especifica (pantalla de inicio)
Given("que abro la aplicacion", async ({ page }) => {
  await page.goto("/");
});

// Abre la app inyectando la palabra por URL (seam de testing)
Given(
  "que abro la aplicacion con la palabra {string}",
  async ({ page }, palabra: string) => {
    await page.goto(`/?word=${palabra}`);
  },
);

// Abre la app inyectando palabra y dificultad por URL (seam de testing)
Given(
  "que abro la aplicacion con la palabra {string} y dificultad {string}",
  async ({ page }, palabra: string, dificultad: string) => {
    await page.goto(`/?word=${palabra}&dificultad=${dificultad}`);
  },
);

// Verifica que existe el boton para iniciar
Then("veo un boton para iniciar la partida", async ({ page }) => {
  await expect(
    page.getByRole("button", { name: /iniciar partida/i }),
  ).toBeVisible();
});

// El jugador hace clic en el boton de inicio
When("hago clic en iniciar partida", async ({ page }) => {
  await page.getByRole("button", { name: /iniciar partida/i }).click();
});

// El jugador tipea una letra en la caja de texto y presiona Enter
When(
  "el jugador adivina la letra {string}",
  async ({ page }, letra: string) => {
    const input = page.getByRole("textbox");
    await input.fill(letra);
    await input.press("Enter");
  },
);

// Verifica que la palabra aparece enmascarada con guiones separados por espacios
Then("veo la palabra oculta {string}", async ({ page }, esperada: string) => {
  await expect(page.getByTestId("word")).toHaveText(esperada);
});

// Verifica la cantidad de vidas disponibles
Then("veo {int} vidas", async ({ page }, vidas: number) => {
  await expect(page.getByTestId("lives")).toHaveText(String(vidas));
});

// Verifica el mensaje de estado del juego (ej: GANASTE, PERDISTE)
Then("veo el mensaje de estado {string}", async ({ page }, mensaje: string) => {
  await expect(page.getByTestId("game-status")).toHaveText(mensaje);
});

// Verifica que el campo de texto queda deshabilitado al terminar
Then("el campo para ingresar letras esta deshabilitado", async ({ page }) => {
  await expect(page.getByRole("textbox")).toBeDisabled();
});

// Verifica el puntaje obtenido
Then("veo el puntaje {string}", async ({ page }, puntaje: string) => {
  await expect(page.getByTestId("score")).toHaveText(puntaje);
});

// Verifica que se muestra la palabra real al perder
Then("veo la palabra revelada {string}", async ({ page }, palabra: string) => {
  await expect(page.getByTestId("palabra-revelada")).toHaveText(palabra);
});

// Verifica que el boton de reiniciar es visible
Then("veo el boton reiniciar", async ({ page }) => {
  await expect(
    page.getByRole("button", { name: /reiniciar partida/i }),
  ).toBeVisible();
});

// El jugador hace clic en reiniciar
When("hago clic en reiniciar", async ({ page }) => {
  await page.getByRole("button", { name: /reiniciar partida/i }).click();
});

// Verifica las letras usadas mostradas en la UI
Then(
  "veo las letras usadas {string}",
  async ({ page }, letras: string) => {
    await expect(page.getByTestId("letras-usadas")).toHaveText(letras);
  },
);