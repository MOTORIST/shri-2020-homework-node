import React, { ReactElement } from 'react';
import { Router } from 'react-router-dom';
import { History } from 'history';

export interface HistoryMock {
  push: () => void;
  location: Record<string, any>;
  listen: () => void;
}

/**
 *
 * @param {*} Component
 * @param {*} historyMock - { push: jest.fn(), location: {}, listen: jest.fn() }
 *
 * @example
 * const historyMock = {push: jest.fn()};
 * mount(withRouterMock(<Component />, historyMock));
 * const path = historyMock.push.mock.calls[0][0];
 * expect(path).toBe('/path');
 */
export const withRouterMock = (
  Component: ReactElement,
  historyMock: Partial<History>,
): React.ReactElement => {
  historyMock = Object.assign({ push: jest.fn(), location: {}, listen: jest.fn() }, historyMock);

  return <Router history={historyMock as History}>{Component}</Router>;
};
