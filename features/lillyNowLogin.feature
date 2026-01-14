Feature: Lilly Now Login Functionality

  Scenario: Successful login to Lilly Now page
    Given User navigates to Lilly Now login page
    When User enters valid credentials
    And User clicks the login button
    Then User should be successfully logged in
    And Dashboard should be displayed
