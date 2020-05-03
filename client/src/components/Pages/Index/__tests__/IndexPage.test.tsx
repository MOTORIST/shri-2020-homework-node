import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '..';
import MainPage from '../../Main';
import BuildsPage from '../../Builds';
import { useSelector } from 'react-redux';
import { mocked } from 'ts-jest/utils';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockedUseSelector = mocked(useSelector);

describe('IndexPage component', () => {
  // Bug Enzyme shallow render with useSelector - https://github.com/enzymejs/enzyme/issues/2202

  afterEach(() => {
    mockedUseSelector.mockClear();
  });

  it('should rendered MainPage if isSetSettings(common state) equal false', () => {
    mockedUseSelector.mockReturnValue({ isSetSettings: false });
    const wrapper = shallow(<IndexPage />);

    const countMainPage = wrapper.find(MainPage).length;

    expect(countMainPage).toBe(1);
  });

  it('should rendered BuildsPage if isSetSettings(common state) equal true', () => {
    mockedUseSelector.mockReturnValue({ isSetSettings: true });
    const wrapper = shallow(<IndexPage />);

    const countBuildsPage = wrapper.find(BuildsPage).length;

    expect(countBuildsPage).toBe(1);
  });
});
