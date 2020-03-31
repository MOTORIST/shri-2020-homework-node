import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BuildsPage } from './BuildsPage';
import { fetchBuilds } from '../../../actions/builds';
import { fetchSettings } from '../../../actions/settings';

export const BuildsPageContainer = () => {
  const dispatch = useDispatch();
  const { isLoaded: isLoadedBuilds, entities, error } = useSelector(state => state.builds);
  const {
    isLoaded: isLoadedSettings,
    entities: { repoName },
  } = useSelector(state => state.settings);

  let buildsData = null;

  if (entities) {
    buildsData = entities.map(b => {
      b.status = b.status.toLowerCase();
      return b;
    });
  }

  useEffect(() => {
    !isLoadedBuilds && dispatch(fetchBuilds());
    !isLoadedSettings && dispatch(fetchSettings());
  }, [dispatch, isLoadedBuilds, isLoadedSettings]);

  return <BuildsPage buildsData={buildsData} repoName={repoName} error={error} />;
};
