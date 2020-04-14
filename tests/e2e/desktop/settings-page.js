const { assert } = require('chai');

describe('Settings', async () => {
  beforeEach(async function() {
    await this.browser.deleteSettings();
  });

  it('open settings page', function() {
    return this.browser
      .url('/settings')
      .assertView('SettingsPage', 'body')
      .isExisting('[data-testid="settings-page"]')
      .then(assert.isTrue);
  });

  it('show is required validation errors', function() {
    return this.browser
      .url('/settings')
      .click('[type="submit"]')
      .elements('.FormGroup-Error')
      .then(({ value }) => assert.equal(value.length, 4));
  });

  it('save settings', function() {
    return this.browser
      .url('/settings')
      .setValue('[name="repoName"]', 'MOTORIST/eslint-plugin-lodash-to-native')
      .setValue('[name="buildCommand"]', 'yarn install')
      .setValue('[name="mainBranch"]', 'master')
      .setValue('[name="period"]', '13')
      .click('[type="submit"]')
      .waitForVisible('[data-testid="builds-page"]', 2000)
      .isExisting('[data-testid="builds-page"]')
      .then(assert.isTrue);
  });
});
