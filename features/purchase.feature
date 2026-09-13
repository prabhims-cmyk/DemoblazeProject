Feature: Purchase Validation

    @purchase
    Scenario:Select a product add to cart and purchase product
    
    Given I am logged in to the site 
    When I login with correct username "userpms452" and password "pass@pms501"
    And I select the product "Samsung galaxy s6" and add to the cart 
    Then the product should be added successfully to the cart 
    When I open the cart menu 
    Then the selected product "Samsung galaxy s6" should be displayed in the cart
    Then I click on the Place Order button
    When I add the details like "<name>","<country>","<city>","<card>","<month>","<year>" to place the Order and click on the purchase button
    Then the Thank you for your purchase! should be displayed
    Then choosing the OK button will redirect to homepage

     Examples:
        |name    |country|city|card  |month  |year|
        |Testuser|India  |Bglr|123456|January|2026|
