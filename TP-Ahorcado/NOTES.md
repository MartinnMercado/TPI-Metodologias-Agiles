# NOTES — TP Ahorcado

## Historia de usuario que estamos atacando primero

### US-01 — Iniciar partida nueva

**Como** jugador
**Quiero** iniciar una partida nueva
**Para** empezar a jugar al ahorcado

### Por que arrancamos con esta historia

Al principio ibamos a arrancar con US-07 (ingresar una letra), pero nos dimos cuenta de
que no tiene sentido pensar en adivinar letras si todavia no hay una partida en curso con
una palabra a descubrir. US-01 es el punto de entrada de todo: sin ella no existe el juego.

Ademas, el Story Map lo deja claro: el backbone del jugador empieza en "Iniciar Partida"
(epic 1) y desde ahi baja al resto. Siguiendo ese orden natural, US-01 va primero.

En los tests, la palabra se inyecta por la URL (?word=GATO) para que sea siempre la
misma y el resultado sea predecible.

### Criterios de aceptacion (lo que define que la historia esta terminada)

- CA-1: Al entrar a la app, veo un boton para iniciar partida.
- CA-2: Al tocarlo, el juego selecciona una palabra y arranca la partida.
- CA-3: No puedo empezar a adivinar letras antes de iniciar la partida.
- CA-4: Cada partida nueva usa una palabra distinta a la anterior (si el mazzo lo permite).

---

## Trazabilidad: Historia -> AT -> Unit Tests

### US-01

| Criterio | Escenario (AT) | Unit Tests del objeto Ahorcado |
|---|---|---|
| CA-1 y CA-2: al iniciar, arranca la partida con una palabra | Iniciar partida: el jugador ve la palabra oculta con guiones y 6 vidas | Ahorcado se crea con una palabra; la palabra enmascarada muestra guiones para cada letra |
| CA-3: no se puede adivinar antes de iniciar | (cubierto por el AT anterior: sin partida iniciada no hay input disponible) | - |

---

## Estado de las historias tomadas

| Historia | Escenarios | Estado |
|---|---|---|
| US-01 Iniciar partida nueva | AT: iniciar partida, ver palabra oculta | En progreso |

---

## Como leer la trazabilidad de este repo

Cada archivo .feature lleva la etiqueta de la historia que confirma (ej: @US-01)
y cada escenario lleva la etiqueta del criterio que cubre (ej: @CA-1).
Los unit tests del dominio estan en 	ests/Ahorcado.test.ts.

Para ver todos los AT de una historia:
  npx bddgen && npx playwright test --grep @US-01

Para saber que unit tests corresponden a cada AT, ver la tabla de arriba.
