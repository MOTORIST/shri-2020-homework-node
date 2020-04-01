import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import ms from 'pretty-ms';
import IconPlus, { IconPlusContent } from '../../UI/IconPlus';
import Icon from '../../UI/Icon';
import './Stopwatch.post.css';

const StopwatchCn = cn('Stopwatch');

export const Stopwatch = ({ duration, className }) => {
  const formattedDuration = duration ? ms(duration) : 0;

  return (
    <IconPlus className={StopwatchCn(null, [className])} distance="xs">
      <Icon name="stopwatch" size="m" color="secondary" />
      <IconPlusContent>{formattedDuration}</IconPlusContent>
    </IconPlus>
  );
};

Stopwatch.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
};
