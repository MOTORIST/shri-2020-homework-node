import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BuildPage } from './BuildPage';
import { fetchBuild } from '../../../actions/builds';
import { fetchSettings } from '../../../actions/settings';
import webApi from '../../../api';

export const BuildPageContainer = () => {
  const dispatch = useDispatch();
  const { id: buildId } = useParams();
  const { entities: buildsData } = useSelector(state => state.builds);

  const { isLoaded: isLoadedSettings, entities: settingsData } = useSelector(
    state => state.settings
  );

  const [logsData, setLogsData] = useState(null);

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
  }, [dispatch, isLoadedSettings]);

  useEffect(() => {
    if (!buildsData.some(e => e.id === buildId)) {
      dispatch(fetchBuild(buildId));
    }
  }, [buildId, buildsData, dispatch]);

  useEffect(() => {
    webApi(`builds/${buildId}/logs`).then(({ data, status }) => {
      if (status === 200) {
        setLogsData(data);
      }
    });
  }, [buildId]);

  return <BuildPage repoName={settingsData.repoName} buildData={buildData} logsData={logsData} />;
};
