# NOTES — TP Ahorcado

## Historia de usuario que estamos atacando primero

### US-01 — Iniciar partida nueva

**Como** jugador
**Quiero** iniciar una partida nueva
**Para** empezar a jugar al ahorcado

### Por que arrancamos con esta historia

Arrancamos con US-01 porque es el punto de entrada de todo el juego. No tiene sentido
pensar en adivinar letras si primero no hay una partida iniciada con una palabra. El
Story Map lo refleja: el flujo del jugador empieza en "Iniciar Partida".

Durante los tests, la palabra se inyecta por la URL (?word=GATO) para que el resultado
sea siempre predecible.

### Criterios de aceptacion

Escritos desde lo que el jugador ve, con ejemplo concreto (palabra GATO):

- CA-1: Al entrar a la app, veo un boton para iniciar la partida.
- CA-2: Al hacer clic en ese boton, veo la palabra oculta representada con guiones
        separados por espacios. Con GATO: veo "_ _ _ _".
- CA-3: Al iniciar, veo cuantas vidas tengo disponibles (6 al empezar).

---

## Trazabilidad: Historia -> AT -> Unit Tests

### US-01

| Criterio | Escenario (AT) | Unit Tests del objeto Ahorcado |
|---|---|---|
| CA-1: veo el boton al entrar | El jugador ve el boton de inicio | (no requiere logica de dominio, es solo UI) |
| CA-2: veo la palabra con guiones al iniciar | El jugador inicia una partida con GATO y ve "_ _ _ _" | Ahorcado con "GATO" devuelve "_ _ _ _" en palabraEnmascarada() |
| CA-3: veo 6 vidas al iniciar | (mismo escenario que CA-2) | Ahorcado arranca con 6 vidas en vidas() |

---

## Estado de las historias tomadas

| Historia | Escenarios | Estado |
|---|---|---|
| US-01 Iniciar partida nueva | AT: ver boton, iniciar con GATO | En progreso |

---

## Como leer la trazabilidad de este repo

Cada .feature lleva la etiqueta de la historia (@US-01) y cada escenario lleva la del
criterio que confirma (@CA-1, @CA-2, etc.).

Para correr solo los AT de una historia:
  npx bddgen && npx playwright test --grep @US-01
