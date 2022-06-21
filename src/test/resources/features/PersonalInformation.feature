Feature: Add new primary skill
  @Type3
  Scenario: Adding new primary skill
  Given User is logged into the application
  And User is on personal information page
  When User clicks the edit skill button, type new skills and hit save button
  Then New skill is added in primary skills

##Feature: Clicking on personal information page
#  @Type1
#  Scenario:
#    Given User has logged into the application
#    And User is on Dashboard
#    When User clicks on personal information tab
#    Then He should be redirected to personal information page
#
#    #
##Feature: ESS Plus login feature
#  @Type2
#  Scenario:  Check login successful with valid credentials
#    Given User opens the browser and open url
#    And title of login page is Login
#    When User types the valid username and password and hit login
#    Then user should be redirected to dashboard
#
