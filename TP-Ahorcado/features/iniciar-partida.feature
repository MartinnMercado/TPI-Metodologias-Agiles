# language: es
@US-01
Caracteristica: Iniciar partida
  Como jugador
  quiero iniciar una partida nueva
  para empezar a jugar al ahorcado

  @CA-1
  Escenario: El jugador ve el boton de inicio al entrar
    Dado que abro la aplicacion
    Entonces veo un boton para iniciar la partida

  @CA-2 @CA-3
  Escenario: El jugador inicia una partida con la palabra GATO
    Dado que abro la aplicacion con la palabra "GATO"
    Cuando hago clic en iniciar partida
    Entonces veo la palabra oculta "_ _ _ _"
    Y veo 6 vidas
