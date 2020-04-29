import React from 'react';
import cn from '../../../libs/classname';
// eslint-disable-next-line import/default
import ms from 'pretty-ms';
import IconPlus, { IconPlusContent } from '../../UI/IconPlus';
import Icon from '../../UI/Icon';
import './Stopwatch.post.css';

const StopwatchCn = cn('Stopwatch');

export interface StopwatchProps {
  duration: number;
  className?: string;
}

export const Stopwatch: React.FC<StopwatchProps> = ({ duration, className }) => {
  const formattedDuration = duration ? ms(duration) : 0;

  return (
    <IconPlus className={StopwatchCn(null, [className])} distance="xs">
      <Icon name="stopwatch" size="m" color="secondary" />
      <IconPlusContent>{formattedDuration}</IconPlusContent>
    </IconPlus>
  );
};
