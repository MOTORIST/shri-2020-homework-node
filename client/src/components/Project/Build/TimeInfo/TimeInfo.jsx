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
      {dateTime && <DateTime dateTime={dateTime} />}
      {duration && (
        <DateTime className={BuildCn('Duration')} dateTime={duration} icon="stopwatch" />
      )}
    </div>
  );
};

TimeInfo.propTypes = {
  dateTime: PropTypes.string,
  duration: PropTypes.number,
};
