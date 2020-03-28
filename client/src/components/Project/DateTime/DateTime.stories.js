import React from 'react';
import DateTime from '.';

export default {
  title: 'Project/DateTime',
};

export const dateTime = () => <DateTime dateTime="12 янв, 12:00" />;

export const stopwatch = () => <DateTime dateTime="12:00" icon="stopwatch" />;
