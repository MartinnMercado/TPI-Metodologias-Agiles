# 🎯 Juego del Ahorcado - TPI Metodologías Ágiles

**Trabajo Práctico Integrador** desarrollado para la materia **Metodologías Ágiles** de la carrera de **Ingeniería en Sistemas de Información**.

## 📖 Visión del Producto
*(Definida en la Inception)*

Desarrollar una versión interactiva del clásico "Juego del Ahorcado" aplicando marcos de trabajo ágiles (Scrum) y prácticas técnicas de **Extreme Programming (XP)**, con un enfoque principal en **Test-Driven Development (TDD)** y **Acceptance Test-Driven Development (ATDD)**. El objetivo es construir una aplicación web funcional demostrando el uso disciplinado de prácticas de ingeniería ágil y el trabajo en equipo (rotación de pares).

## 🚀 Prácticas Técnicas y Proceso de Desarrollo
Este proyecto se construye siguiendo la Guía de ATDD, asegurando la calidad en dos niveles (doble loop *outside-in*):

1.  **Acceptance Tests (Loop Externo):** Utilizando **Cucumber/Gherkin**, automatizamos el comportamiento de la aplicación desde la perspectiva del usuario (vía un navegador real usando Playwright/Selenium). Mínimo 4 ATs que trazan directamente a nuestras Historias de Usuario.
2.  **Unit Tests (Loop Interno):** La lógica de dominio se construye mediante **TDD** estricto, sin depender del DOM ni de la UI.
3.  **Proceso Rojo/Verde:** Cada test (unitario o de aceptación) se evidencia en el historial de Git con commits explícitos `RED: [mensaje]` y `GREEN: [mensaje]`.
4.  **Trazabilidad:** La relación entre Historias de Usuario -> Acceptance Tests -> Unit Tests está documentada y es trazable bidireccionalmente (ver `NOTES.md` y nuestro [Story Map](StoryMapAhorcado.html)).
5.  **Rotación de Autores:** El desarrollo es colaborativo; cada integrante actúa como autor de al menos 3 ciclos TDD (RED/GREEN).

## 🛠️ Stack Tecnológico Sugerido
- **Lenguaje:** TypeScript (sugerido por baja fricción).
- **Lógica de Dominio:** Unit tests con **Vitest**.
- **Interfaz (UI):** Vite (Dev Server).
- **Acceptance Tests:** **Cucumber** (Gherkin) integrado con **Playwright-bdd**.
- **Control de Versiones:** Git & GitHub (Single Repository).

## 🔄 Integración y Despliegue Continuo (CI/CD)
El proyecto cuenta con un Pipeline automatizado (por ej., GitHub Actions) que se ejecuta en cada *push* a la rama principal. El pipeline falla y se detiene si no se cumplen las políticas de calidad:

1.  **Build:** Compilación exitosa del proyecto.
2.  **Unit Tests:** Ejecución al 100% en verde.
3.  **Code Coverage:** Umbral mínimo del **90%** exigido sobre el código de dominio (corta el pipeline si no se cumple).
4.  **Análisis Estático (Quality Gate):** Integración con herramientas (ej. SonarQube Cloud) para asegurar la calidad del código, configurado para cortar el pipeline ante fallos.
5.  **Acceptance Tests:** Ejecución en el pipeline de las pruebas automatizadas (Cucumber + Browser real).
6.  **Deploy a Producción:** Despliegue automático (ej. Vercel, Netlify, GitHub Pages) encadenado al éxito de todos los pasos anteriores. La aplicación final estará accesible online.

## 👥 Equipo de Trabajo
- Integrante 1: Francisco Papaolo
- Integrante 2: Alvaro Renzi
- Integrante 3: Lucio Pecoraro
- Integrante 4: Martín Mercado

*(Nota: Todos los integrantes rotan en la escritura de tests y código de producción)*
