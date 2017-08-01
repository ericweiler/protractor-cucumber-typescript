import { browser } from 'protractor';
import { SearchPageObject } from '../pages/searchPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given }) {
    let search: SearchPageObject = new SearchPageObject();

    Given(/^I am on google page$/, async () => {
        await expect(browser.getTitle()).to.eventually.equal('Google');
    });
    
    When(/^I type "(.*?)"$/, async (text) => {
        await search.searchTextBox.sendKeys(text);
    });

    Then(/^I click on search button$/, async () => {
        await search.searchButton.click();
    });
    
    Then(/^I clear the search text$/, async () => {
        await search.searchTextBox.clear();
    });
})
