import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BuildsPage } from './BuildsPage';
import { fetchBuilds } from '../../../actions/builds';
import { fetchSettings } from '../../../actions/settings';
import { getBuilds } from '../../../reducers/builds';
import { RootState } from '../../../reducers';

export const BuildsPageContainer: React.FC = () => {
  const dispatch = useDispatch();

  const {
    isLoaded: isLoadedSettings,
    entity: { repoName },
  } = useSelector((state: RootState) => state.settings);

  const {
    isLoaded: isLoadedBuilds,
    error: buildsError,
    count: countBuilds,
    isFetching: isFetchingBuilds,
    isMore,
  } = useSelector((state: RootState) => state.builds);

  const buildsData = useSelector(getBuilds);

  useEffect(() => {
    !isLoadedSettings && dispatch(fetchSettings());
  }, [dispatch, isLoadedSettings]);

  useEffect(() => {
    !isLoadedBuilds && dispatch(fetchBuilds());
  }, [dispatch, isLoadedBuilds]);

  const handleOnLoadMore = (): void => {
    dispatch(fetchBuilds(countBuilds));
  };

  return (
    <BuildsPage
      buildsData={buildsData}
      repoName={repoName}
      buildsError={buildsError}
      onLoadMore={handleOnLoadMore}
      isMore={isMore}
      isFetchingBuilds={isFetchingBuilds}
    />
  );
};
