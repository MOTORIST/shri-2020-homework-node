import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import DateTime from '../../DateTime';
import './Build-TimeInfo.post.css';
import '../Duration/Build-Duration.post.css';

const BuildCn = cn('Build');

export const TimeInfo = ({ dateTime, duration }) => {
  return (
    <div className={BuildCn('TimeInfo')}>
      <DateTime dateTime={dateTime} />
      <DateTime className={BuildCn('Duration')} dateTime={duration} icon="stopwatch" />
    </div>
  );
};

TimeInfo.propTypes = {
  dateTime: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};
