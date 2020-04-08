import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BuildsPage } from './BuildsPage';
import { fetchBuilds } from '../../../actions/builds';
import { fetchSettings } from '../../../actions/settings';
import { getBuilds } from '../../../reducers/builds';

export const BuildsPageContainer = () => {
  const dispatch = useDispatch();

  const {
    isLoaded: isLoadedSettings,
    entity: { repoName },
  } = useSelector(state => state.settings);

  const {
    isLoaded: isLoadedBuilds,
    error,
    count: countBuilds,
    isFetching: isFetchingBuilds,
    isMore,
  } = useSelector(state => state.builds);

  const buildsData = useSelector(getBuilds);

  useEffect(() => {
    !isLoadedSettings && dispatch(fetchSettings());
  }, [dispatch, isLoadedSettings]);

  useEffect(() => {
    !isLoadedBuilds && dispatch(fetchBuilds());
  }, [dispatch, isLoadedBuilds]);

  const handleOnLoadMore = () => {
    dispatch(fetchBuilds(countBuilds));
  };

  return (
    <BuildsPage
      buildsData={buildsData}
      repoName={repoName}
      error={error}
      onLoadMore={handleOnLoadMore}
      isMore={isMore}
      isFetchingBuilds={isFetchingBuilds}
    />
  );
};
