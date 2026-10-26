@US-11
Feature: Finalizar partida
  Como jugador
  quiero saber si gane o perdi
  para conocer el resultado de la partida

  @CA-1
  Scenario: El jugador pierde la partida al agotar las vidas
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "B"
    And el jugador adivina la letra "C"
    And el jugador adivina la letra "D"
    And el jugador adivina la letra "E"
    And el jugador adivina la letra "F"
    And el jugador adivina la letra "H"
    Then veo 0 vidas
    And veo el mensaje de estado "PERDISTE"
