const base = require("@playwright/test");

exports.customtest = base.test.extend({
    
    testDataSignUp: {
        username: "userpms" + Date.now(),
        password: "pass@pms" + Date.now()
    },

    page: async ({ page }, use) => {
        await page.goto('/');
        await use(page);
    }
    
    

});



