@US-09
Feature: Ver letras ya usadas

  @CA-1
  Scenario: Las letras erradas aparecen en la seccion de letras usadas
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "B"
    And el jugador adivina la letra "C"
    Then veo las letras usadas "B, C"

  @CA-2
  Scenario: Las letras acertadas tambien aparecen en la seccion de letras usadas
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "G"
    And el jugador adivina la letra "B"
    Then veo las letras usadas "G, B"
