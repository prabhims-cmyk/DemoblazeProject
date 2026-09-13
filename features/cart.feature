Feature: Cart Validation

    @cart
    Scenario:Select a product add to cart 
    
    Given I am logged in and ready to shop 
    When I login with valid username "userpms452" and valid password "pass@pms501"
    And I select the product "Samsung galaxy s7" 
    And I add the product to cart 
    Then the product should be added successfully 
    When I open the cart 
    Then the product "Samsung galaxy s7" should be displayed in the cart 
    When I delete the product from the cart 
    Then the product should be removed from the cart