Feature: Login Validation

    @login
    Scenario:Login with valid username and password
    Given I am on the login page 
    When I signup with a valid username "userpms452" and password "pass@pms501" and click on login button
    Then the login should be successfull and Welcome "userpms452" user should be shown

    Scenario:Login with invalid username and valid password
    Given I am on the login page
    When I login with a invalid username "userms452" and valid password "pass@pms501" and click on login button
    Then the login should show error message User does not exist

    Scenario:Login with invalid username and invalid password 
    Given I am on the login page
    When I login with a invalid username "userms452" and invalid password "pass@ms501" and click on login button
    Then the login should show error message User does not exist.

    Scenario:Login with valid credentials and logout
    Given I am on the login page
    When I login with a valid username "userpms452" and password "pass@pms501" and click on logout button 
    Then the signup menu should be seen

