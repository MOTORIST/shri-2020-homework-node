const { assert } = require('chai');

describe('Builds page', async () => {
  beforeEach(async function() {
    await this.browser.saveSettings();
    await this.browser.url('/').localStorage('POST', { key: 'isSetSettings', value: 'true' });
  });

  it('show empty builds page', function() {
    return this.browser
      .url('/')
      .waitForVisible('[data-testid="not-builds-message"]', 3000)
      .assertView('EmptyBuildsPage', 'body')
      .isExisting('[data-testid="builds-page"]')
      .then(assert.isTrue);
  });

  it('run build', function() {
    return this.browser
      .url('/')
      .click('[data-testid="run-build-button"]')
      .setValue('[name="commitHash"]', '1a37add1d5272e4fb1910bf6be2b82f233260a93')
      .click('.Modal [type="submit"]')
      .waitForVisible('[data-testid="build-page"]', 3000)
      .isExisting('[data-testid="build-page"]')
      .then(assert.isTrue);
  });

  //   it('isMore', function() {}); // TODO: add isMore test
});
