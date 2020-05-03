import React from 'react';
import { format, isThisYear } from 'date-fns';
import cn from '../../../libs/classname';
import Icon from '../../UI/Icon';
import IconPlus, { IconPlusContent } from '../../UI/IconPlus';
import './DateTime.post.css';

const DateTimeCn = cn('DateTime');

export interface DateTimeProps {
  dateTime: string;
  className?: string;
  icon?: 'calendar' | 'clock' | 'stopwatch';
}

export const DateTime: React.FC<DateTimeProps> = ({ dateTime, icon = 'calendar', className }) => {
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
