import React from 'react';
import PropTypes from 'prop-types';
import { format, isThisYear } from 'date-fns';
import cn from '../../../libs/classname';
import Icon from '../../UI/Icon';
import IconPlus, { IconPlusContent } from '../../UI/IconPlus';
import './DateTime.post.css';

const DateTimeCn = cn('DateTime');

export const DateTime = ({ dateTime, icon, className }) => {
  const date = new Date(dateTime);
  const isCurrentYear = isThisYear(date);
  const formatString = isCurrentYear ? 'dd MMM, H:mm' : 'dd MMM yyyy, H:mm';
  const formattedDate = format(date, formatString);

  return (
    <IconPlus className={DateTimeCn(null, [className])} distance="xs">
      <Icon name={icon} size="m" color="secondary" />
      <IconPlusContent>{formattedDate}</IconPlusContent>
    </IconPlus>
  );
};

DateTime.propTypes = {
  dateTime: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['calendar', 'clock', 'stopwatch']).isRequired,
  className: PropTypes.string,
};

DateTime.defaultProps = {
  icon: 'calendar',
};
