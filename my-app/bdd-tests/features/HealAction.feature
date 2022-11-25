Feature: Test characters heal each other

  Scenario Outline: Healing
    Given basic character is created
    When test <character_name> is created
    And basic character heals <healing> to <character_name>
    Then <character_name> <health> is right
    And <error> is right
    Examples:
      | character_name    | healing   | health | error   |
      | dragon            | 1         | 1000   |  true   |
      | masked basilisks  | 300       | 500    |  false  |
      | hydra             | 0         | 500    |  false  |
