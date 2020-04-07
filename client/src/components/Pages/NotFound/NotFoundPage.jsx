import React from 'react';
import { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';

export const NotFoundPage = () => {
  return (
    <>
      <Header title="School CI server" color="secondary" />
      <PageContent contentPosition="center" arrange="col">
        404, page not found
      </PageContent>
    </>
  );
};
