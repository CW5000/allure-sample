const { addFeature, addStep, addAttachment } = require('@wdio/allure-reporter').default;
const assert = require('assert');


describe('www.newbalance.com - \'describe\' corresponds to a Test Suite.', () => {
    it('should have the right title - \'it\' corresponds to a Test Case.', () => {
        addFeature('Page Title Verification')
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
            addStep('It failed.', 
                addAttachment(screenshot.name, Buffer.from(screenshot.values))
            );
        }
    });
});