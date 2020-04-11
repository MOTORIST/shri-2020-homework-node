import React from 'react';
import { Router } from 'react-router-dom';

/**
 * 
 * @param {*} Component 
 * @param {*} historyMock - { push: jest.fn(), location: {}, listen: jest.fn() }
 * 
 * @example
 * const historyMock = {push: jest.fn()};
 * mount(withRouterMock(Component, historyMock));
 * const path = historyMock.push.mock.calls[0][0];
 * expect(path).toBe('/path');
 */
export const withRouterMock = (Component, historyMock) => {
    historyMock = Object.assign({ push: jest.fn(), location: {}, listen: jest.fn()}, historyMock);

    return <Router history={historyMock}><Component /></Router>
}