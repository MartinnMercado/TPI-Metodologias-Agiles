@US-01
Feature: Iniciar partida
  Como jugador
  quiero iniciar una partida nueva
  para empezar a jugar al ahorcado

  @CA-1
  Scenario: El jugador ve el boton de inicio al entrar
    Given que abro la aplicacion
    Then veo un boton para iniciar la partida

  @CA-2 @CA-3
  Scenario: El jugador inicia una partida con la palabra GATO
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    Then veo la palabra oculta "_ _ _ _"
    And veo 6 vidas