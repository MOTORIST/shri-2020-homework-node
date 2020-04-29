import React from 'react';
import cn from '../../../../libs/classname';
import DateTime from '../../DateTime';
import './Build-TimeInfo.post.css';
import '../Duration/Build-Duration.post.css';
import Stopwatch from '../../Stopwatch';

const BuildCn = cn('Build');

export interface TimeInfoProps {
  dateTime: string;
  duration: number;
}

export const TimeInfo: React.FC<TimeInfoProps> = ({ dateTime, duration }) => {
  return (
    <div className={BuildCn('TimeInfo')}>
      {dateTime && <DateTime dateTime={dateTime} />}
      {duration && <Stopwatch className={BuildCn('Duration')} duration={duration} />}
    </div>
  );
};
