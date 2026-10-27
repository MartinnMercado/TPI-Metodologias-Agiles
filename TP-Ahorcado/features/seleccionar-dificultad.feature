@US-03
Feature: Seleccionar dificultad

  @CA-1
  Scenario: En modo facil el jugador arranca con 8 vidas
    Given que abro la aplicacion con la palabra "GATO" y dificultad "facil"
    When hago clic en iniciar partida
    Then veo 8 vidas

  @CA-2
  Scenario: En modo dificil el jugador arranca con 3 vidas
    Given que abro la aplicacion con la palabra "GATO" y dificultad "dificil"
    When hago clic en iniciar partida
    Then veo 3 vidas
