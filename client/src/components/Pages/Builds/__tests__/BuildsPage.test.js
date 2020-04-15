import React from 'react';
import { shallow, mount } from 'enzyme';
import { BuildsPage } from '../BuildsPage';
import { withRouterMock } from '../../../../tests/utils/withRouterMock';
import BuildList from '../../../Project/BuildList';

describe('BuildsPage component', () => {
  const props = {
    repoName: '',
    buildsData: [],
    isMore: true,
    onLoadMore: () => {},
    isFetchingBuilds: false,
  };

  const historyMock = { push: jest.fn() };

  afterEach(() => {
    historyMock.push.mockClear();
  });

  it('should render loader if isFetchingBuilds', () => {
    const nextProps = {
      ...props,
      isFetchingBuilds: true,
    };

    const buildsPage = mount(withRouterMock(<BuildsPage {...nextProps} />, historyMock));
    const loader = buildsPage.find('[data-testid="builds-loader"]').hostNodes();

    expect(loader.length).toBe(1);
  });

  it('should show error message if error', () => {
    const nextProps = {
      ...props,
      isFetchingBuilds: false,
      buildsError: 'Error message',
    };

    const buildsPage = mount(withRouterMock(<BuildsPage {...nextProps} />, historyMock));
    const errorMessage = buildsPage.find('[data-testid="builds-error"]').hostNodes();

    expect(errorMessage.length).toBe(1);
  });

  it('should show message if not builds', () => {
    const nextProps = {
      ...props,
      isFetchingBuilds: false,
      buildsData: [],
    };

    const buildsPage = mount(withRouterMock(<BuildsPage {...nextProps} />, historyMock));
    const loader = buildsPage.find('[data-testid="not-builds-message"]').hostNodes();

    expect(loader.length).toBe(1);
  });

  it('should rendered BuildsList', () => {
    const nextProps = {
      ...props,
      isFetchingBuilds: false,
      buildsData: [],
    };

    const buildsPage = mount(withRouterMock(<BuildsPage {...nextProps} />, historyMock));
    const loader = buildsPage.find(BuildList);

    expect(loader.length).toBe(1);
  });

  it('should not show build run Modal', () => {
    const buildsPage = mount(withRouterMock(<BuildsPage {...props} />, historyMock));
    const modal = buildsPage.find('[data-testid="build-run-modal"]');

    expect(modal.length).toBe(0);
  });

  it('should open Modal, if click on run button', () => {
    const buildsPage = mount(withRouterMock(<BuildsPage {...props} />, historyMock));
    const runBuildButton = buildsPage.find('[data-testid="run-build-button"]').hostNodes();

    runBuildButton.simulate('click');
    const modal = buildsPage.find('.Modal');

    expect(modal.length).toBe(1);
  });

  it('should forward to /settings if click on settings button', () => {
    const buildsPage = mount(withRouterMock(<BuildsPage {...props} />, historyMock));
    const settingsButton = buildsPage.find('[data-testid="settings-button"]').hostNodes();

    settingsButton.simulate('click');

    expect(historyMock.push.mock.calls[0][0]).toBe('/settings');
  });
});
