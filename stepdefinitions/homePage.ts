import { browser } from 'protractor';
import { SearchPageObject } from '../pages/searchPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given }) {
    Given(/^I am on google page$/, async () => {
        await expect(browser.getTitle()).to.eventually.equal('Google');
    });
    
    When(/^I type "(.*?)"$/, async (text) => {
        let searchBox = $("input[name='q']");
        await searchBox.sendKeys(text);
    });

    Then(/^I click on search button$/, async () => {
        let searchButton = $("input[value='Google Search']");
        await searchButton.click();
    });
    
    Then(/^I clear the search text$/, async () => {
        let searchBox = $("input[name='q']");
        searchBox.clear();
    });
})
