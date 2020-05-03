import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const forwardTo = (location: string): void => {
  history.push(location);
};

export default history;
