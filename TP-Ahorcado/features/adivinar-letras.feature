@US-07 @US-08
Feature: Ingresar letras y ver aciertos y errores
  Como jugador
  quiero ingresar letras
  para ir descubriendo la palabra y ver mis vidas restantes

  @CA-1
  Scenario: El jugador acierta una letra
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "A"
    Then veo la palabra oculta "_ A _ _"
    And veo 6 vidas

  @CA-2
  Scenario: El jugador falla una letra
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "E"
    Then veo la palabra oculta "_ _ _ _"
    And veo 5 vidas

  @CA-3
  Scenario: El jugador no pierde vidas al repetir una letra ya usada
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "E"
    And el jugador adivina la letra "E"
    Then veo 5 vidas