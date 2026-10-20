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