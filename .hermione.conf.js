require('dotenv').config();

module.exports = {
  baseUrl: 'http://localhost:3000',
  screenshotsDir: 'tests/e2e/screens',
  sets: {
    desktop: {
      files: 'tests/e2e/desktop',
    },
  },
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          // args: ['--window-size=1366,768', '--auto-open-devtools-for-tabs'],
          args: ['--headless', '--window-size=1366,768'],
        },
      },
    },
  },
  plugins: {
    'html-reporter/hermione': {
      enabled: true,
      path: 'tests/e2e/hermione-reports',
      defaultView: 'all',
      baseHost: 'http://localhost:3000',
    },
  },
  prepareBrowser: function(browser) {
    browser.addCommand('deleteSettings', require('./tests/e2e/commands/delete-settings.command'));
  },
};
