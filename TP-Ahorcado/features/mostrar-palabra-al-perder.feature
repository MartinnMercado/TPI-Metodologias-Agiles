@US-12
Feature: Mostrar la palabra secreta al perder

  @CA-1
  Scenario: Al perder se revela la palabra secreta
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "B"
    And el jugador adivina la letra "C"
    And el jugador adivina la letra "D"
    And el jugador adivina la letra "E"
    And el jugador adivina la letra "F"
    And el jugador adivina la letra "H"
    Then veo la palabra revelada "GATO"