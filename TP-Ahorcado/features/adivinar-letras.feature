@US-02
Feature: Adivinar letras
  Como jugador
  quiero adivinar letras
  para ir descubriendo la palabra

  @CA-1
  Scenario: El jugador acierta una letra
    Given que abro la aplicacion con la palabra "GATO"
    When hago clic en iniciar partida
    And el jugador adivina la letra "A"
    Then veo la palabra oculta "_ A _ _"
    And veo 6 vidas