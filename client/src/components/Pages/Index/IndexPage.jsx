import React from 'react';
import { useSelector } from 'react-redux';
import BuildsPage from '../Builds';
import MainPage from '../Main';

export const IndexPage = () => {
  const { isSetSettings } = useSelector(state => state.common);

  if (isSetSettings) {
    return <BuildsPage />;
  } else {
    return <MainPage />;
  }
};
