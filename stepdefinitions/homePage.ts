import { browser } from 'protractor';
import { SearchPageObject } from '../pages/searchPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given }) {
    let search: SearchPageObject = new SearchPageObject();

    Given(/^I am on google page$/, async () => {
        //STEP LOGIC GOES HERE
    });
    
    When(/^I type "(.*?)"$/, async (text) => {
        //STEP LOGIC GOES HERE
    });

    Then(/^I click on search button$/, async () => {
        //STEP LOGIC GOES HERE
    });
    
    Then(/^I clear the search text$/, async () => {
        //STEP LOGIC GOES HERE
    });
})
