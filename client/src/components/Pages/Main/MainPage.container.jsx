import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { MainPage } from './MainPage';

export const MainPageContainer = () => {
  const { isSetSettings } = useSelector(store => store.common);

  if (isSetSettings) {
    return <Redirect to="/builds" />;
  }

  return <MainPage />;
};
