const base = require("@playwright/test");

exports.customtest = base.test.extend({
    
    testDataSignUp: {
        username: "userpms" + Math.floor(Math.random() * 1000),
        password: "pass@pms" + Math.floor(Math.random() * 1000)
    },

    page: async ({ page }, use) => {
        await page.goto('/');
        await use(page);
    }
    
    

});



