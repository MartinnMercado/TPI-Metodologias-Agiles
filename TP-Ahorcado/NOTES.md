# NOTES — TP Ahorcado

## Story Map del proyecto
El Story Map interactivo con las Historias de Usuario está disponible en: [StoryMapAhorcado.html](../StoryMapAhorcado.html)

---

## 📌 Metodología de Releases: Primero el MVP (Release 1)
Siguiendo las metodologías ágiles (Scrum/XP), **primero se construye el MVP (Release 1) completo** para tener un juego jugable de punta a punta.  
Las historias de **Release 2** (como `US-02 Ver instrucciones` o `US-04 Categorías`) se abordan recién cuando el MVP esté finalizado.

---

## Historias de usuario tomadas (MVP - Release 1)

### US-01 — Iniciar partida nueva (Terminada ✅)

**Como** jugador  
**Quiero** iniciar una partida nueva  
**Para** empezar a jugar al ahorcado  

#### Criterios de aceptación:
- **CA-1:** Al entrar a la app, veo un botón para iniciar la partida.
- **CA-2:** Al hacer clic en ese botón, veo la palabra oculta representada con guiones separados por espacios. Con GATO: veo "_ _ _ _".
- **CA-3:** Al iniciar, veo cuántas vidas tengo disponibles (6 al empezar).

---

### US-07 / US-08 — Ingresar una letra y ver aciertos y errores (En progreso 🟡)

> **Trazabilidad con el Story Map:**  
> Corresponde a la épica **Jugar** del MVP:
> - **US-07 (MVP):** *Como jugador quiero ingresar una letra para ir descubriendo la palabra.*
> - **US-08 (MVP):** *Como jugador quiero ver mis aciertos y errores para saber cuántas vidas me quedan.*  
> *(Nota: En la Guía de la cátedra se las llamó genéricamente AT-2 / AT-3 / HU-02)*.

#### Criterios de aceptación:
- **CA-1 (Acierto):** Al acertar una letra presente en la palabra, se revela en sus posiciones sin perder vidas. Con GATO y letra A: veo "_ A _ _" y 6 vidas.
- **CA-2 (Fallo):** Al arriesgar una letra que no pertenece a la palabra, no se revela ninguna letra y se descuenta una vida. Con GATO y letra E: veo "_ _ _ _" y 5 vidas.

---

## Trazabilidad: Historia -> AT -> Unit Tests

### US-01 Iniciar partida nueva
| Criterio | Escenario (AT) | Unit Tests del objeto Ahorcado | Estado |
|---|---|---|---|
| CA-1: veo el botón al entrar | El jugador ve el botón de inicio al entrar (@CA-1) | (no requiere lógica de dominio, es solo UI) | Verde ✅ |
| CA-2: veo la palabra con guiones al iniciar | El jugador inicia una partida con GATO (@CA-2 @CA-3) | `palabraEnmascarada()` con GATO y PERRO | Verde ✅ |
| CA-3: veo 6 vidas al iniciar | El jugador inicia una partida con GATO (@CA-2 @CA-3) | `vidas()` arranca en 6 | Verde ✅ |

### US-07 / US-08 Ingresar letra y ver aciertos/errores (Jugar)
| Criterio | Escenario (AT) | Unit Tests del objeto Ahorcado | Estado |
|---|---|---|---|
| CA-1: acertar letra revela posiciones sin descontar vidas | El jugador acierta una letra (@CA-1) | `adivinar('A')` revela letra en `palabraEnmascarada()` | Verde ✅ |
| CA-2: fallar letra descuenta una vida | El jugador falla una letra (@CA-2) | `adivinar('E')` descuenta 1 vida en `vidas()` | Pendiente ⏳ |

---

## Estado de las historias tomadas

| Historia | Release | Escenarios | Estado |
|---|---|---|---|
| US-01 Iniciar partida nueva | MVP (R1) | AT: ver botón, iniciar con GATO y 6 vidas | **Terminada** ✅ |
| US-07 / US-08 Ingresar letra (aciertos y errores) | MVP (R1) | AT: acertar letra ('A') / fallar letra ('E') | **En progreso** 🟡 |

---

## Cómo leer la trazabilidad de este repo

Cada `.feature` lleva la etiqueta de la historia (`@US-01`, `@US-07`, `@US-08`) y cada escenario lleva la del criterio que confirma (`@CA-1`, `@CA-2`, etc.).

Para correr solo los AT de una historia:
```bash
npx bddgen && npx playwright test --grep @US-01
npx bddgen && npx playwright test --grep @US-07
```
