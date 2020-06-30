Feature: Demo Scenario

  Scenario: Demo E2E UI test
    Given I am on the sauce demo login page
    When I login to the sauce demo site
    And Sort the products by Price (high to low)
    Then The items should be sorted correctly on Price high to low

    And Add the cheapest product to your basket
    Then The cart count should get updated

    And Add the 2nd cheapest product to your basket
    Then The cart count should get updated

    And Open the basket
    Then The updated basket should display the correct products

    And Remove the cheapest product from your basket
    Then The cart count should get updated
    And The updated basket should display the correct products

    When Initiate checkout
    Then I Finish on the page where you need to enter your name and postal code