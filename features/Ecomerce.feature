Feature: Ecomerce Validations

    @regression

    Scenario Outline: Scenario Outline name: Placing the order with valid data
    Given Login a Ecomerce application with valid  "<username>" and "<password>"
    When Add "zara coat 3" to the cart and checkout
    Then Verify "Zara Coat 3" is displayed in the cart
    When Enter valid details and place the order
    Then verify order in present in OrderHistoryPage 

    Examples:

    |username          | password   |
    |anshika@gmail.com | Iamking@000|
    | navya@gmail.com  | Navya@000  |
