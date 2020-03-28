import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import Icon from '../../UI/Icon';
import IconPlus, { IconPlusContent } from '../../UI/IconPlus';
import './DateTime.post.css';

const DateTimeCn = cn('DateTime');

export const DateTime = ({ dateTime, icon }) => {
  return (
    <IconPlus className={DateTimeCn()} distance="xs">
      <Icon name={icon} size="m" color="secondary" />
      <IconPlusContent>{dateTime}</IconPlusContent>
    </IconPlus>
  );
};

DateTime.propTypes = {
  dateTime: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['calendar', 'clock', 'stopwatch']).isRequired,
};

DateTime.defaultProps = {
  icon: 'calendar',
};
