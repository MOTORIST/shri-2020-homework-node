import React from 'react';
import { useSelector } from 'react-redux';
import BuildsPage from '../Builds';
import MainPage from '../Main';
import { RootState } from '../../../reducers';

export const IndexPage: React.FC = () => {
  const { isSetSettings } = useSelector((state: RootState) => state.common);

  if (isSetSettings) {
    return <BuildsPage />;
  } else {
    return <MainPage />;
  }
};
