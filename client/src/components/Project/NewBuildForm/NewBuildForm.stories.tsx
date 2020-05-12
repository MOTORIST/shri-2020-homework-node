/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import NewBuildForm from '.';

export default {
  title: 'Project',
};

export const newBuildForm = () => {
  const handelSubmit = () => console.log('submit');
  const handelCancel = () => console.log('Cancel');

  return <NewBuildForm onSubmit={handelSubmit} onCancel={handelCancel} />;
};
