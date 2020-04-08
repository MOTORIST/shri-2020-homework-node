import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BuildsPage } from './BuildsPage';
import { fetchBuilds } from '../../../actions/builds';
import { fetchSettings } from '../../../actions/settings';

export const BuildsPageContainer = () => {
  const dispatch = useDispatch();

  const {
    isLoaded: isLoadedBuilds,
    entities: buildsData,
    error,
    count: countBuilds,
    isFetching: isFetchingBuilds,
    isMore,
  } = useSelector(state => state.builds);

  const {
    isLoaded: isLoadedSettings,
    entity: { repoName },
  } = useSelector(state => state.settings);

  useEffect(() => {
    !isLoadedSettings && dispatch(fetchSettings());
  }, [dispatch, isLoadedSettings]);

  useEffect(() => {
    !isLoadedBuilds && dispatch(fetchBuilds());
  }, [dispatch, isLoadedBuilds]);

  const handleOnLoadMore = () => {
    dispatch(fetchBuilds(countBuilds));
  };
  const isMoreBuilds = isMore && !isFetchingBuilds;

  return (
    <BuildsPage
      buildsData={buildsData}
      repoName={repoName}
      error={error}
      onLoadMore={handleOnLoadMore}
      isMore={isMoreBuilds}
      isFetchingBuilds={isFetchingBuilds}
    />
  );
};
