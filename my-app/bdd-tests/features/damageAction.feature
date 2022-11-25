Feature: Test characters deal damage to each other

  Scenario Outline: Dealing Damage
    Given basic character is created
    When test <character_name> is created
    And basic character deals <damage> to <character_name>
    Then <character_name> <health> is right
    And <alive> is right
    Examples:
      | character_name    | damage    | health | alive     |
      | dragon            | 1000      | 0      |  false    |
      | masked basilisks  | 300       | 700    |  true     |
      | hydra             | 0         | 1000   |  true     |
