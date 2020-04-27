import React from 'react';
import { mount } from 'enzyme';
import { MainPage } from '../MainPage';
import { withRouterMock } from '../../../../tests/utils/withRouterMock';

describe('MainPage component', () => {
  let mainPage = null;
  const historyMock = { push: jest.fn() };

  beforeEach(() => {
    mainPage = mount(withRouterMock(<MainPage />, historyMock));
  });

  afterEach(() => {
    historyMock.push.mockClear();
    mainPage = null;
  });

  it('should forward to /settings if click on open settings button', () => {
    const buttonSettings = mainPage.find('[data-testid="open-settings-button"]').hostNodes();

    buttonSettings.simulate('click');
    const path = historyMock.push.mock.calls[0][0];

    expect(path).toBe('/settings');
  });

  it('should forward to /settings if click on open settings icon button', () => {
    const buttonIconSettings = mainPage
      .find('[data-testid="open-settings-icon-button"]')
      .hostNodes();

    buttonIconSettings.simulate('click');
    const path = historyMock.push.mock.calls[0][0];

    expect(path).toBe('/settings');
  });
});
