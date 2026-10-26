@US-14
Feature: Consultar puntaje al finalizar
  Como jugador
  quiero ver mi puntaje al finalizar la partida
  para conocer mi desempeno

  @CA-1
  Scenario: El jugador gana y ve su puntaje segun vidas restantes
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "G"
    And el jugador adivina la letra "A"
    And el jugador adivina la letra "T"
    And el jugador adivina la letra "O"
    Then veo el puntaje "Puntaje: 600"