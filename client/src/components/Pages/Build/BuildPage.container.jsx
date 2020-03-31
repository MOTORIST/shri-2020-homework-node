import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BuildPage } from './BuildPage';
import { fetchBuild } from '../../../actions/builds';
import { fetchSettings } from '../../../actions/settings';

export const BuildPageContainer = () => {
  const dispatch = useDispatch();
  const { id: buildId } = useParams();
  const { entities: buildsData } = useSelector(state => state.builds);

  const { isLoaded: isLoadedSettings, entities: settingsData } = useSelector(
    state => state.settings
  );

  const buildData = buildsData
    .filter(build => build.id === buildId)
    .map(build => {
      build.status = build.status.toLowerCase();
      return build;
    })[0];

  useEffect(() => {
    if (!isLoadedSettings) {
      dispatch(fetchSettings());
    }

    if (!buildsData.some(e => e.id === buildId)) {
      dispatch(fetchBuild(buildId));
    }
  }, [buildId, buildsData, dispatch, isLoadedSettings]);

  return <BuildPage repoName={settingsData.repoName} buildData={buildData} />;
};
