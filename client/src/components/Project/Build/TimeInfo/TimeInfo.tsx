import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import DateTime from '../../DateTime';
import './Build-TimeInfo.post.css';
import '../Duration/Build-Duration.post.css';
import Stopwatch from '../../Stopwatch';

const BuildCn = cn('Build');

export const TimeInfo = ({ dateTime, duration }) => {
  return (
    <div className={BuildCn('TimeInfo')}>
      {dateTime && <DateTime dateTime={dateTime} />}
      {duration && <Stopwatch className={BuildCn('Duration')} duration={duration} />}
    </div>
  );
};

TimeInfo.propTypes = {
  dateTime: PropTypes.string,
  duration: PropTypes.number,
};
