# NOTES — TP Ahorcado

## Historia de Usuario que estamos atacando primero

### US-07 — Ingresar una letra

**Como** jugador
**Quiero** ingresar una letra
**Para** intentar descubrir la palabra

### Por que elegimos esta historia

US-07 es el nucleo del juego. Sin ella, el Ahorcado no puede existir: es la accion
principal que el jugador realiza. Ademas, sus criterios de aceptacion obligan a disenar
y testear con TDD el objeto Ahorcado desde el principio (la logica de adivinar letras),
construyendo una base solida para todo lo que viene despues.

### Criterios de aceptacion (lo que define que la historia esta terminada)

- CA-1: Solo se acepta una letra por vez.
- CA-2: Si la letra esta en la palabra, se revela en todas sus posiciones.
- CA-3: Si la letra no esta en la palabra, se registra como error.
- CA-4: No se puede repetir una letra ya ingresada en esa partida.

---

## Trazabilidad: Historia -> AT -> Unit Tests

### US-07

| Criterio | Escenario (AT) | Unit Tests del objeto Ahorcado |
|---|---|---|
| CA-2: letra presente se revela | El jugador acierta una letra | revela todas las ocurrencias de la letra acertada; es case-insensitive |
| CA-3: letra ausente cuenta como error | El jugador falla una letra | letra ausente descuenta una vida; la palabra no cambia |
| CA-4: no se puede repetir letra | El jugador repite una letra | no penaliza si la letra ya fue intentada; informa que ya fue usada |

---

## Estado de las historias tomadas

| Historia | Escenarios | Estado |
|---|---|---|
| US-07 Ingresar una letra | AT: acertar, fallar, repetir letra | En progreso |

---

## Como leer la trazabilidad de este repo

Cada archivo .feature lleva la etiqueta @US-07 (o el ID de la historia correspondiente)
en su Caracteristica, y cada escenario lleva la etiqueta del criterio de aceptacion que confirma
(ej: @CA-2). Los unit tests del dominio estan en 	ests/Ahorcado.test.ts y esta tabla
los vincula con sus escenarios.

Para ver todos los AT de una historia:
  npx bddgen && npx playwright test --grep @US-07

Para ver todos los unit tests relacionados, buscar en tests/Ahorcado.test.ts
los bloques describe correspondientes o consultar esta tabla.
