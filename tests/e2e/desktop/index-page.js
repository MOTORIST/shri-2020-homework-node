const { assert } = require('chai');

describe('Index page', async () => {
  it('should rendered MainPage if isSetSettings localStorage key is undefined', async function() {
    await this.browser.url('/').localStorage('DELETE', { key: 'isSetSettings' });

    return this.browser
      .url('/')
      .localStorage('DELETE', { key: 'isSetSettings' })
      .isExisting('[data-testid="main-page"]')
      .then(assert.isTrue);
  });

  it('should rendered BuildsPage if isSetSettings localStorage key is true', function() {
    return this.browser
      .localStorage('POST', { key: 'isSetSettings', value: 'true' })
      .url('/')
      .isExisting('[data-testid="builds-page"]')
      .then(assert.isTrue);
  });
});
