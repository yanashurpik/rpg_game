Feature: Test character properties while creating new character

  Scenario Outline: Creating character
    When character is created
    Then <character_property> has right <value>
    Examples:
      | character_property | value |
      | health             | 1000  |
      | level              | 1     |
      | alive              |  true |
