import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BuildsPage } from './BuildsPage';
import { fetchBuilds } from '../../../actions/builds';
import { fetchSettings } from '../../../actions/settings';

export const BuildsPageContainer = () => {
  const dispatch = useDispatch();

  const { isLoaded: isLoadedBuilds, entities: buildsData, error } = useSelector(
    state => state.builds
  );

  const {
    isLoaded: isLoadedSettings,
    entities: { repoName },
  } = useSelector(state => state.settings);

  useEffect(() => {
    !isLoadedSettings && dispatch(fetchSettings());
  }, [dispatch, isLoadedSettings]);

  useEffect(() => {
    !isLoadedBuilds && dispatch(fetchBuilds());
  }, [dispatch, isLoadedBuilds]);

  return <BuildsPage buildsData={buildsData} repoName={repoName} error={error} />;
};
