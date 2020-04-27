import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { BuildPage } from './BuildPage';
import { fetchBuild } from '../../../actions/builds';
import { fetchSettings } from '../../../actions/settings';
import { getBuildById } from '../../../reducers/builds';
import api from '../../../api';

export const BuildPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id: buildId } = useParams();
  const buildData = useSelector(getBuildById(buildId));

  const { isLoaded: isLoadedSettings, entity: settingsData } = useSelector(
    state => state.settings
  );

  const [logsData, setLogsData] = useState(null);

  useEffect(() => {
    if (!isLoadedSettings) {
      dispatch(fetchSettings());
    }
  }, [dispatch, isLoadedSettings]);

  useEffect(() => {
    !buildData && dispatch(fetchBuild(buildId));
  }, [buildId, buildData, dispatch]);

  useEffect(() => {
    let isMounted = true;
    
    api.builds.getBuildLogs(buildId)
    .then(({ data, status }) => {
      if (isMounted && status === 200) {
        setLogsData(data);
      }
    })
    .catch(error => console.error(error));

    return () => {
      isMounted = false;
    };
  }, [buildId]);

  const handleRebuild = ({ commitHash }) => {
    api.builds.runBuild(commitHash)
      .then(({ data: { data } }) => {
        history.push(`/builds/${data.id}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <BuildPage
      repoName={settingsData.repoName}
      buildData={buildData}
      logsData={logsData}
      onRebuild={handleRebuild}
    />
  );
};
