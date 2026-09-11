const config = ({
  testDir:'./tests',
  workers:4,
  timeout:40*1000,
  expect:{
    timeout:40*1000
  },
  reporter: [
        ['html'],
        ['allure-playwright']
    ],
  use:{
    baseURL: 'https://www.demoblaze.com',
    browserName:'chromium',
    headless:false,
    screenshot: 'on',
    trace: 'on'
  }
});
module.exports = config; 