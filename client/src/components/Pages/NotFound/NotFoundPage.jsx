import React from 'react';
import { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import Page from '../../Project/Page';
import Footer from '../../Project/Footer';
import cn from '../../../libs/classname';

const NotFoundPageCn = cn('NotFoundPage');

export const NotFoundPage = () => {
  return (
    <Page data-testid="not-found-page" className={NotFoundPageCn()}>
      <Header title="School CI server" color="secondary" />
      <PageContent contentPosition="center" arrange="col">
        404, page not found
      </PageContent>
      <Footer />
    </Page>
  );
};
