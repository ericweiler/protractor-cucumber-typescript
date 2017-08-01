Feature: Sample Feature File

@CucumberScenario
Scenario: Cucumber Google Search
Given I am on google page
When I type "Cucumber"
Then I click on search button
Then I clear the search text

@ProtractorScenario
Scenario: Protractor Google Search
Given I am on google page
When I type "Protractor"
Then I click on search button
Then I clear the search text

@ProtractorScenario
Scenario: TypeScript Google Search
Given I am on google page
When I type "TypeScript"
Then I click on search button
Then I clear the search text
