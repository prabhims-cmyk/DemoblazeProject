Feature: Signup Validation

    @regression
    Scenario:Enter the username and password and click signup
    Given I am on the signup page
    When I signup with a random username and password
    Then the signup should be successful

    Scenario:Enter the username and password and click close
    Given I am on the signup page
    When I signup with a random username and password and click on the close button
    Then the signup menu should be seen

