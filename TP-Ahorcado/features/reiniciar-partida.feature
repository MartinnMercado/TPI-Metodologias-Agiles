@US-13
Feature: Reiniciar partida

  @CA-1
  Scenario: El jugador puede reiniciar la partida tras perder
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "B"
    And el jugador adivina la letra "C"
    And el jugador adivina la letra "D"
    And el jugador adivina la letra "E"
    And el jugador adivina la letra "F"
    And el jugador adivina la letra "H"
    Then veo el boton reiniciar
    When hago clic en reiniciar
    And hago clic en iniciar partida
    Then veo la palabra oculta "_ _ _ _"
    And veo 6 vidas