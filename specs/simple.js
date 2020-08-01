/*
// Author: Colin W. Fries
// Date: 12/xx/2019
// Description: Sample test spec for testing Allure Reports functionality.
// Maintenance History:
		- 08/01/2020 - c_fries@sbcglobal.net - add console logging for visual verification of Mocha retries in action.
*/

const { addFeature, addStep, addAttachment } = require('@wdio/allure-reporter').default;
const assert = require('assert');
const util = require('util');


describe('This is a test suite.', () => {
    it('This is a test case.', function() {
		console.log('Starting test');
        addFeature('Page Title Verification');
        browser.url('https://www.newbalance.com');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Athletic Footwear &amp; Fitness Apparel - New Balance');
        console.log('*****');
        console.log('Here is the test object.');
        console.log(this.test);
        console.log('*****');
    });

    afterEach('Take screenshot on failure', async function(){
        if (this.currentTest.state !== "passed") {
            let screenshot = await browser.saveScreenshot('./reports/screenshots/' + 'ERROR-chrome-' + Date.now() + '.png');
			console.log(util.inspect(screenshot));
            /*addStep('It failed.', 
                addAttachment(screenshot.name, Buffer.from(screenshot.values))
            );*/
        }
    });
});