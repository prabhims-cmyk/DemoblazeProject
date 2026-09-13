import {test as basetest, Page} from "@playwright/test";
interface TestDataSignUp{
        username : string;
        password : string;

}
export const customtest = basetest.extend<{testDataSignUp : TestDataSignUp}>({  // object customtest is the subclass of testcases
    testDataSignUp:{
        username: "userpms" + Math.floor(Math.random() * 1000),
        password: "pass@pms" + Math.floor(Math.random() * 1000)
    },

    page: async ({ page }, use) => {
        await page.goto('/');
        await use(page);
    }

})




